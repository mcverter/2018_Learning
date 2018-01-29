var count = 0;
var t = setInterval(function() {
  count++;
  console.log("interval of 10 ms, count = " + count);
  if (count === 10){
    clearInterval(t)
  }
}, 10);

setTimeout(function(){
  console.log("timeout at 200 ms")
}, 200)

console.log("running");