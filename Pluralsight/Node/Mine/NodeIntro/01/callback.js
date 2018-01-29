var maxTime = 1000;

var evenDoubler = function(v, callback){
  var waitTime = Math.floor(Math.random()+ maxTime+1);
  if (v%2) {
    setTimeout(function() {
      callback(new Error("Odd Input"))
    }, waitTime)
  } else {
    setTimeout(function() {
      callback(null, v*2, waitTime)
    }, waitTime)
  }
}

var processResults = function(err, results, time) {
  if (err) {
    console.log("Error: " + err.message)
  } else {
    console.log("The results are: " + results + " (" + time + "ms)");
  }
}

evenDoubler(4, processResults);
evenDoubler(5, processResults)

var count = 0;

for (var i=0; i<10;i++) {
  console.log("Calling evenDoubler for value: " + i);
  evenDoubler(i, function(err, results, time){
    if (err) {
      console.log("error" + err.message)
    } else {
      console.log("the results are: " + results + "{" + time + "ms)");
    }

    if (++count === 10) {
      console.log("done");
    }
  })
}

console.log("-----")