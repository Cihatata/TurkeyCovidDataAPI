const express = require('express')
const app = express()
const port = 8000
const cors = require("cors")
const redis = require('redis')
const service = require('./index')
const province = require('./provinces')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port_redis = 6379;

const redis_client= redis.createClient(port_redis)

app.use(cors())

checkCache = (req, res, next) => {
    const  id  = req.originalUrl;

    redis_client.get(id, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        //if no match found
        if (data != null) {
            res.send(data);
        } else {
            //proceed to next middleware function
            next();
        }
    });
};

app.get('/', checkCache, async (req, res) => {
    const id = req.originalUrl
   const result = await service.getResult
    redis_client.setex(id, 2*60, JSON.stringify(result));
    res.send(result);
})
app.get('/provinces', checkCache, (req, res) => {
    let result = province.provinces
    redis_client.setex('/provinces',60,JSON.stringify(result))
    res.send(result)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))