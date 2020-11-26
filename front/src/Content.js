import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TrafficLight from "./TrafficLight";
import TextPage1 from "./TextPage1";
import TextPage2 from "./TextPage2";
import TextPage3 from "./TextPage3";
import TextPage4 from "./TextPage4";

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
                    <Route exact path="/tp1" component={TextPage1} />
                    <Route exact path="/tp2" component={TextPage2} />
                    <Route exact path="/tp3" component={TextPage3} />
                    <Route exact path="/tp4" component={TextPage4} />
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export  default  Content;
