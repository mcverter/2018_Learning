var Resource = require('./resource');

var r = new Resource(7);


r.on('start', function() {
  console.log("ive started")
})

r.on('data', function() {
  console.log("ive received data: " + d)
})

r.on('end', function() {
  console.log("ive am done with " + t + ' data events')
})