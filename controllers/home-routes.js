const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    post_text: "Rather than releasing any new cameras for CES 2021, Canon is doing something different: Letting you take pictures from space.",
    title: "These wireless headphones double as hearing aids – Future Blink",
  });
});

module.exports = router;