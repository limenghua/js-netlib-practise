const ping = require('ping');

let hosts = ['127.0.0.1','www.baidu.com','www.163.com'];

hosts.forEach((host)=>{
    ping.promise
        .probe(host)
        .then((res)=>{
            console.log(res);
        });
});