import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu";

function browser()
{
    let ua = navigator.userAgent;
	
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/Konqueror/) > 0) return 'Konqueror';
    if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
    if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';
	
    // Браузеров очень много, все вписывать смысле нет, Gecko почти везде встречается
    if (ua.search(/Gecko/) > 0) return 'Gecko';

    // а может это вообще поисковый робот
    return 'Search Bot';
}

let brsr = browser();
if (brsr === "Firefox" || brsr === 'Internet Explorer')
alert("Ваш браузер не поддерживается");
function App() {
    let style = {
        width:"20%",
        display: "inine-block",
        float: "left"
    }
  return (
   <div align={"center"}>
    <Menu/>
    <Content/>
   </div>
  );
}

export default App;
