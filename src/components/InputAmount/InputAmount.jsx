import React, { useState, useEffect } from 'react';
import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
//import { Input, Dropdown } from 'semantic-ui-react';

export default function InputAmount(){

  async function getBTCRate(){
    try {
      const data = await apiService.getBTCRate();
      console.log("data form btc rate: ", data.data[0].price);
    } catch(err){
      console.log("ERROR FROM BTCRATE: ", err)
    }
  }

  useEffect(() => {
    getBTCRate();
  }, [])
    //  getBTCRate();
  return(
    <>
      <h1>Input Amount component</h1>
      <ConvertedAmount />
    </>
  )
}