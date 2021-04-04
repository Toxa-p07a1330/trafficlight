const http = require("http");
const nodemailer = require('nodemailer');

console.log("start");
http.createServer(function(request, response){
    let reqStr=  decodeURI(request.url);
    response.setHeader("Content-Type", "application/json; charset=UTF-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    convertResponseToTicket(reqStr);
}).listen(3003);

function convertResponseToTicket(response){
    let json = response.split("set")[1].substr(1);
    try {
        let jsonParsed = JSON.parse(json);
        let text = "";
        text+="Пользователь: \t"+jsonParsed.name+"\n";
        text+="Строение: \t"+jsonParsed.building+"\n";
        text+="Ссылка: \t"+jsonParsed.link+"\n";
        text+="Комната: \t"+jsonParsed.room+"\n";
        text+="Задача: \t"+jsonParsed.ticket+"\n";
        text+="Комментарий: \t"+jsonParsed.comment+"\n";
        sendEmail(jsonParsed.ticket, text);
    }
    catch (e){
        console.log(e);
    }
}
function sendEmail(ticket, message){
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secureConnection: false,
        port: 587,
        requiresAuth: true,
        secure: false,
        auth: {
            type: "login",
            user: "lllaqpobod@gmail.com",
            pass: "iqkwexsddsgqlhju"
        }
    });

    transporter.sendMail({
        from: "lllaqpobod@gmail.com",
        to: "x+1199000600957429@mail.asana.com",
        subject: ticket,
        html: message
    }).then((resolve)=>{
            console.log(resolve)
        },
        (reject)=>{
            console.log(reject)
        });
}
