const { Commentrate } = require('../models');

const commentratedata = [
  {
    comment_text: 'This is the first comment.',
    user_id: 1,
    game_id: 1,
    rating: 5
  },
  {
    comment_text: 'This is the second comment',
    user_id: 2,
    game_id: 2,
    rating: 4
  },
  {
    comment_text: 'This is the third comment.',
    user_id: 3,
    game_id: 3,
    rating: 3
  }
];

const seedCommentrates = () => Commentrate.bulkCreate(commentratedata);

module.exports = seedCommentrates;
