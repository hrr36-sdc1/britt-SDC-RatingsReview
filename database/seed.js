var config = require("../knexfile"); 
var env = "development"; 
var knex = require("knex")(config[env]); 
const faker = require("faker"); 


let seed = function(){   


  return knex("products").insert({name:'adidas'}) 
  .then(function () { 

  console.log('Seeding a record!')
  }) 
} 
seed(); 