const request = require('request');

let j = request.jar()

let prequest = {};

prequest.get = function (url) {
    return new Promise(function (resolve,reject){
        request(url,function(error,response,body){
            if(error){
                reject(error);
            }else{
                resolve({res:response,body:body});
            }
        });
    });
}

prequest.get('http://www.baidu.com')
    .then((res) => {
        console.log("res:", res);
    })
    .catch((reason) => {
        console.log('catch', reason);
    });