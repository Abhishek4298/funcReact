require('dotenv').config();

const x = {
	development: {
		username: 'postgres',
    password: 'secret123',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
  },
  // prod: {
	// 	username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // },
  // stag: {
	// 	username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: process.env.DB_DIALECT,
  // },
};
console.log("Aasdasd",x.development);
module.exports = x;
