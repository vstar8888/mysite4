const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const axios = require('axios');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(favicon(path.join(__dirname,'public','images','favicon.ico')))
  .get('/', (req, res) => res.render('pages/index'))
  .get('/a', (req, res) => res.render('pages/a'))
  .get('/b', (req, res) => res.render('pages/b'))
  .get('/d', (req, res) => res.render('pages/d'))
  .get('/c', (req, res) => res.render('pages/c'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
