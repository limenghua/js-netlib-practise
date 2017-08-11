const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});

wss.on('connection',function (ws){
    console.log("on connections");

    ws.on('message',function(message){
        ws.send(message);
    });
});