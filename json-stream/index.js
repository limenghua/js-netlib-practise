const JSONStream = require('JSONStream');

const Parser = require('jsonparse');

let parser = new Parser();

parser.onValue = function (value) {
    console.log("get value", value);
}

parser.onError = function (err) {
    console.log("err:",err);
    if (err.message.indexOf("at position") > -1)
        err.message = "Invalid JSON (" + err.message + ")";
}

parser.onToken = function (token, value) {
  console.log("get token", token,value);
  // Override this to get events
};


let stream = JSONStream.parse();

stream.on('data',function(data){
    console.log("data:",data);
});

stream.on('header',function(data){
    console.log("header:",data);
});

stream.on('error',function(error){
    console.log('error:',error);
});

stream.write(`{"name":"zhangsan","age":1,"values":{"type":1}}`);



console.log('4');