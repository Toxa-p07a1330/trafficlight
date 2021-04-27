import React from 'react'
import Switch from "./Switch";
import Building from "./Building";
const wayToApi = "http://34.218.47.120:3001/";
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
                                    (()=>{
                                        let buildings = []
                                        for (let i = 5; i<10; i++) {
                                            let obschaga = {}
                                            obschaga = this.state.data.filter((value)=>{
                                                return value.building === i;
                                            })
                                            buildings[i] = obschaga;
                                            buildings[i].building = i;

                                        }
                                        console.log("_______")
                                        console.log(buildings)
                                        return buildings.map((value, index, array)=>{
                                            return <div><Building prop = {value} building = {index}/></div>
                                        })
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
export default Switches;
