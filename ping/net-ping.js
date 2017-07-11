const ping = require('net-ping');

let session = ping.createSession();

let hosts = ['61.135.169.125','127.0.0.1','www.163.com'];

hosts.forEach((host)=>{
    session.pingHost(host,function(err,target){
        if(! err){
            console.log(target);
            //session.close();
        }
    });

});