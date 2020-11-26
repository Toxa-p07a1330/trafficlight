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
            <div><a href={"/tp1"}>Тестовая страница 1</a></div>
            <div><a href={"/tp2"}>Тестовая страница 2</a></div>
            <div><a href={"/tp3"}>Тестовая страница 3</a></div>
            <div><a href={"/tp4"}>Тестовая страница 4</a></div>
        </div>
    }
}
export default Menu