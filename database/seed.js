var config = require("../knexfile"); 
var env = "development"; 
var knex = require("knex")(config[env]); 
const faker = require("faker"); 

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

const createFakeReview = () => {
  return {
    nickname: faker.internet.userName(),
    review: faker.lorem.sentences(),
    rating: faker.random.number({
      min: 0,
      max: 5
    }),
    recommend: faker.random.boolean(),
    createdAt: faker.date.past(),
    index: faker.random.number({
      min: 0,
      max: 100000
    })
  }
}


const createFakeProduct = () => {
  return {
    name: faker.commerce.productName()
  }
}



let seedReviews = function(){   
  const fakeReviews = [];
  const total = 10;
    for (var i = 0; i < total; i++) {
      fakeReviews.push(createFakeReview());
    }

    return knex("reviews").insert(fakeReviews) //invoke faker func until i = 50k
    .then(function () { 

  console.log('Seeding 5 review records!')
  }) 
} 
seedReviews(); 