import React from 'react'
class Menu extends React.Component{
    render() {
        let style = {
            display:"inline-block",
            float:"left",
            //backgroundColor:"blue",
            width:"20%",
            height:"100vh"
        }
        return <div style={style}>
            <div><a href={"/"}>Светофор</a></div>
            <div><a href={"/manual"}>Инструкция</a></div>
            <div><a href={"/contact"}>Контакты</a></div>
            <div><a href={"/CreateTicket"}>Создать заявку</a></div>
            <div><a href={"/tp4"}>Tasks (temporary)</a></div>
        </div>
    }
}
export default Menu
