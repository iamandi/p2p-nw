var peernet = require('peer-network')
var network = peernet()
 
var server = network.createServer()
 
server.on('connection', function (stream) {
  console.log('new connection')
  stream.pipe(stream) // echo
})
 
server.listen('echo-server')
