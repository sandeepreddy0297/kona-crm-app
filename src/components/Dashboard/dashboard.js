import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./dashboard.css"
class Dashboard extends Component {

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <h3 className="header" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h3>

                    <div className="links">
                        <NavLink to="/changepassword">Dashboard</NavLink>
                        <NavLink to="/changepassword">Leads</NavLink>
                        <NavLink to="/changepassword">Report</NavLink>
                        <NavLink to="/changepassword">Settings</NavLink>
                        <NavLink to="/changepassword">Changepassword</NavLink>

                    </div>


                </div>
                <div className="topnav">
                    <a className="active" href="#home">logout</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <div className="dashboard" >
                    <h1>dashboard</h1>
                </div>
            </div>

        );
    }
}

export default Dashboard;