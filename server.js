'use strict';

require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors');
const axios = require('axios');

const server = express();
server.use(cors()); 
const PORT = process.env.PORT || 3030;


server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})

const getweather = require('./models/weather');
const getmovie = require('./models/movies');

// routes

server.get('/',homeHandler)
server.get('/weather',getweather) 
server.get('/movies',getmovie) 


// http://localhost:3033/test
function homeHandler(req,res){
    let str = 'Ali Shiyyab is Here ! ';
    res.send(str);
}




server.get('*',(req,res) =>{
    res.status(500).send('sorry, this page not found');
  });