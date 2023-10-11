const express = require('express')
const isikukood = require('./isikukood')
const app = express()

//HTML 'views' Files
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const parser = require('body-parser')
let encodeUrl = parser.urlencoded({extended: true});

app.get('/', (req, res) => {
    res.render('validate_form')
  })

app.post('/validate', encodeUrl, (req, res) => {
  res.render('validate_results', {data: isikukood.parseIsikukood(req.body.isikukood)}); 
  //console.log(req.body.Vastus)
})

app.listen(3005, () => {
    console.log(`Example app is started at http://localhost:3000`)
  })

