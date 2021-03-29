import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input } from 'semantic-ui-react';

export default function InputAmount(){

  const [btcData, setBTCData] = useState();
  const [btcPrice, setBtcPrice] = useState(null);
  const [inputAmount, setInputAmount] = useState(null);

  async function getBTCRate(){
    try {
      const data = await apiService.getBTCRate();
      console.log("data form btc rate: ", data.data[0].price);
      setBtcPrice(data.data[0].price);
    } catch(err){
      console.log("ERROR FROM BTCRATE: ", err)
    }
  }

  function handleChange(evt){
    console.log(`value: ${evt.target.value}`)
    setInputAmount(evt.target.value);
  }

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <>
      <h1>Input Amount component</h1>
      {/* 
      
        either set default value as 1 or 
        render the value when input amount is entered and convert value whenever inputAmount state changes
      
      */}
      <Input focus placeholder='Input amount of coins...' onChange={handleChange}/>
      <h1>{ inputAmount ? btcPrice : "input amount of coins bruh" }</h1>
    </>
  )
}