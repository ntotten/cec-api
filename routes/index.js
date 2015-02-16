var express = require('express');
var util = require('util');
var exec = require('child_process').exec;
var router = express.Router();

router.post('/:device/:command', function(req, res) {
  child = exec(util.format('echo "%s %s" | cec-client -s', req.params.device, req.params.command),
  function (err, stdout, stderr) {
    if (err) {
      res.status(500);
      res.json({
        message: err.message,
        error: {}
      });
    } else {
      res.json({ status: 'ok' });
    }
  });
});

router.get('/:device/power', function(req, res) {
  var status;
  child = exec(util.format('echo "pow %s" | cec-client -s', req.params.device),
  function (err, stdout, stderr) {
    var n = stdout.indexOf("power status:");
    status_temp = stdout.substring(n+13, n+28);
    status = status_temp.substring(0, status_temp.indexOf("D")-1);
    if (err) {
      res.status(500);
      res.json({
        message: err.message,
        error: {}
      });
    } else {
      res.json({ status: status });
    }
  });
});

module.exports = router;
