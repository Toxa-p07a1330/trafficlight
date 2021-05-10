import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import { useState } from 'react';


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

function mobile(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let div = height/width;
    const standard = 1;
    return div>standard;
}

let brsr = browser();
let isMobile = mobile();
let showMenuMobile = false;
if (brsr === "Firefox" || brsr === 'Internet Explorer')
    alert("Ваш браузер не поддерживается");

function App() {
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    let style = {
        width:"20%",
        display: "inine-block",
        float: "left"
    }
function getMenu(isMobile){
        if (!isMobile)
            return <Menu/>
        return <div>
            <div style={{
                position: "absolute",
                fontSize: "25px",
            }}
            onClick={()=>{
                   setShowMenuMobile(!showMenuMobile);
                }}>
                ≡
             </div>
            <div>
                {showMenuMobile?<Menu/>:""}
            </div>
        </div>
}
  return (
   <div align={"center"} style={{backgroundColor: "#cccccc"}}>
       <div>
           {getMenu(isMobile)}
       </div>
            <div id = "content">
                <Content/>
            </div>
   </div>
  );
}

export default App;
