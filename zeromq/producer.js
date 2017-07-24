const zmq = require('zeromq');

const sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

setInterval(()=>{
    console.log('sending work');
    sock.send('some work');
},1000);