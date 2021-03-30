import React from 'react'
import Switch from "./Switch";
import Building from "./Building";
const wayToApi = "http://34.218.47.120:3002/getAll";
class Tasks extends React.Component{
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
                                    (()=>{
                                        JSON.stringify(this.state);
                                    })()
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
export default Tasks;
