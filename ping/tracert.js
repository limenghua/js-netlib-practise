const ping = require ("net-ping");
let session = ping.createSession ();

function onDone(err,target){
    if(err){
        console.log(target + ":" + err.toString());
    }else{
        console.log(target + ":Done");
    }
}

function onFeed(err,target,ttl,sent,rcvd){
    let ms = rcvd - sent;
    if(err){
        console.log(err);
    }else{
        console.log(target + ":ttl=" +ttl+" ms=" + ms );
    }
}

session.traceRoute('192.168.1.1',100,onFeed,onDone);