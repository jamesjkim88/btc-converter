import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input } from 'semantic-ui-react';

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

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <div className="conversion" id="conversion">
      <div className="row">
        <h1 className="title">BTC <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span> USD</h1>
        <Input focus placeholder='# of BTC...' onChange={handleChange}/>
        <h1 className="title converted-amount">{ inputAmount ? convertedAmount() : "" }</h1>
      </div>
   

    </div>
  )
}