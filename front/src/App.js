import Switches from "./Switches";
import React from "react";
function App() {
    let style = {
        width:"20%",
        display: "inine-block",
        float: "left"
    }
  return (
   <div align={"center"}>
       <h1>Компьютерная сеть "Бауманец"</h1>
       <h2>Система мониторинга работоспособности коммутаторов</h2>
       <div style={{width:"80%"}}>
           <div style={style}> 1</div>
           <div style={style}> 2</div>
           <div style={style}> 3</div>
           <div style={style}> 4</div>
           <div style={style}> 5</div>
       </div>
     <Switches />
   </div>
  );
}

export default App;
