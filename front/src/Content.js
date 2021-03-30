import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TrafficLight from "./TrafficLight";
import Instruction from "./Instruction";
import Contacts from "./Contacts";
import CreateTicket from "./CreateTicket";
import Tasks from "./Tasks";

class Content extends React.Component{
    render() {
        let style = {
            display: "inline-block",
            width: "80%",
            //backgroundColor:"green",
            height:"100Vh"
        }
        return (<div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={TrafficLight} />
                    <Route exact path="/manual" component={Instruction} />
                    <Route exact path="/contact" component={Contacts} />
                    <Route exact path="/createTicket" component={CreateTicket} />
                    <Route exact path="/tp4" component={Tasks} />
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export  default  Content;
