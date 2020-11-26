import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu";
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
