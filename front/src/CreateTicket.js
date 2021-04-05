import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu"
const wayToBackend = "http://34.218.47.120:3002/set/";
const wayToAsanaBackend = "http://34.218.47.120:3003/set/";
function CreateTicket() {
    let style = {

    }
    function getSafeData(){
    try{getData();}
    catch(e){console.log(e);};
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
        if(!isNaN(finalObject.building)) {
            fetch(wayToBackend + reqString).then((response) => {
                alert("Заявка принята!");
		fetch(wayToAsanaBackend + reqString);
		window.location.reload();
            }, (reject) => {
                alert("Заявка отклонена!")
            });
        }
        else
            alert("Некорректные данные");
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
                <div>Контакт для связи</div>
                <div>
                    <input type={"text"} id={"l"}/>
                </div>
            </div>
            <div>
                <div>Краткое описание проблемы</div>
                <div>
                    <input type={"text"} id={"t"}/>
                </div>
            </div>
            <div>
                <div>Подробное описание проблемы</div>
                <div>
                    <input type={"text"} id={"c"}/>
                </div>
            </div>
<button onClick={getSafeData}>Отправить</button>
        </div>
    );
}

export default CreateTicket
