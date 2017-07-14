const Client = require('telnet-client');

let conn = new Client();

let exucued = false;

conn.on('ready', function (prompt) {
    console.log('reday:', prompt);
    conn.shell()
        .then((stream) => {

            //process.stdin.pipe(stream).pipe(process.stdout);

            stream.write('enable\n');
            stream.on('data', function (data) {
                let strData = data.toString();
                console.log(strData);
                if (strData.search('Password') != -1) {
                    stream.write('netbrain\n');
                    return;
                }

                if(strData.search("#") != -1){
                    if(!exucued){
                        stream.write('show run\n');
                    }
                    exucued = true;                    
                    return;
                }

                if(strData.search('--More--') != -1){
                    stream.write('\r');
                    return;
                }
            });
        });
});



conn.on('timeout', function () {
    console.log('socket timeout!');
    conn.end();
});

conn.on('close', function () {
    console.log('connecttion closed');
});

conn.on('connect', function () {
    console.log('connecttion opened');
})

conn.connect({
    host: '10.10.0.0',
    port: 23,
    shellPrompt: '>',
    timeout: 6500,
    loginPrompt: /Username:/i,
    passwordPrompt: /Password:/i,
    username: 'netbrain',
    password: 'netbrain',
    echoLines: 10,
    debug: true
});