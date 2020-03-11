const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static(path.join(__dirname,"../client/dist")));

app.get('/', (req, res) => res.send('Proxy!'))

app.listen(port, () => console.log(`Proxy listening on port ${port}!`))