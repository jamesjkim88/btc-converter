import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function ConvertedAmount(){
  return(
    <div className="info container">
      <h1 className="info-title"><span className="red-border">Simply BTC-to-USD</span></h1>
      <section className="about">
        <h2 className="info-copy info-header"><span className="red-border">About</span></h2>
        <p className="info-copy info-subhead">This tool can help you to:</p>
        <ul className="info-list">
          <li className="info-list-item info-copy">Able to see curent market value of Bitcoin in U.S Dollar</li>
          <li className="info-list-item info-copy">Convert Bitcoin (BTC) to U.S Dollar (USD)</li>
        </ul>
      </section>
      <section className="usage">
        <h2 className="info-copy info-header"><span className="red-border">Usage</span></h2>
        <p className="info-copy info-subhead">Here is how you can use the tool:</p>
        <ul className="info-list">
          <li className="info-list-item info-copy">Enter amount of Bitcoin. On the empty input field, you can simply enter the number amount of Bitcoins you would like to see in U.S Dollars</li>
          <li className="info-list-item info-copy">This tool can help you decide how many Bitcoin(s) you want neccessary for you</li>
          <li className="info-list-item info-copy">Try it on any mobile device! Fully responsive and designed for any devices</li>
          <li className="info-list-item info-copy">Bookmark this page for quick and efficient BTC-to-USD converter</li>
        </ul>
      </section>
      <section className="disclaimer">
        <h2 className="info-copy info-header"><span className="red-border">Disclaimer</span></h2>
        <p className="info-copy">The exchange rate on this site is use for information purposes only. They are not guarnteed to be accurate and are subjec to change without notice.</p>
      </section>
      <section className="data">
        <h2 className="info-copy info-header"><span className="red-border">Data</span></h2>
        <p className="info-copy">Price data is supported by Nomadic Cyrpto Currenty API for Bitcoin.</p>
      </section>
      <br/>
      <Button content="Top" color="facebook"/>
    </div>
  )
}