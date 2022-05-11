// const router = require("express").Router();
// const { Rate } = require("../../models");

// router.get("/", (req, res) => {
//  Rate.findAll()
//     .then((rateData) => res.json(rateData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/", (req, res) => {
//   Rate.create({
//       //not sure if I need the game_id or not
//     game_id: req.body.game_id,
//     user_id: req.session.user_id,
//     post_id: req.body.post_id,
//     rating: req.body.rating,
//     comment_id: req.body.comment_id
//   })
//     .then((rateData) => res.json(rateData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete("/:id", (req, res) => {
//   Rate.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((rateData) => {
//       if (!rateData) {
//         res.status(404).json({ message: "No rating found with provided id!" });
//         return;
//       }
//       res.json(rateData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
