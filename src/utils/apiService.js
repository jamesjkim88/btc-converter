import axios from 'axios';

function getBTCRate(){
  return axios.get('/api/btc')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log("ERROR ON BTC EXCHANGE RATE: ", err));
}

export default {
  getBTCRate
}