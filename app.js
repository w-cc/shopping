var express = require('express')
var path=require('path')

var app = express()

app.use('/public/',express.static(path.join(__dirname ,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

// view engine setup
app.engine('html', require('express-art-template'))
//views目录
app.set('views', path.join(__dirname, './views/'))

app.get('/',function(req,res){
    res.render('index.html'    )
})

app.get('/log',function(req,res){
    res.render('login.html'     )
})
app.get('/reg',function(req,res){
    res.render('register.html'    )
})
app.listen(3000,function(){
    console.log('running...')
})