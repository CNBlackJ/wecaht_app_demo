const signature = require('./utils/signature')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const { port } = require('./config')

app.get('/signature', (req, res) => {
  signature.sign(req.query.urlName, function(signatureInfo) {
    res.send(signatureInfo)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})