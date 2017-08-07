const events = require('events');

class Parser extends events.EventEmitter{

}

let parser = new Parser();

parser.on('package',function(data,d2){
    console.log("on package",data,d2);
});

parser.emit('package',"hello","world");

console.log('app started...');