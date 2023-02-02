const app = require('express')()
const os = require('os-utils')
const http = require('http').createServer(app)
var io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    },
    transports: ['websocket', 'polling']
})
let tick = 0
io.on('connection', (clientSocket) => {
    console.log('a user connected. Origin : ', clientSocket.handshake.headers.origin);
    // console.log('a user connected', clientSocket.handshake.headers);
    setInterval(() => {
        os.cpuUsage(cpuPercent => {
            clientSocket.emit('cpu', {
                name: tick++,
                value: cpuPercent
            })
        })
    }, 2000)
})
http.listen(4001, () => {
    console.log('server listing on *:4000');
})