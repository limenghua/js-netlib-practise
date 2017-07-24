const zmq = require('zeromq');

const sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
console.log('Subscriber connect to 3000');

sock.on('message',function(topic,message){
    console.log('received a message related to:',topic.toString(),' containing message:',message.toString());
});