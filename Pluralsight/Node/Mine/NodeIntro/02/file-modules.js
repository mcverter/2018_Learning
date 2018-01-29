var mathfun = require('.' +  '' + '/mathf')

var processResults = function(err, results, time) {
  if (err) {
    console.log("ERROR: " + err.message);
  } else {
    console.log("The results are: " + results + " (" + time + " ms)");
  }
}

for (var i = 0; i<10; i++) {
  console.log("Calling 'evenDoubler' with paramter '" + i + "'");
  mathfun.evenDoubler(i, processResults);
}
console.log("-----");

console.log(' foo variable from module ' + mathfun.foo);

console.log("maxtime variable is not exported " + mathfun.maxTime)