const {Client} = require('ssh2');

let conn = new Client();

conn.on('ready',function(){
    console.log('Client is ready');

    // conn.shell(function(error,stream){
    //     if(error) throw error;

    //     stream.on('close',function(){
    //         console.log('stream closed');
    //         conn.end();
    //     });

    //     stream.on('data',function(data){
    //         console.log('data:' + data);            
    //     });
        
    //     // setTimeout(()=>{
    //     //     stream.write('enable\n');
    //     // },1000);
    //     // setTimeout(()=>{
    //     //     stream.write('netbrain\n');
    //     // },2000);        
    //     // setTimeout(()=>{
    //     //     stream.write('show run\n');
    //     // },3000);
    //     // setTimeout(()=>{
    //     //     stream.end();
    //     // },4000);
    // });    
});

conn.connect({
    host:'10.10.3.253',
    port:22,
    username:'netbrain',
    password:'netbrain'
});