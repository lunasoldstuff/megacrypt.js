const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/dothething', function (req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
})

module.exports = router
