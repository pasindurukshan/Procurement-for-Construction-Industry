import React, { Component, Button } from "react";
import axios from "axios";
import { IoMdNotifications } from 'react-icons/io';
import "./Notification.css"


export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (

            <div>
                <div className="ol-align-card">
                    <div className="row">
                        <div className="header">
                            Notification <IoMdNotifications />
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <table id="ptable" className="table">
                            <tbody className="no-tbody">
                                {/* {this.state.packing.map((packing, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>

                                <td>{`OID${packing._id.substr(0, 5)}`}</td>
                                <td>{packing.customer}</td>
                                <td>{packing.category}</td>
                                <td>{packing.payment}</td>
                                <td>{packing.quantity}</td>
                                
                            </tr>
                        ))} */}
                                <tr >

                                    <td>AAA</td>
                                    <td>AAA</td>


                                </tr> <tr >
                                    <td>Day Ago</td>
                                    <td>Day Ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}
