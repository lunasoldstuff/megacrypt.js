const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/dothething', function (req, res, next) {
  res.render('sentry')
  throw new Error("somebody visited the page~!");
})

module.exports = router
