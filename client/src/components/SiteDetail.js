import React, { Component, Button } from "react";
import axios from "axios";
import { TbListDetails } from 'react-icons/tb';
import "./SiteDetail.css"


export default class SiteDetail extends Component {
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
                            {"ADD"} Site Details <TbListDetails />
                            <div className="report">
                                <button type="button" class="btn btn-warning">Update Details</button>
                            </div>
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <div className="row">
                            <div className="col">
                                <div class="sd-card-body">
                                    <br />
                                    <h2>Project Info</h2>
                                    <br />
                                    Site ID : <div> {"ADD"} </div> <br />
                                    Location :  <div> {"ADD"} </div> <br />
                                    Address : <div> {"ADD"} </div> <br />
                                    Estimated Budget : <div> {"ADD"} </div> <br />
                                    Cost For Now : <div> {"ADD"} </div> <br />
                                    No Of Labours : <div> {"ADD"} </div> <br />
                                    Started Date : <div> {"ADD"} </div> <br />
                                    Finish Date : <div> {"ADD"} </div> <br />
                                    Finish Date : <div> {"ADD"} </div> <br />
                                </div>
                            </div>
                            <div className="col">
                                <div class="sd-card-body">
                                    <br />
                                    <h2> Site Manager Info</h2> <br />
                                    Name : <div> {"ADD"} </div><br />
                                    Mobile :  <div> {"ADD"} </div><br />
                                    Address : <div> {"ADD"} </div><br />
                                    Assistant : <div> {"ADD"} </div><br />
                                    Assistant Mobile : <div> {"ADD"} </div><br />
                                    No Of Labours : <div> {"ADD"} </div><br />
                                    Started Date : <div> {"ADD"} </div><br />
                                </div>
                            </div>
                            <div className="col">
                                <div class="sd-card-body">
                                    <br />
                                    <h2> Company Info</h2> <br />
                                    Name : <div> {"ADD"} </div> <br />
                                    Mobile :  <div> {"ADD"} </div> <br />
                                    Address : <div> {"ADD"} </div> <br />
                                    Email : <div> {"ADD"} </div> <br />
                                    Bank  : <div> {"ADD"} </div> <br />
                                    Account No : <div> {"ADD"} </div> <br />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        );
    }
}
