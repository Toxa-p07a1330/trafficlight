const http = require("http");
console.log("start");
let statusCode = 200;
http.createServer(function(request, response){
    let reqStr=  decodeURI(request.url);
    response.setHeader("Content-Type", "application/json; charset=UTF-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    setData(reqStr, response);
}).listen(3002);
function convertURLRequestToSQLRequestSet(object){
    console.log(object);
    let name = object.name;
    let building = object.building;
    let link = object.link;
    let room = object.room;
    let ticket = object.ticket;
    let comment = object.comment;

    let request = `INSERT INTO Issues (Name, building, Link, Room, Ticket, Comment)
            VALUES ('${name}', ${building}, '${link}', ${room}, '${ticket}', '${comment}');`;
    return request;

}

function isSet(url){
    return url.indexOf("\/set\/")!==-1;
}
function getAll(url){
	return url.indexOf("\/getAll")!==-1;
}
function setData(url, resp){
    if (isSet(url)) {
        let jsonData = url.substr(url.indexOf("set")+4);
        jsonData = JSON.parse(jsonData);
        console.log(!((+jsonData.room + 0) * (+jsonData.building + 0)))
        if (!((+jsonData.room + 0) * (+jsonData.building + 0))) {
            console.log("err")
            resp.sendStatus = 500;
            resp.end();
            return null;
        }
        console.log(jsonData);
        let sql = convertURLRequestToSQLRequestSet(jsonData);
        console.log(sql);
        getDataFromSQLite(sql, resp);
    }
    if (getAll(url)){
		console.log(1);
		let sql = "SELECT * FROM ISSUES";
        getDataFromSQLite(sql, resp);
	}
	
	return null;
}
function  getDataFromSQLite(request, resp){
    console.log(request)
    let sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('../database/database.db');
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all(request, (err, rows)=>{
                if (!err)
                {
                    resolve(rows);
                    resp.write(JSON.stringify(rows));
                    resp.sendStatus = 200;
                    resp.end();
                }
                else {
                    reject(err);

                    resp.write(err);
                    resp.sendStatus = 500;
                    resp.end();
                }
            })
        })
        db.close();
    });
}


/*
* example url
* http://localhost:3001/set/%7B%22name%22:%20%22Marchuk%20Anton%22,%20%22building%22:%20%22666%22,%20%22link%22:%20%22https://habr.com/ru/users/p07a1330/%22,%20%22room%22:%20%22282%22,%20%22ticket%22:%20%22problem%20description%22,%20%22comment%22:%20%22some%20comment%22%20%7D*/
