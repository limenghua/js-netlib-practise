const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});

wss.on('connection',function (ws){
    console.log("on connections");
    ws.send('welcome,please give the right passport');

    ws.on('message',function(message){
        console.log('received: %s',message);

        if(message === 'hello'){
            ws.send('world');
        }else{
            ws.send('please give the right passport');
        }       
    });
});