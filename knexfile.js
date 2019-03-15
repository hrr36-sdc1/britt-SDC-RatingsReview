module.exports = { 
  development: { 
    client: "postgresql", 
    connection: { 
      host: 'ec2-3-90-3-185.compute-1.amazonaws.com', 
      user: 'postgres',
      password: '', 
      port: '5432', 
      database: 'reviews_db' //my pg database
    },
    migrations: { 
      directory: __dirname + "/database/migrations" 
    }, 
    seeds: { 
      directory: __dirname + "/database/seed" 
    } 
  } 


  // staging: { 
  //   client: "postgresql", 
  //   connection: { 
  //     host: process.env.RDS_HOSTNAME, 
  //     user: process.env.RDS_USERNAME, 
  //     password: process.env.RDS_PASSWORD, 
  //     port: process.env.RDS_PORT, 
  //     database: process.env.RDS_DB_NAME 
  //   }, 
  //   pool: { 
  //     min: 0, 
  //     max: 10 
  //   }, 
  //   migrations: { 
  //     tableName: "knex_migrations" 
  //   } 
  // }, 


// production: { 
//   client: "postgresql", 
//   connection: { 
//     host: process.env.RDS_HOSTNAME, 
//     user: process.env.RDS_USERNAME, 
//     password: process.env.RDS_PASSWORD, 
//     port: process.env.RDS_PORT, 
//     database: process.env.RDS_DB_NAME 
//   }, 
//   pool: { 
//     min: 0, 
//     max: 10 
//   }, 
//   migrations: { 
//     directory: __dirname + "/database/seeds" 
//   } 
//} 
};
