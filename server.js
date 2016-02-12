/* jshint node:true */
"use strict";
const express = require('express'),
          app = express(),
         port = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.use('/', (req, res)=>{
    res.sendFile(process.cwd() + '/client/html/index.html');
});


app.listen(port, ()=>{
    console.log('App listening on port: '+port);
});