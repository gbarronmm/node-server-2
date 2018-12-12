const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

var maintenece = (req, res, next) => {
  res.render('maintenece');
};

hbs.registerHelper('getCurrnetYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('shoutIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    welcomeMessage: "welcome to my website."
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  });
});


app.listen(3000, () => {
  console.log('Server is starting on port 3000');
});
