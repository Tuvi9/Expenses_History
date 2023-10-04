const express = require('express')
const app = express()

//HTML 'views' Files
const path = require('path')
app.set('view engine', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))

const parser = require('body-parser')
let encodeUrl = parser.urlencoded({extended: true});

app.get('/', (req, res) => {
    res.render('validate_form.ejs')
  })
app.post('/validate', encodeUrl, (req, res) => {
  console.log(req.body)
  //console.log(req.body.Vastus)
})

app.listen(3000, () => {
    console.log(`Example app is started at http://localhost:3000`)
  })