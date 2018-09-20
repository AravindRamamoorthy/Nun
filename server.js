var express = require('express')
var path = require('path')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname,'/views')))



app.post('/login',function(req,res){
    console.log(req)
    res.sendFile(__dirname+'/views/home.html')
})

app.listen(80,()=>{
    console.log("localhost://80")
})