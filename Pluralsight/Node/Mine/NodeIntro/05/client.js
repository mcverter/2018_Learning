var http = require('http');
var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log('about to make request')

var req=http.request('https://www.google.com', function(response){
  console.log(response.statusCode);
  response.pipe(process.stdout)
})

req.end()

var req2 = http.request(options, function(response){
  console.log(response.statusCode);
  response.pipe(process.stdout)
})

req2.end()


var req3 = http.get('https://www.google.com', function(response){
  console.log(response.statusCode);
  response.pipe(process.stdout)
})

req3.end()


var req4 = http.get('https://www.pluralsight.com', function(response){
  console.log(response.statusCode);
  response.pipe(process.stdout)
})

req4.end()
