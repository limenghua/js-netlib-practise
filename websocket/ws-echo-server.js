const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8080});

let currentIndex = 1;

function jugeMessage(message){
    let items = message.split(" ");

    if(items.length !== 3){
        console.log("conn't split to 3:",message);
    }

    let index = parseInt(items[0]);
    let length = parseInt(items[1]);
    let msg = items[2];

    if(index !== currentIndex){
        console.log('index not match:',currentIndex,",",message);
    }

    if(length !== msg.length){
        console.log('msg lenth not match:',length,",",message);
    }
}

wss.on('connection',function (ws){
    console.log("on connections");

    ws.on('message',function(message){
        jugeMessage(message);
        currentIndex ++;
        if(currentIndex % 10000 === 0){
            console.log(currentIndex,":",message);
        }
    });
});