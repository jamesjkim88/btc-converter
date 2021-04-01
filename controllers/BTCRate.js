const axios = require('axios').default;

function getBTCRate(req, res){
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=BTC`)
    .then(function(data){
      res.status(200).json(data.data);
    }).catch(err => console.log("ERROR ON BTC EXCHANGE: ", err));
};

module.exports = {
  getBTCRate
}