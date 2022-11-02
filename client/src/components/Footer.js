import React, { Component, Button, FontAwesomeIcon } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import "./navStyle.css";


export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (

            <div>
                <div class="footer">
                    <div class="contain">



                        <div class="col">
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <div className="middle">
                                    <div className="icons">
                                        <AiFillFacebook /> {" "}
                                        <AiFillInstagram /> {" "}
                                        <BsTwitter /> {" "}
                                        <AiFillMail />

                                    </div>
                                    <div className="copyright">

                                        <p>2022 RCP Contruction | @ All Right Reserved</p>

                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>



                    </div>
                </div>
            </div>

        );
    }
}
