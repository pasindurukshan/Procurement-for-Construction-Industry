import React, { Component, Button } from "react";
import axios from "axios";
import { AiFillFileAdd } from 'react-icons/ai';
import "./SiteDetail.css"


export default class AddSite extends Component {
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
                            Add Site <AiFillFileAdd />
                            <div className="report">
                                <button type="button" class="btn btn-warning">Save</button>
                            </div>
                            <hr />
                        </div>

                    </div>
                    <br />
                    <div className="table-order">
                        <div className="row">
                            <div className="col">
                                <div class="as-card-body">
                                    <br />
                                    <h2>Project Info</h2>
                                    <br />
                                    Site ID : <div>
                                        <input type="text" name="siteID" /> </div> <br />
                                    Location :  <div>
                                        <input type="text" name="location" />  </div> <br />
                                    Address : <div>
                                        <input type="text" name="address" /> </div> <br />
                                    Estimated Budget : <div>
                                        <input type="text" name="estimatedBudget" />  </div> <br />
                                    Cost For Now : <div>
                                        <input type="text" name="costforNow" />  </div> <br />
                                    No Of Labours : <div>
                                        <input type="text" name="noOfLabours" />  </div> <br />
                                    Started Date : <div>
                                        <input type="text" name="startedDate" /> </div> <br />
                                    Finish Date : <div>
                                        <input type="text" name="finishDate" />  </div> <br />

                                </div>
                            </div>
                            <div className="col">
                                <div class="as-card-body">
                                    <br />
                                    <h2> Site Manager Info</h2> <br />
                                    Name : <div>
                                        <input type="text" name="name" /> </div><br />
                                    Mobile :  <div>
                                        <input type="text" name="mobile" /> </div><br />
                                    Address : <div> {"ADD"} </div><br />
                                    Assistant : <div> {"ADD"} </div><br />
                                    Assistant Mobile : <div> {"ADD"} </div><br />
                                    No Of Labours : <div> {"ADD"} </div><br />
                                    Started Date : <div> {"ADD"} </div><br />
                                </div>
                            </div>
                            <div className="col">
                                <div class="as-card-body">
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
