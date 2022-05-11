const sequelize = require('../config/connection');
const  { User, Commentrate }   = require('../models');

const userdata = [
  {
    username: 'firstuser',
    email: 'firstuser@gmail.com',
    password: 'firstpassword',
    genre_preference: 'RPG'
  },
  {
    username: 'seconduser',
    email: 'seconduser@gmail.com',
    password: 'secondpassword',
    genre_preference: 'FPS'
  },
  {
    username: 'thirduser',
    email: 'thirduser@gmail.com',
    password: 'thirdpassword',
    genre_preference: 'Platformer'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
