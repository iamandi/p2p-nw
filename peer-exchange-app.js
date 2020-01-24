var Exchange = require('peer-exchange')

var ex = new Exchange('some-network-id', { wrtc: wrtc });
// The network id can be any string unique to your network.
// When using Node.js, the `wrtc` option is required.
// (This can come from the 'wrtc' or 'electron-webrtc' packages).

ex.on('connect', (conn) => {
  // `conn` is a duplex stream multiplexed through the PXP connection,
  // which can be used for your P2P protocol.
  conn.pipe(something).pipe(conn)

  // We can query our current peers for a new peer by calling `getNewPeer()`.
  // `peer-exchange` will do the WebRTC signaling and connect to the peer.
  if (ex.peers.length < 8) ex.getNewPeer()
})

// Bootstrap by connecting to one or more already-known PXP peers.
// You can use any transport that creates a duplex stream (in this case TCP).
var socket = net.connect(8000, '10.0.0.1', () => ex.connect(socket))

// You can optionally accept incoming connections using any transport.
var server = net.createServer((socket) => ex.accept(socket))
server.listen(8000)