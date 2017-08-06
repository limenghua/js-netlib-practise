const amqp = require('amqplib');

amqp.connect('amqp://admin:admin@10.10.2.240')
    .then((conn) => {
        return conn.createChannel();
    })
    .then((ch) => {
        let q = 'hello';
        ch.assertQueue(q, {durable: false});

        console.log("[*] Waiting for message in %s. To exit press CTRL+C", q);

        return ch.consume(
            q, 
            (msg)=> {console.log(" [x] Received %s", msg.content.toString());},
            {noAck: true}
        );
    });
