const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});

wss.on('connection',function (ws){
    console.log("on connections");

    ws.on('message',function(message){
		console.log(message);
		ws.send(message);
    });
	
	ws.on('close',()=>{
		console.log('connection closed');
	});
	
	ws.on('error',(err)=>{
		console.log('error:',err);
	});
});