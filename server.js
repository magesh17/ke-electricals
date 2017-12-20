const express = require('express')
const app = express()
var path    = require("path");


app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/products', function (req, res) {
  res.render('products');
})

app.get('/services', function (req, res) {
  res.render('services');
})

app.get('/enquiry', function (req, res) {
  res.render('enquiry');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
