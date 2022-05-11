// import all models
//const Rate = require("./Rate");
//const Comment = require("./Comment");

const User = require("./User");
const Commentrate = require("./Commentrate")


User.hasMany(Commentrate, {
    foreignKey: "user_id"
});

Commentrate.belongsTo(User, {
    foreignKey: "user_id"
});
// User.hasMany(Comment, {
//   foreignKey: "user_id",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// User.belongsToMany(Comment, {
//   through: Rate,
//   as: "rated_posts",
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Rate.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Rate.belongsTo(Comment, {
//   foreignKey: "comment_id",
//   // onDelete: 'SET NULL'
// });

// User.hasMany(Rate, {
//   foreignKey: "user_id",
// });

// Comment.hasOne(Rate, {
//   foreignKey: "comment_id",
// });

module.exports = { User, Commentrate };
