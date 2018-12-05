var express = require('express')
var app = express()
var path = require('path')
app.listen(8000, () => {
    console.log("Listening on port 8000")
})
app.use(express.static(__dirname + '/public/dist/public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html')
})

app.all('*', function(req, res){
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})