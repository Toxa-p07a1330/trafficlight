import React from 'react'
import Switch from "./Switch";
const wayToApi = "http://localhost:3001/";
class Switches extends React.Component{
    constructor() {
        super();
        this.state = {
            data: null,
            isLoaded: false,
        }
    }
    render() {
        let style = {
            width: "70%"
        }
        return (
            <div style={style}>
                {(()=>{
                    if (this.state.isLoaded){
                        return (
                            <div>
                                {
                                    this.state.data.map((value)=>{
                                        return <Switch prop={value}/>
                                    })
                                }
                            </div>
                        )
                    }
                    else {
                        let newState = {};
                        fetch(wayToApi).then(
                            (response) =>{
                                response.json().then(
                                    (json)=>{
                                        this.state.data = json
                                        this.state.isLoaded = true;
                                        this.setState(newState)
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
                        return (
                            <div>
                                loading
                            </div>
                        )
                    }
                })()}
            </div>
        );
    }
}
export default Switches;