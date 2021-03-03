import React from 'react'
class Switch extends React.Component{
    getStyle = (status)=>{
        if (status===1)
            return {
                backgroundColor: "red",
                width: "100%"
            }
        if (status===2)
            return {
                backgroundColor: "orange",
                width: "100%"
            }
        if (status===3)
            return {
                backgroundColor: "green",
                width: "100%"
            }
        return {
            backgroundColor: "white",
            width: "100%"
        }
    }
    commonStyle = {
        border: "1px solid black",
        width: "20%"
    }
    all = {
        margin: "0, auto",
        display: "block",
        width: "100%"

    }
    render(props) {
        return (
            <div style={this.all}>
                    <table style={this.getStyle(this.props.prop.status)}>
                        <tr>
                            <td style={this.commonStyle}>{this.props.prop.building}</td>
                            <td style={this.commonStyle}>{this.props.prop.floor}</td>
                            <td style={this.commonStyle}>{this.props.prop.ip}</td>
                            <td style={this.commonStyle}>{this.props.prop.status}</td>
                            <td style={this.commonStyle}>{this.props.prop.description}</td>
                        </tr>
                    </table>
            </div>
        );
    }
}
export default Switch;