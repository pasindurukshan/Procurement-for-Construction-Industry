import React, { Component, Button } from "react";
import "./ProjectSite.css"
import { MdInventory2 } from 'react-icons/md';

export default class ProjectSite extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (

            <div>
                <div className="ps-align-card">
                    {/* <div className="row">
                        <div className="header">
                            Project Site Inventory <MdInventory2 />
                            <br />
                            <div className="total">
                                Total Site : {"ADD"}
                            </div>
                        </div>
                        <hr />
                    </div> */}
                    <div className="row">
                        <div className="header">
                            Project Site Inventory <MdInventory2 />

                            <div className="total">
                                Total Site : {"ADD"}
                            </div>
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <table id="ptable" className="table">
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
                                    <td>
                                        <a className="btn btn-success" href="#" >
                                            View In Stock
                                        </a>
                                    </td>

                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>
                                        <a className="btn btn-success" href="#" >
                                            View In Stock
                                        </a>
                                    </td>

                                </tr><tr >
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>AAA</td>
                                    <td>
                                        <a className="btn btn-success" href="#" >
                                            View In Stock
                                        </a>
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
