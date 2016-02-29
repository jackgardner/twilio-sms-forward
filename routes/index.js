var express = require('express');
var router = express.Router();
var process = require('process');
var twilio = require('twilio');

var forwardTo = process.env.MOBILE_FORWARD_TO;

/* GET home page. */
router.post('/', function(req, res, next) {
  var resp = new twilio.TwimlResponse();


  resp
    .sms(req.body.Body, { to: forwardTo });

  res.contentType('text/xml');
  res.send(resp.toString());
});

module.exports = router;
