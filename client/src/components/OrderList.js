import React, { Component, Button } from "react";
import axios from "axios";
import { AiFillDatabase } from 'react-icons/ai';
import "./OrderList.css"


export default class OrderList extends Component {
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
                            Order List <AiFillDatabase />
                            <div className="report">
                                <button type="button" class="btn btn-warning">Report</button>
                            </div>
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <table id="ptable" className="table">
                            <thead className="theah">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Site</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Payment</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
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
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>
                                        <a className="btn btn-success" href="#" >
                                            Accept
                                        </a>
                                        {" "}
                                        <a className="btn btn-danger" href="#" >
                                            Delete
                                        </a>
                                    </td>

                                </tr> <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>
                                        <td>
                                            <a className="btn btn-success" href="#" >
                                                Accept
                                            </a>
                                            {" "}
                                            <a className="btn btn-danger" href="#" >
                                                Delete
                                            </a>
                                        </td>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
