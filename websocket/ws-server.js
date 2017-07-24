const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});

wss.on('connection',function (ws){
    ws.on('message',function(message){
        console.log('received: %s',message);
    });

    ws.send('something');

});