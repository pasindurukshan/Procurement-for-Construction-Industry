import React, { Component, Button } from "react";
import { FaToolbox } from 'react-icons/fa';
import "./GrnOrder.css"



export default class GrnOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (

            <div>
                <div className="go-align-card">
                    <div className="row">
                        <div className="header">
                            GRN Order ID : {"ADD"} <FaToolbox />
                            <hr />
                        </div>
                    </div>
                    <div className="go-header-card">
                        <div className="row">
                            <div className="col">
                                Order ID :
                                <div className="go-or">
                                    {"ADD"}
                                </div>
                            </div>
                            <div className="col">
                                Site :
                                <div className="go-or">
                                    {"ADD"}
                                </div>
                            </div>
                            <div className="col">
                                Delivered Date :
                                <div className="go-or">
                                    {"ADD"}
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="table-order">
                        <table id="ptable" className="table">
                            <thead className="theah">
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Amount</th>

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


                                </tr>
                                <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>

                                </tr>
                                <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>

                                </tr> <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>

                                </tr> <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="go-total-card">
                                Total : {"ADD"}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="grn">
                            <button type="button" class="btn btn-warning">Add GRN</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
