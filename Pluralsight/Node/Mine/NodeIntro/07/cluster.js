var cluster = require('cluster')
var http = require('http')
var numWorkers = 2;

if (cluster.isMaster) {
  for (var i=0; i<numWorkers; i++) {
    console.log('master: about to fork a worker')
    cluster.fork()
  }

  cluster.on('fork', function(worker) {
    console.log('master: fork event (worker: ' + worker.id + ")")
  })
  cluster.on('online', function(worker) {
    console.log('master: online event (worker: ' + worker.id + ")")
  })
  cluster.on('listening', function(worker, address) {
    console.log('master: listening event (worker: ' + worker.id + ', pid ' + worker.process.pid + ',' + adderss.address + ':' + address.port  + ")")
  })
  cluster.on('exit', function(worker) {
    console.log('master: fork event (worker: ' + worker.id + ")")
  })

} else {

  console.log("worker: worker # "+cluster.worker.id + "ready")

  var count = 0;

  http.createServer(function(req, res){
    res.writeHead(200);
    count++;
    console.log("worker # " + cluster.worker.id + " is incrementing count to " + count);
    res.end("hello world from worker # " + cluster.worker.id + " (pid " + cluster.worker.process.pid + ") with count = " + count + "\n" )
    if (count === 3) {
      cluster.worker.destroy()
    }
  }).listen(process.env.PORT, process.env.IP)
}
