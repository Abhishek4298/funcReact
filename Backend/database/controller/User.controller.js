const Sequelize = require('sequelize');
const { Users } = require('../models');

exports.list = async (req, res) => {
	const data = await Users.findAll({
		raw:true
	});
  console.log("exports.list= ~ data", data)	
}

exports.create = async (req, res) => {
	try{
		const {username,email,password}= req.body;
		const payload={
			username,email,password
		}
		const data = await Users.create(payload);
		console.log("exports.create= ~ data", data)
	}
	catch(e){
  console.log("🚀 ~ fileerrrrror eror", e)
	}
}