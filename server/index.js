const express = require('express');
const app = express();
const {db, Reviews} = require ('../database/index.js')
const mysql = require('mysql');
const port = 8003;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

// db.authenticate()
//   .then(() => console.log('db connected'))
//   .catch(err => console.log('err:', err))


app.get('/reviews', (req, res) => {
  Reviews.sync()
  .then(() => {
    return Reviews.findAll()
  })
  .then(reviews => res.json(reviews.slice(0, 3)))
  .catch(err => console.log('index get', err))
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