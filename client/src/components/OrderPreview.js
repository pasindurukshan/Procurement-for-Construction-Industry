import React, { Component, Button } from "react";
import axios from "axios";
import { GoTasklist } from 'react-icons/go';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

import "./OrderPreview.css"
export default class OrderPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (

            <div>
                <div className="card">
                    <div className="pr-align-card">
                        <div className="row">
                            <div className="pr-header">
                                Order Preview : {"Add ID"} <GoTasklist />
                                <div className="report">
                                    <button type="button" class="btn btn-warning">Report</button>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <br />
                        <div className="pr-table-order">
                            <table id="ptable" className="table">
                                <thead className="pr-theah">
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Amount</th>
                                    </tr>

                                </thead>
                                <tbody className="pr-tbody">
                                    {/* {this.state.packing.map((packing, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{packing.customer}</td>
                                <td>{packing.category}</td>
                                <td>{packing.payment}</td>
                               
                            </tr>
                        ))} */}
                                    <tr >
                                        <th scope="row">ssss</th>
                                        <td scope="row">sssssss</td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-success" href="#" >
                                                <AiOutlineCheck />
                                            </a></td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="#" >
                                                <BsFillTrashFill />
                                            </a>
                                        </td>

                                    </tr> <tr >
                                        <th scope="row">ssss</th>
                                        <td scope="row">sssssss</td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-success" href="#" >
                                                <AiOutlineCheck />
                                            </a></td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="#" >
                                                <BsFillTrashFill />
                                            </a>
                                        </td>

                                    </tr> <tr >
                                        <th scope="row">ssss</th>
                                        <td scope="row">sssssss</td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-success" href="#" >
                                                <AiOutlineCheck />
                                            </a></td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="#" >
                                                <BsFillTrashFill />
                                            </a>
                                        </td>

                                    </tr> <tr >
                                        <th scope="row">ssss</th>
                                        <td scope="row">sssssss</td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-success" href="#" >
                                                <AiOutlineCheck />
                                            </a></td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="#" >
                                                <BsFillTrashFill />
                                            </a>
                                        </td>

                                    </tr> <tr >
                                        <th scope="row">ssss</th>
                                        <td scope="row">sssssss</td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-success" href="#" >
                                                <AiOutlineCheck />
                                            </a></td>
                                        <td scope="row">sssssssss &nbsp;&nbsp;&nbsp;
                                            <a className="btn btn-danger" href="#" >
                                                <BsFillTrashFill />
                                            </a>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="pr-main">
                            <div class="row">
                                <div class="col">
                                    <div className="pr-card">
                                        <div class="col-sm-4">
                                            <div class="pr-card-body">
                                                <br />
                                                Project Site <br />
                                                <div className="pr-light">{"Add"}</div> <br />
                                                Project Budget <br />
                                                <div className="pr-light">{"Add"}</div> <br />
                                                Remaining Budget <br />
                                                <div className="pr-light">{"Add"}</div> <br />

                                                <div className="report">
                                                    <button type="button" class="btn btn-warning">Approve Order</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="pr-card-2">
                                        <div class="col-sm-4">

                                            <div class="pr-card-body-2">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="pr-align">
                                                            <br />
                                                            Total Amount <br />
                                                            <div className="pr-light">{"Add"}</div> <br />
                                                            Order Date <br />
                                                            <div className="pr-light">{"Add"}</div> <br />
                                                            Due Date <br />
                                                            <div className="pr-light">{"Add"}</div> <br />
                                                        </div>

                                                    </div>
                                                    <div className="col">
                                                        <br />
                                                        Supplier <br />
                                                        <div className="sup-drop">
                                                            <select name="supplier" class="c-form-profession form-control" id="c-form-profession" value={this.state.add} onChange={this.handleInputChange} >
                                                                <option value="">Select a Supplier</option>
                                                                <option value="ADD">ADD</option>
                                                                <option value="ADD">ADD</option>
                                                                <option value="ADD">ADD</option>
                                                            </select>
                                                        </div><br />

                                                        <input type="checkbox" id="partially" name="partially" value="Partially Approval" />
                                                        {" "}Partially Approval
                                                        <br />
                                                        <input type="checkbox" id="totally" name="totally" value="Totally Approval" />
                                                        {" "}Totally Approval
                                                        <br /><br />

                                                        Payment Method
                                                        <br />
                                                        <div className="sup-drop">
                                                            <select name="payment" class="c-form-profession form-control" id="c-form-profession" value={this.state.add} onChange={this.handleInputChange} >
                                                                <option value="">Select a Payment Method</option>
                                                                <option value="ADD">ADD</option>
                                                                <option value="ADD">ADD</option>
                                                                <option value="ADD">ADD</option>
                                                            </select>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div >
                </div>
            </div >

        );
    }
}