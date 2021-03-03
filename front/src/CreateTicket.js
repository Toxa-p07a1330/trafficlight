import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu"
const wayToBackend = "http://localhost:3002/set/";
function CreateTicket() {
    let style = {

    }
    function getData (){
        let finalObject = {};
        finalObject.name = document.getElementById("f").value;
        finalObject.building = document.getElementById("no").value;
        finalObject.room = document.getElementById("nr").value;
        finalObject.ticket = document.getElementById("t").value;
        finalObject.link = document.getElementById("l").value;
        finalObject.comment = document.getElementById("c").value;
        let reqString = JSON.stringify(finalObject);
        fetch(wayToBackend+reqString).then((response)=>{
            alert("Заявка принята!")
        }, (reject)=>{
            alert("Заявка отклонена!")
        });
    }
    return (
        <div align={"center"}>
            <div>
                <div>ФИО</div>
                <div>
                    <input type={"text"} id={"f"}/>
                </div>
            </div>
            <div>
                <div>Номер общежития</div>
                <div>
                    <input type={"text"} id={"no"}/>
                </div>
            </div>
            <div>
                <div>Номер комнаты</div>
                <div>
                    <input type={"text"} id={"nr"}/>
                </div>
            </div>
            <div>
                <div>Ссылка</div>
                <div>
                    <input type={"text"} id={"l"}/>
                </div>
            </div>
            <div>
                <div>Проблема</div>
                <div>
                    <input type={"text"} id={"t"}/>
                </div>
            </div>
            <div>
                <div>Комментарий</div>
                <div>
                    <input type={"text"} id={"c"}/>
                </div>
            </div>
<button onClick={getData}>Отправить</button>
        </div>
    );
}

export default CreateTicket
