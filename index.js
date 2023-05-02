const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

const chef = require('./data/chefInfo.json')

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chef Hunter is Running')
});
app.get('/chefInfo',(req,res)=>{
    res.send(chef)
});

app.listen(port,()=>{
    console.log(`Chef Hunter API is running on port: ${port}`);
})