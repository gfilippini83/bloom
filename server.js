var express = require('express');
var cors = require('cors');
var bodyParser= require('body-parser');

const app = express()
  .use(cors())
  .use(bodyParser.json())



app.listen(4201, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('My Node App listening on port 4201');
});