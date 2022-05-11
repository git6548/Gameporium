const seedUsers = require('./user-seeds');
// const seedRates = require('./rate-seeds');
// const seedComments = require('./comment-seeds');
const seedCommentrates = require('./comment-rate-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('************');
  
  await seedUsers();
  console.log('************');

  await seedCommentrates();
  console.log('************');

  // await seedComments();
  // console.log('************');

  // await seedRates();
  // console.log('************');

  process.exit(0);
};

seedAll();
