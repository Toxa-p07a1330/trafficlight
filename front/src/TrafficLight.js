import Switches from "./Switches";
import React from "react";
function TrafficLight() {
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
                <div style={style}> Общага</div>
                <div style={style}> Этаж</div>
                <div style={style}> Адрес</div>
                <div style={style}> Статус</div>
                <div style={style}> Комментарий</div>
            </div>
            <br/><br/>
            <Switches />
        </div>
    );
}

export default TrafficLight;
