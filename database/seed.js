var config = require("../knexfile"); 
var env = "development"; 
var knex = require("knex")(config[env]); 
const faker = require("faker"); 


const createFakeProduct = () => {
  return {
    name: faker.commerce.productName()
  }
}




let seed = function(){   
  const fakeProducts = [];
  const total = 5;
    for (var i = 0; i < total; i++) {
      fakeProducts.push(createFakeProduct());
    }

    return knex("products").insert(fakeProducts) //invoke faker func until i = 50k
    .then(function () { 

  console.log('Seeding 5 records!')
  }) 
} 
seed(); 