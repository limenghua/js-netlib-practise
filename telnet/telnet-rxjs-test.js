const {Telnet} = require('telnet-rxjs');

const client = Telnet.client('10.10.0.0:23');

let connected = false;

client.filter(
    (event)=> event instanceof Telnet.Event.Connected
)
.subscribe((event =>{
    connected = true;
    console.log('connected successd');
}));

client.data
    .subscribe((data) =>{
        if(! connected){
            return;
        }
        console.log(data);
        if(data.search('Username:') != -1){
            client.sendln('netbrain');
            return;
        }
        if(data.search('Password:') != -1){
            client.sendln('netbrain');
            return;
        }

        if(data.search('>') != -1){
            client.sendln('enable');
            return;
        }

        if(data.search('#') != -1){
            client.sendln('show run');
            return;
        }
    });

client.connect();