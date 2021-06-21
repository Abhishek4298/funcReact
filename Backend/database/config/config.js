require('dotenv').config();

const x = {
	development: {
		username: 'postgres',
    password: 'secret123',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
  },
  prod: {
		username: 'postgres',
    password: 'secret123',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
  },
  stag: {
		username: 'postgres',
    password: 'secret123',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
  },
};

module.exports = x;
