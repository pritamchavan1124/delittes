//const { response } = require('express')
var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')

app.get('/',(require,response)=>{
  response.sendFile('public/index.html',{root:__dirname})
})

app.listen(8081,'0.0.0.0',()=>{
    console.log('sever started on port no 8081');
})
