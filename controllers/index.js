const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', function (req, res) {
    res.render('homepage', {});
  });

module.exports = router;
