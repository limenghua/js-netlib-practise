let outStr = `
"
SNMP V3 Configuration:
    snmp-server user snmpv3 snmpv3 v3 auth sha nbv3authsha priv aes 256 netbrainencryaes256


 Username: `;

 let r = /Username:/i;

 console.log(outStr.search(r));