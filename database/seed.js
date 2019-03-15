var config = require("../knexfile"); 
var env = "development"; 
var knex = require("knex")(config[env]); 
const faker = require("faker"); 
const fs = require('fs');
const pathToFile = __dirname + '/seed1.csv';
// const cassandra = require('cassandra-driver');
// const cassanKnex = require('cassanknex');




function writeFakeData() {
  //empty the file first
  fs.writeFileSync(pathToFile, 'reviewid|help_yes|nickname|date|help_no|rating|review\n');

  var chunk = 0;
  var agregateQuery = '';
  for (var j = 0; j < 1000000; j++) {
    chunk++;
      agregateQuery +=
        Math.floor(Math.random() * (2000000)) + '|' +
        + Math.floor(Math.random()* (40)) + '|' +
        '"' + faker.internet.userName() + '"|' +
        '"' + faker.date.past() + '"|' +
        Math.floor(Math.random()* (40)) + '|' +
        + Math.floor(Math.random() * (5)) + '|' +
        '"' + faker.lorem.sentences() + '"\n'

        if (chunk >= 1000) {
          fs.appendFileSync(pathToFile, agregateQuery)
          chunk = 0;
          agregateQuery = '';
        }
  }
  console.log('seeded')
}
writeFakeData();


/*
Reviews:
id: assigned by pg
nickname: chars
review: chars
rating: int w/range 0-5
recommend: boolean
createdAt: date
index: int, rand w/range 0 - 5mil

nickname: faker.internet.userName()
review: faker.lorem.sentences()
rating: faker.random.number({
  min: 0,
  max: 5
})
recommend: faker.random.boolean()   //or faker.random.arrayElement(["true", "false"])
createdAt: faker.date.past()
index: faker.number.between({
  min: 0,
  max: 100,000
})
*/

// const createFakeReview = () => {
//   return {
//     nickname: faker.internet.userName(),
//     review: faker.lorem.sentences(),
//     rating: faker.random.number({
//       min: 0,
//       max: 5
//     }),
//     recommend: faker.random.boolean(),
//     createdAt: faker.date.past(),
//     index: faker.random.number({
//       min: 0,
//       max: 100000
//     })
//   }
// }


// const createFakeProduct = () => {
//   return {
//     name: faker.commerce.productName()
//   }
// }



// let seedReviews = function(){   
//   const fakeReviews = [];
//   const total = 10000;
//     for (var i = 0; i < total; i++) {
//       fakeReviews.push(createFakeReview());
//     }

//     return knex("reviews").insert(fakeReviews) //invoke faker func until i = 50k
//     .then(function () { 

//   console.log('Seeding batch of 10k review records complete!')
//   }) 
// } 
//  seedReviews();

// let seedProducts = function(){   
//   const fakeProducts = [];
//   const total = 40000;
//     for (var i = 0; i < total; i++) {
//       fakeProducts.push(createFakeProduct());
//     }

//     return knex("products").insert(fakeProducts) //invoke faker func until i = 50k
//     .then(function () { 

//   console.log('Seeding batch of 40k product records complete!')
//   }) 
// } 
// seedProducts(); 

