const http = require("http");
const fs = require("fs");

console.log("start");
const wayToDir = "./"
http.createServer(function(request, response){
    let reqStr=  decodeURI(request.url);
    response.setHeader("Content-Type", "application/json; charset=UTF-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    log(reqStr);
    response.end();
}).listen(3004);

function log(request){
    if (request.indexOf("favicon")>0)
        return null;
    fs.appendFile(wayToDir+Math.floor(Date.now()/86400000)+".log",request+"\r\n", (err)=>{
        console.log(err);
    })
};
