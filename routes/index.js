var express = require('express');
var router = express.Router();
const BasicMathService = require('../services/BasicMathService');
const maths = new BasicMathService();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.status(200).jsend.success({
    statusCode: 200, message: 'Hi! This is a simple express application running in a Docker container!', options: {
      add: 'e.g add/2/2',
      subtract: 'e.g subtract/3/2'
    }
  });
});

router.get('/add/:num1/:num2', function (req, res, next) {
  const { num1, num2 } = req.params;
  const total = maths.add(num1, num2);
  return res.status(200).jsend.success({ statusCode: 200, result: total });
})

router.get('/subtract/:num1/:num2', function (req, res, next) {
  const { num1, num2 } = req.params;
  const total = maths.subtract(num1, num2);
  return res.status(200).jsend.success({ statusCode: 200, result: total });
})


module.exports = router;
