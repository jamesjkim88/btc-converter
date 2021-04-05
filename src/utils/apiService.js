import axios from 'axios';

function getBTCRate(crypto, currency){
  return axios.get('/api/btc/' + crypto + "/" + currency)
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log("ERROR ON BTC EXCHANGE RATE: ", err));
}

export default {
  getBTCRate
}