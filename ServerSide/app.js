require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("./db/Connection")
const cookieparser = require("cookie-parser")

const Products = require('./Models/ProductsSchema.js')

const defaultData = require('./defaultData.js')
const cors = require('cors')
const router = require("./Routes/Router.js")
app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieparser(""));
const port = 8005

app.listen(port, () => {
    console.log(`Server is  running on port number ${port}`);
})

defaultData();