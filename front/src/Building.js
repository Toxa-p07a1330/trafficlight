import React from 'react'
import Switch from "./Switch";
import Modal from 'react-modal';
class Building extends React.Component{
    constructor () {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

     openModal = ()=>{
         return <div>
             <div onClick={this.handleOpenModal}
             style={{
                 backgroundColor:"white",
                 width: "56%",
                 height: "8%",
                 position: "absolute",
                 marginTop: "-3%",
                 marginLeft:"-1%",
                 opacity: "0.5"
             }}> 111</div>
         <Modal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
         >
             {
                 <div
                 onClick={this.handleCloseModal}
                 style={{
                     position: "absolute",
                     width:"100%",
                     height:"100%"
                 }}/>
             }
             {
                 this.props.prop.map((value)=>{
                     console.log(value)
                     return <Switch prop = {value}/>
                 })
             }

         </Modal>
         </div>
    }
    render(props) {
        let style = {
            marginTop:"3%"
        }
        console.log(this.props)
        return (<div style={style}>
            {(()=>{
                if(this.props.prop.length===0)
                    return <div>Общежитие №{this.props.prop.building} не найдено</div>
                let statusSum = 0;
                let worstStatus = 3;
                this.props.prop.map((value)=>{
                    statusSum+= value.status;
                    worstStatus = Math.min(value.status, worstStatus);
                })
                let averStatus = statusSum / this.props.prop.length;
                console.log(statusSum)
                if (worstStatus ===3) {
                    return <div style={{
                        backgroundColor: "green",
                        padding: "2%",
                    }}>
                        Ok {this.props.prop[0].building}

                    </div>
                }
                if (worstStatus ===2) {
                    return <div style={{
                        backgroundColor: "orange",
                        padding: "2%",
                    }}>
                        WARN {this.props.prop[0].building}
                        {this.openModal()}
                    </div>
                }
                if (worstStatus ===1) {
                    return <div style={{
                        backgroundColor: "red",
                        padding: "2%",
                    }}
                    >
                        CRITIC {this.props.prop[0].building}
                        {this.openModal()}
                    </div>
                }


            })()}
        </div>)
    }
}
export default Building
