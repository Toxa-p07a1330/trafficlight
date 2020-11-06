const express = require("express");
const app = express();
app.get("/", function(request, response){
    response = setHeaders(response);
    let switches = [                //get from Zabbix
        {
            building: 5,
            floor: 3,
            status: 1,
            ip: "192.168.1.1",
            description:"test"
        },
        {
            building: 7,
            floor: 5,
            status: 2,
            ip: "192.168.1.1",
            description:"test2"},
        {

            building: 8,
            floor: 11,
            status: 3,
            ip: "192.168.1.1",
            description:"jopa"
        }
    ]
    let header = {
        building: "Номер общаги",
        floor: "Этаж",
        status: "Статус",
        ip: "IP адрес",
        description:"Описание"
    }
    switches[switches.length] = header;
    switches = switches.reverse();
    response.send(JSON.stringify(switches));
});

function setHeaders(response){
    response.setHeader("Content-Type", "application/json; charset=UTF-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    return response;
}

// начинаем прослушивать подключения на 3000 порту
app.listen(3001);