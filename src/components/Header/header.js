
import { NavLink, } from "react-router-dom"
import "./header.css"
import React, { Component } from 'react';
class Header extends Component {
    
    render() { 
        return ( 
            <div className="background">

            <div className="maintitle">
                <h1 className="text-center text-white pt-5" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>
            </div>
            <div className="content ">
                <button  className="btn btn-info btn-md">  <NavLink to="/login" >Login</NavLink> </button>&nbsp; &nbsp; &nbsp;
                <button  className="btn btn-info btn-md"><NavLink to="/register" >register</NavLink> </button>&nbsp; &nbsp; &nbsp; &nbsp;
            </div>

        </div>
         );
    }
}
 
export default Header;

