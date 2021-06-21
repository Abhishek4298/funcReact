'use strict';
const sequelize = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    'Users',
    {
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			}
    },
    { timestamps: true, tableName: 'Users' },
  );
  return User;
};