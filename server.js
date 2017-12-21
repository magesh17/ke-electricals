const express = require('express')
const app = express()
var path    = require("path");
var port = process.env.PORT || 8080;

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

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

