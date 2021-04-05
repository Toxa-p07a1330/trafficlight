let test = "http://localhost:3001/set/%7B%22name%22:%20%22Maaaaaaaaaaaarchuk%20Anton%22,%20%22building%22:%20%22666%22,%20%22link%22:%20%22https://habr.com/ru/users/p07a1330/%22,%20%22room%22:%20%22282%22,%20%22ticket%22:%20%22problem%20description%22,%20%22comment%22:%20%22some%20comment%22%20%7D";
let getAll = "http://34.218.47.120:3001/"; 
const fetch = require('node-fetch');
fetch(getAll).then(
(response)=>{console.log(1);},
(reject)=>{console.log(reject);}
)
