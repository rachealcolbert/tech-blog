const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Post
} = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
        'id',
        'post_text',
        'title',
      ],
    })
    .then(dbPostData => {
      res.render('homepage', dbPostData[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;