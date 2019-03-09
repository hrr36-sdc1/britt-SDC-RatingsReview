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
app.use(bodyParser.urlencoded({ extended: true }));

// db.authenticate()
//   .then(() => console.log('db connected'))
//   .catch(err => console.log('err:', err))


app.get('/reviews/:id', (req, res) => {
  var startTime = Date.now()

  return knex
  .from("reviews")
    .where("index", req.params.id)
    .limit(Math.floor(Math.random() * 6))
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

app.post('/postreviews/323', (req, res) => {
  knex("reviews")
    .insert({ nickname: req.body.nickname,
          review: req.body.review,
          rating: req.body.rating,
          recommend: req.body.recommend,
          createdAt: req.body.createdAt,
          index: req.body.index
          })
    .then(reviews => {res.send('POST request to the homepage')});
})

app.patch('/reviews/1600', function(req, res) {
  knex("reviews")
    .increment('help_yes')
    .where('index', 1600)
    .then(reviews => {res.send('PATCH request to the homepage')});
})

app.delete('/reviews/:id', function(req, res) {
  knex("reviews")
    .where('id', req.params.id)
    .del()
    .then(reviews => {res.send('DELETE request to the homepage')});
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})








