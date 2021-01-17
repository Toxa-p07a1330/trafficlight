import React, {useState} from 'react'
// noinspection BadExpressionStatementJS
let style = {
    display:"inline-block",
    float:"left",
    //backgroundColor:"blue",
    width:"20%",
    height:"100vh"
}
let Menu = ()=>{
    let way = "http://localhost:3001/files";
    let [state, setState] = useState({isLoaded:false});
    if (!state.isLoaded){
        fetch(way).then(
            (response) =>{
                response.json().then(
                    (json)=>{
                       setState({
                           isLoaded: true,
                           data:json
                       })
                    },
                    (reject)=>{
                        console.log(reject)
                    }
                )
            },
            (reject)=>{
                console.log(reject)
            }
        )
    }
    return <div style={style}>
        <div><a href={"/"}>Светофор</a></div>
        {state.data?state.data.map((value)=>{
            let rootHttp = "C:\\Users\\User\\"
            let host = "http://localhost:8080\\"
            let way = value.wayToFile.replace(rootHttp, host)
            way = way.replace("\\", "/")
            console.log(11121)
            console.log(way)
            return <div>
                <a href={way}>{value.fileTitle}</a>
            </div>
        }):"loading"}
    </div>
}
export default Menu
