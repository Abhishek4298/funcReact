'use strict';
const sequelize = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'User',
    {
			username: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			}
    },
    { timestamps: true, tableName: 'user' },
  );
  return User;
};