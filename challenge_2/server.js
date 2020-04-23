const express = require("express");
const request = require("request");
const moment = require("moment")
const path = require("path");

const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/hisoricalData', (req, res) => {
  const options = {
    url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=2010-07-17&end=${moment().format("YYYY-MM-DD")}`,
    headers: { 'User-Agent': 'request' }
  };

  const callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const prices = data.bpi;
      const formattedPrices = [];
      Object.entries(prices).forEach(([key, value]) => formattedPrices.push({ date: key, price: value}));
      res.send(formattedPrices);
    }
  }

  request(options, callback);
});

app.listen(port, () => console.log(`Example app listening on ${port}`));
