const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Post
} = require('../models');

// get all users
router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
    })
    .then(dbPostData => {
      console.log(dbPostData[0]);
      res.render('homepage', dbPostData[0].get({
        plain: true
      }));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;