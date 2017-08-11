const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open',function(){
    console.log('opened');
    for(let i = 1;i<10;i++){
        ws.send(i+' 5 hello');
    }    
});

ws.on('message',function(data){
    console.log(data);
})