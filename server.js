//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
const express = require('express')
const router = express.Router();
const app = express()
const port = 3000



//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var getPrice = async() => {
  let coin = await CoinGeckoClient.coins.fetchMarketChart('bitcoin');
  currentPrice = coin.data.prices[0][1];
};


getPrice();


app.get('/', (req, res) => {
  //res.sendFile(__dirname + "/index.html", {price:price});
  res.render("index.ejs", {price: currentPrice});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})