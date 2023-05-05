const router = require('express').Router();
const { Recommend } = require('../../models'); // You need to import the Recommend model, not the "recommend" object
const withAuth = require('../../utils/auth');

con


router.post('/', withAuth, async (req, res) => {
  try {
    const recommend = await Recommend.create({
      userName: req.body.userName,
      recommendBook: req.body.recommendBook,
      user_id: req.session.user_id,
    });
  
    res.status(200).json(recommend);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recommendData = await Recommend.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recommendData) {
      res.status(404).json({ message: 'No recommend found with this id!' });
      return;
    }

    res.status(200).json(recommendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
