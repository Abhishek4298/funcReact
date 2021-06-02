require('dotenv').config()

module.exports = {
	development: {
		url: process.env.DEV_DATABASE_URL,
		dialect: 'postgres',
		database: "reactUser",
		username: "abhi",
		password: "secret123",
	},
	test: {
		url: process.env.TEST_DATABASE_URL,
		dialect: 'postgres',
	},
	production: {
		url: process.env.DATABASE_URL,
		dialect: 'postgres',
	},
}

