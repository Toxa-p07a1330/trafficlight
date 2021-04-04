const http = require("http");
const nodemailer = require('nodemailer');

function sendEmail(message){
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
        subject: "New task (test)",
        html: message
    }).then((resolve)=>{
            console.log(resolve)
        },
        (reject)=>{
            console.log(reject)
        });
}

sendEmail("task description");
