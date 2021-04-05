import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input, Dropdown } from 'semantic-ui-react';

export default function InputAmount(){

  const [btcData, setBTCData] = useState();
  const [btcPrice, setBtcPrice] = useState(null);
  const [inputAmount, setInputAmount] = useState(null);
  const [cashCurrency, setCashCurrency] = useState('USD');
  const [cyrptoCurrency, setCryptoCurrency] = useState('BTC');

  const cyrptoOptions = [
    {key: "BTC", value: "BTC", text: "BTC"},
    {key: "ETH", value: "ETH", text: "ETH"},
    {key: "LTC", value: "LTC", text: "LTC"}
  ]

  const currencyOptions = [
    {key: "USD", value: "USD", text: "USD"},
    {key: "WON", value: "WON", text: "WON"},
    {key: "EUR", value: "EUR", text: "EUR"}
  ]

  async function getBTCRate(){
    try {
      const data = await apiService.getBTCRate();
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



  function handleOnChange(evt){
    setCashCurrency(evt.target.textContent);
    setCryptoCurrency(evt.target.textContent);
  }

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <div className="conversion" id="conversion">
      <div className="row">
        <Dropdown defaultValue="BTC" search selection options={cyrptoOptions} onChange={handleOnChange} /> <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> <Dropdown defaultValue="USD" search selection options={currencyOptions} onChange={handleOnChange} />
        {/* <h1 className="title">BTC <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> USD</h1> */}
        <Input focus placeholder='# of BTC...' onChange={handleChange}/>
        <h1 className="title converted-amount">{ inputAmount ? convertedAmount() : "" }</h1>
      </div>
    </div>
  )
}