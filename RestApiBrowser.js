var https = require('https');
var user= 'mushtaqsayyed1';
var pass= 'NC6Df9KsTAxJAmJArf7C';

var options = {
host: 'api.browserstack.com',
port: 443,
path: '/automate/browsers.json',
// authentication headers
headers: {
'Authorization': 'Basic ' + new Buffer(user + ':' + pass).toString('base64')
}
};
https.get(options, function(res){
var body="";
res.on('data',function(chunk){
body+= chunk;
})
res.on('end',function(){
var result = JSON.parse(body);
console.log(result);
})
}).end();