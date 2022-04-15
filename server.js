const express = require('express')

const app= express()
const bodyParser=require('body-parser')

const cors=require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors());

const products=require('./routes/index')
const port= 3000;

app.use("/api",products)

app.listen(port, ()=>{
    console.log(`shopping cart app listening att http://localhost:${port}`)
})
