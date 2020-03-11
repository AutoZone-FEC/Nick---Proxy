const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Proxy listening on port ${port}!`))