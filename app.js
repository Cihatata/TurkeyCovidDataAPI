const express = require('express')
const app = express()
const port = 8000
const cors = require("cors")
const service = require('./index')
const province = require('./provinces')

app.use(cors())

app.get('/', async (req, res) => {
   const result = await service.getResult
    res.send(result);
})
app.get('/provinces', (req, res) => {
    let result = province.provinces
    res.send(result)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))