import React from 'react'
import Switch from "./Switch";
class Building extends React.Component{
    render(props) {
        let style = {
            marginTop:"3%"
        }
        console.log(this.props)
        return (<div style={style}>
            {(()=>{
                if(this.props.prop.length===0)
                    return <div>Общежитие №{this.props.prop.building} не найдено</div>
                if (this.props.prop[0].status ===3)
                    return <div>Общежитие №{this.props.prop.building} работает корректно</div>
                return this.props.prop.map((value)=>{
                    console.log(value)
                    return <Switch prop = {value}/>
                })

            })()}
        </div>)
    }
}
export default Building