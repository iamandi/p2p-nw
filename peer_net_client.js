var peernet = require('peer-network')
var network = peernet()

var stream = network.connect('echo-server')

stream.write('hello world')
stream.on('data', function (data) {
  console.log('data:', data.toString())
})
