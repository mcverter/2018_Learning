var request = require('request');

var s = request('http://pluralsight.com')

s.pipe(process.stdout)
request('http://pluralsight.com').pipe(process.stdout)
request('http://pluralsight.com').pipe(fs.createWriteStream('pluralsight.html'))
request('http://pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'))
