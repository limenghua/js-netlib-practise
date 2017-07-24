const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open',function(){
    console.log('opened');
    ws.send('client:some thing');
});

ws.on('message',function(data){
    console.log(data);
})