var express = require('express');
var util = require('util');
var exec = require('child_process').exec;
var router = express.Router();

router.post('/device/:device/command/:command', function(req, res) {
  var cmd = util.format('echo "%s %s" | cec-client -s', req.params.command, req.params.device);
  child = exec(cmd, function (err, stdout, stderr) {
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

// router.get('/device/:device/status/power', function(req, res) {
//   child = exec(util.format('echo "pow %s" | cec-client -s', req.params.device),
//   function (err, stdout, stderr) {
//     var n = stdout.indexOf("power status:");
//     status_temp = stdout.substring(n+13, n+28);
//     var status = status_temp.substring(0, status_temp.indexOf("D")-1).trim();
//     if (err) {
//       res.status(500);
//       res.json({
//         message: err.message,
//         error: {}
//       });
//     } else {
//       res.json({ status: status });
//     }
//   });
// });

module.exports = router;
