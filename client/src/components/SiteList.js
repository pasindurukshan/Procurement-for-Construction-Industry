import React, { Component, Button } from "react";
import axios from "axios";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import "./SiteList.css"


export default class SiteList extends Component {
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
                            Site List <AiOutlineUnorderedList />
                            <div className="report">
                                <button type="button" class="btn btn-warning">Add Site</button>
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
                                    <th scope="col">Location</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Site Manager</th>
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
                                </tr> <tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
