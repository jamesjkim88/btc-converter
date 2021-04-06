import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input, Dropdown, Grid } from 'semantic-ui-react';

export default function InputAmount(){

  const [btcData, setBTCData] = useState();
  const [btcPrice, setBtcPrice] = useState(null);
  const [inputAmount, setInputAmount] = useState(null);
  const [cashCurrency, setCashCurrency] = useState('USD');
  const [cryptoCurrency, setCryptoCurrency] = useState('BTC');

  const cyrptoOptions = [
    {key: "BTC", value: "BTC", text: "BTC"},
    {key: "ETH", value: "ETH", text: "ETH"},
    {key: "XRP", value: "XRP", text: "XRP"},
    {key: "XLM", value: "XLM", text: "XLM"},
    {key: "USDT", value: "USDT", text: "USDT"},
    {key: "ADA", value: "ADA", text: "ADA"},
    {key: "LINK", value: "LINK", text: "LINK"},
    {key: "LTC", value: "LTC", text: "LTC"},
    {key: "BCH", value: "BCH", text: "BCH"},
    {key: "USDC", value: "USDC", text: "USDC"}
  ]

  const currencyOptions = [
    {key: "USD", value: "USD", text: "USD"},
    {key: "AUD", value: "AUD", text: "AUD"},
    {key: "CAD", value: "CAD", text: "CAD"},
    {key: "EUR", value: "EUR", text: "EUR"},
    {key: "GBP", value: "GBP", text: "GBP"}
  ]

  async function getBTCRate(cryptoCurrency, cashCurrency){
    try {
      const data = await apiService.getBTCRate(cryptoCurrency, cashCurrency);
      setBtcPrice(data.data[0].price);
    } catch(err){
      console.log("ERROR FROM BTCRATE: ", err)
    }
  }

  function handleChange(evt){
    setInputAmount(evt.target.value);
  }

  function convertedAmount() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: cashCurrency
    })
    const data = `${inputAmount * btcPrice}`
    return formatter.format(data)
  }

  function handleCryptoChange(evt){
    setCryptoCurrency(evt.target.textContent);
  }

  function handleCurrencyChange(evt){
    setCashCurrency(evt.target.textContent);
  }

  useEffect(() => {
    getBTCRate(cryptoCurrency, cashCurrency);
  }, [inputAmount, cashCurrency, cryptoCurrency])
  
  return(
    <div className="conversion" id="conversion">
      <div className="row">
        <Dropdown defaultValue={cryptoCurrency} search selection options={cyrptoOptions} onChange={handleCryptoChange} /> <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> <Dropdown defaultValue={cashCurrency} search selection options={currencyOptions} onChange={handleCurrencyChange} />
        <Input focus placeholder={`# of ${cryptoCurrency}...`} onChange={handleChange}/>
        <h1 className="title converted-amount">{ inputAmount ? convertedAmount() : "" }</h1>
      </div>
    </div>
  )
}