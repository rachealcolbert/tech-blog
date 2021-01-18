const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Post
} = require('../models')

// get all posts for home

router.get("/", (req, res) => {
  console.log("================");
  Post.findAll({
      attributes: ["id", "post_text", "create_at"],
      // include: [{
      //     model: Comment,
      //     attributed: ["id", "comment_text", "post_id", "user_id", "created_at"],
      //     include: {
      //       model: User,
      //       attributes: ["username"],
      //     },
      //   },
      //   {
      //     model: User,
      //     attributes: ["username"],
      //   },
      // ],
    })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) =>
        post.get({
          plain: true,
        })
      );

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});