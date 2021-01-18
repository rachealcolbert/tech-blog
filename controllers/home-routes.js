const router = require("express").Router();
// const sequelize = require("../config/connection");
// const {
//   Post
// } = require('../models')

// get all posts for home

router.get("/", (req, res) => {
  res.render('homepage');
});
module.exports = router;