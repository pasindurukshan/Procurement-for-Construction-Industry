import React, { Component, Button } from "react";
import "./ViewStock.css"
import { BsGraphUp } from 'react-icons/bs';

export default class ViewStock extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (

            <div>
                <div className="vs-align-card">
                    <div className="row">
                        <div className="header">
                            {"ADD"} Inventory <BsGraphUp />
                            <br />
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <table id="ptable" className="table">
                            <thead className="theah">
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Total Quantity</th>
                                    <th scope="col">Remaining Quantity</th>
                                    <th scope="col">Today Usage</th>

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
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="update">
                            <button type="button" class="btn btn-warning">Update Usage</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
