module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        username: 'Abhishek',
        email: 'janedoe@example.com',
				password:'secret123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Dhruval',
        email: 'jondoe@example.com',
				password:'secret123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
			{
        username: 'Anish',
        email: 'jondoe@example.com',
				password:'secret123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

