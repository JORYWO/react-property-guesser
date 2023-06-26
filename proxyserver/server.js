const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")

app.use(cors())

app.get("/", async (req, res) => {
  const max = 1000;
  const propertyNum = 24;
  const randomLocationIdentifier = `REGION^${Math.floor(Math.random() * max)}`;
  const response = await axios.get(`https://www.rightmove.co.uk/api/_search?locationIdentifier=${randomLocationIdentifier}&numberOfPropertiesPerPage=${propertyNum}&radius=1.0&sortType=2&index=0&includeSSTC=false&viewType=LIST&channel=BUY&areaSizeUnit=sq`)
  res.json(await response.data.properties[Math.floor(Math.random() * propertyNum)])
})


app.listen(3000,  () => {
  console.log("Listening on port 3000")
})