import React, { useState, useEffect } from 'react';
//import ConvertedAmount from '../ConvertedAmount/ConvertedAmount';
import apiService from '../../utils/apiService';
import { Input, Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';

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

  // const convertedAmount = () => {
  //   return "$"+inputAmount * btcPrice;
  // }

  function convertedAmount() {
    // return `$${inputAmount * btcPrice}`
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    const data = `${inputAmount * btcPrice}`
    return formatter.format(data)
  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('caption', state.caption)
    
    // Have to submit the form now! We need a function!
  }

  useEffect(() => {
    getBTCRate();
  }, [])
  return(
    <div className="conversion" id="conversion">
      <div className="row">
        <h1 className="title">BTC <span className="icon"><i class="fas fa-long-arrow-alt-right"></i></span> USD</h1>
        <Input focus placeholder='# of BTC...' onChange={handleChange}/>
        <h1 className="title converted-amount">{ inputAmount ? convertedAmount() : "" }</h1>
      </div>
   

    </div>
  )
}