const restify = require('restify-clients');

const client = restify.createStringClient('http://www.baidu.com');

client.get('/',function(err,req,res,data){
    if(err)
        console.log(err);
    else
        console.log(data);
});