const zmq = require('zeromq');

const sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('publiser bound to port 3000');

let index = 1;
setInterval(()=>{
    console.log('index:%d,sending a multipart message envelope',index);
    sock.send(['kitty cats','meow! index' + index]);
    index++;
},1000);
