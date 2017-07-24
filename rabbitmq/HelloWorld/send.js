const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost',function(err,conn){
    if(err){
        console.log(err);
    }else{
        conn.createChannel(function(err,ch){
            if(err){
                console.log(err);
            }else{
                let q = 'hello';

                ch.assertQueue(q,{durable:false});

                ch.sendToQueue(q,new Buffer('Hello World!'));

                console.log("[x] Sent 'Hello World'");
            }
        });

        setTimeout(()=>{conn.close();process.exit(0);},3000);
    }
});