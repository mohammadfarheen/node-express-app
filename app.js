const express = require('express')
const app = express()

const hostname = '127.0.0.1'   
const port = 3002

app.get('/', function (req, res) {
app.post('/', function (req, res) {
  console.log('POST request')
  res.send('Welcome back!')
})

app.use(function (req, res, next) {
  console.log('logged')
  next()
})

app.get('/hello', (req, res) => {
  console.log('GET request')
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  console.log('GET request')
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})
 
app.get('/one',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>The number, ' + req.params.one + ' was selected!</h1>')
})

app.get('/two',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>The number, ' + req.params.one + ' was selected!</h1>')
})

app.get('/three',  (req, res) =>{
  console.log('GET request')
  res.send('<h1>The number, ' + req.params.one + ' was selected!</h1>')
})

})

