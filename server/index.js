const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
const {db, Reviews} = require ('../database/index.js')
const mysql = require('mysql');
const port = 8003;
var config = require("../knexfile"); 
var env = "development"; 
var knex = require("knex")(config[env]); 

app.use(express.static(__dirname + '/../public'));
app.use(cors());
app.use(bodyParser.json());

// db.authenticate()
//   .then(() => console.log('db connected'))
//   .catch(err => console.log('err:', err))


app.get('/reviews/:id', (req, res) => {
  var startTime = Date.now()

  return knex
  .from("reviews")
    .where("id", req.params.id)
    .then(reviews => {
      var totalTime = Date.now() - startTime;
      console.log(`Query returned ${reviews.length} reviews in ${totalTime} ms.`);
      res.send(reviews);
    })
    .catch((err) => {console.log('index get'), err})
  // Reviews.findAll({}, function(err, reviews) {
  //   if (err) {
  //     res.send('error', err)
  //   } else {
  //     console.log('this is my index success', reviews)
  //     res.json(reviews)
  //   }
  // })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})