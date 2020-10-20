const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
  console.log(req.body)
  //return response.status(401).send({ "message": "Veillez vous identifier"});
  //response.send({"pid":request.body.pid});
  res.send(req.body);
})


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
