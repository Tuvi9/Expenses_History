const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000, () => {
    console.log(`Example app is started at http://localhost:3000`)
  })