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
    commonStyle = {
        border: "0px solid black",
        width: "20%",
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
                 opacity: "0"
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
                         width:"90%",
                         height:"90%"
                     }}/>
             }

             {
                 <div
                     onClick={this.handleCloseModal}
                     style={{
                         position: "absolute",
                         marginTop: "-3%",
                         marginLeft: "95.5%",
                     }}><h1>X</h1></div>
             }

             <div>
                 <table style={{width: "95%"}}>
                     <tr>
                         <td style={this.commonStyle}>Этаж</td>
                         <td style={this.commonStyle}>Адрес</td>
                         <td style={this.commonStyle}>Проблема</td>
                     </tr>
                 </table>

             {

                 this.props.prop.map((value)=>{
                     console.log(value)
                     return <div style={{width:"95%"}}>
                         <Switch prop = {value}/>
                     </div>
                 })

             }
             </div>

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
                        {this.props.prop[0].building}

                    </div>
                }
                if (worstStatus ===2) {
                    return <div style={{
                        backgroundColor: "orange",
                        padding: "2%",
                    }}>
                        {this.props.prop[0].building}
                        {this.openModal()}
                    </div>
                }
                if (worstStatus ===1) {
                    return <div style={{
                        backgroundColor: "red",
                        padding: "2%",
                    }}
                    >
                        {this.props.prop[0].building}
                        {this.openModal()}
                    </div>
                }


            })()}
        </div>)
    }
}
export default Building
