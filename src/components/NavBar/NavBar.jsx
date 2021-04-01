import React, { useState, useEffect } from 'react';

export default function NavBar(){
  return(
    <nav id="top">
    <ul>
      <li className="nav-left-pad btc-logo"><img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" alt="BTC" width="75"/></li>
      <li className="nav-top-pad"><h1>Simply BTC-to-USD</h1></li>
      <li className="nav-right-pad li.nav-top-pad help-icon"><a href="#info"><i class="far fa-question-circle"></i></a></li>
    </ul>
  </nav>
  )
}