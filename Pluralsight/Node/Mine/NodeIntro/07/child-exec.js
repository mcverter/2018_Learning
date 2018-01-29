var exec = require('child_process').exec();

var child = exec('uptime | cut -d "," -f 1  ', function(err, stdout, stderr) {
  if (err) {
    console.log("error: " + stderr);
  } else {
    console.log("output is " + stdout)
  }
})

console.log("pid is " + child.pid);