process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  process.stdout.write('data ->'+chunk)
})

process.stdin.on('end', function(chunk) {
  process.stdout.write('end')
})