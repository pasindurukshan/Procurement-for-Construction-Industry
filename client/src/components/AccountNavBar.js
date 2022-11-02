import React, { Component } from "react";
import "./navStyle.css";

class AccountNavBar extends Component {
    render() {
        return (
            <div id="wrapper" className="toggled">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <br />
                        <br />
                        <br />


                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <i class="fas fa-sort-amount-up-alt"></i>
                                    &nbsp; ORDER LIST{" "}
                                </button>
                                <div className="dropdown-content">
                                    <a href="/orderDashboard"> order dashboard</a>
                                    <a href="/orderHome">order</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <i class="fas fa-cubes"></i>
                                    &nbsp; SITE LIST
                                </button>
                                <div className="dropdown-content">
                                    <a href="/matDash">Stock Dashboard</a>
                                    <a href="/matRet">Material Card</a>
                                    <a href="/lmo">LMO Card</a>
                                    <a href="/matreport">Reporting</a>
                                    <a href="/matdis">Distribution</a>
                                    <a href="/matins">Insights</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <i class="fab fa-product-hunt"></i>
                                    &nbsp; NOTIFICATION
                                </button>
                                <div className="dropdown-content">
                                    <a href="/PMDashboard">Production Dashboard</a>
                                    <a href="/neworder">Client New Orders</a>
                                    <a href="/searchfac">Search Factory</a>
                                    <a href="/magictool">Magic Tool</a>
                                    <a href="/rawfacHome">Raw Factory Dashboard</a>
                                    <a href="/pmHome">Register Factory Dashboard</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <i class="fas fa-file-import"></i>
                                    &nbsp; INVENTORY
                                </button>
                                <div className="dropdown-content">
                                    <a href="/SHdashboard">Import Dashboard</a>
                                    <a href="/ShipmentHome">ShipmentHome</a>
                                    <a href="/HomeLSmaterial">LMO Card</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <i class="fas fa-tasks"></i>
                                    &nbsp; GRN
                                </button>
                                <div className="dropdown-content">
                                    <a href="/dash">Dashboard</a>
                                    <a href="/qcDash">Testing</a>
                                    <a href="/rep">Monitoring</a>
                                    <a href="/defect">Reporting</a>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <img
                                src="%PUBLIC_URL%../../a.jpg"
                                class="rounded-circle"
                                width="200"
                                height="200"
                                alt=""
                            />
                        </li>


                    </ul>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    {/* <!-- Image and text --> */}
                    <a class="navbar-brand" href="#"></a>
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        HOME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-question-circle"></i>
                                        &nbsp; HELP
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <i class="fas fa-phone-square"></i> &nbsp;Contact
                                    </a>
                                </li>

                                <div class="position-absolute top-50 end-0 translate-middle-y">
                                    <a href="/matNotification">
                                        <button
                                            type="button"
                                            class="btn btn-primary position-relative"
                                        >
                                            <i class="fas fa-bell"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span class="visually-hidden">New alerts</span>
                                            </span>
                                        </button>
                                    </a>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp;
                                </div>

                                <div class="position-absolute top-50 end-0 translate-middle-y">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <img
                                                src="%PUBLIC_URL%../../user.png"
                                                class="rounded-circle"
                                                width="40"
                                                height="40"
                                                alt=""
                                            />
                                            &nbsp; Manager &nbsp; &nbsp; &nbsp;{" "}
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AccountNavBar;
