import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input, Dropdown } from 'semantic-ui-react';

export default function InputAmount(){

  const [btcData, setBTCData] = useState();
  const [btcPrice, setBtcPrice] = useState(null);
  const [inputAmount, setInputAmount] = useState(null);
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    caption: ''
  })
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
      currency: 'USD'
    })
    const data = `${inputAmount * btcPrice}`
    return formatter.format(data)
  }

//   const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

  const cyrptoOptions = [
    {key: "BTC", value: "BTC", text: "BTC"},
    {key: "ETH", value: "ETH", text: "ETH"},
    {key: "LTC", value: "LTC", text: "LTC"}
  ]

  const currencyOptions = [
    {key: "USD", value: "USD", text: "USD"},
    {key: "WON", value: "WON", text: "WON"},
    {key: "EURO", value: "EURO", text: "EURO"}
  ]

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <div className="conversion" id="conversion">
      <div className="row">
        <Dropdown defaultValue="BTC" search selection options={cyrptoOptions} /> <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> <Dropdown defaultValue="USD" search selection options={currencyOptions} />
        {/* <h1 className="title">BTC <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> USD</h1> */}
        <Input focus placeholder='# of BTC...' onChange={handleChange}/>
        <h1 className="title converted-amount">{ inputAmount ? convertedAmount() : "" }</h1>
      </div>
   

    </div>
  )
}