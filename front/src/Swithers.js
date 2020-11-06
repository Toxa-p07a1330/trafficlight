import React from 'react'
import Switch from "./Switch";
class Switches extends React.Component{
    constructor() {
        super();
        this.state = {
            data: null,
            isLoaded: false,
        }
    }
    render() {
        return (
            <div>
                {(()=>{
                    if (this.state.isLoaded){
                        return (
                            <div>
                                loaded
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                {JSON.stringify(this.state.date)}
                            </div>
                        )
                    }
                })()}
            </div>
        );
    }
}
export default Switches;