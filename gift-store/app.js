const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
const router = express.Router();
const PORT = process.env.PORT || 5000
const apiBaseUrl= '/api'
bodyParser = require('body-parser') // to read the json (type de communication )
app.use(express.urlencoded({ extended: false}))  // to froce JSON 
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/gift-store')
.then(()=> console.log('MongoDB Connected ...'))
.catch(err=>console.log(err))
app.use(cors({
    origin: '*'
}));


app.use(apiBaseUrl, require('./routes/ProductRoutes'))

app.use(apiBaseUrl, require('./routes/CategoryRoutes'))

app.listen(PORT,console.log('Server started on PORT: '+ PORT))