import React from 'react'
import Switch from "./Switch";
import Table from 'rc-table';
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
    columns = [
        {
            title: 'Имя',
            dataIndex: 'Name',
            key: 'Name',
            width: 100,
            align: "center",

        },
        {
            title: 'Ссылка',
            dataIndex: 'Link',
            key: 'Link',
            width: 100,
            align: "center"
        },
        {
            title: 'Строение',
            dataIndex: 'Building',
            key: 'Building',
            width: 200,
            align: "center"
        },
        {
            title: 'Комната',
            dataIndex: 'Room',
            key: 'Room',
            align: "center"
        },
        {
            title: 'Проблема',
            dataIndex: 'Ticket',
            key: 'Ticket',
            align: "center"
        },

        {
            title: 'Комментарий',
            dataIndex: 'Comment',
            key: 'Comment',
            align: "center"
        },
    ];

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
                                <Table columns={this.columns} data={this.state.data} />
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
                                        this.setState(newState);
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
