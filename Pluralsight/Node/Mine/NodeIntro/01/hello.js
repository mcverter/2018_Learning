var hello = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,
    {'Content-Type': "text/plain"});
  res.end("Hello world\n")
}).listen(process.env.PORT, process.env.IP)
console.log("server running!")