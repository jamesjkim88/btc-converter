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

  const convertedAmount = () => {
    return "$"+inputAmount * btcPrice;
  }

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <>
      <h1>Input Amount component</h1>
      {/* 
      
        need to have btcPrice converted into amount of inputAmount so
        inputAmount * btcPrice = convertedAmount
      
      */}
      <Input focus placeholder='Input amount of coins...' onChange={handleChange}/>
      <h1>{ inputAmount ? convertedAmount() : "input amount of coins bruh" }</h1>
    </>
  )
}