const amqp = require('amqplib');

amqp.connect('amqp://admin:admin@10.10.2.240')
    .then((conn) =>{return conn.createChannel();})
    .then((ch)=>{
        let q = 'hello';
        ch.assertQueue(q,{durable:false});
        ch.sendToQueue(q,new Buffer('Hello World!'));
        console.log("[x] Sent 'Hello World'");
    })
    .then(()=>{
        setTimeout(()=>{conn.close();process.exit(0);},3000);
    })
    .catch((reason) =>{
        console.log(reason);
    });
