const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());

app.get('/video',(req,res)=>{
    res.sendFile('./assets/video1.mp4',{ root: __dirname });
});

const Videos = require('./routes/Videos');
app.use('/videos', Videos);


app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});
