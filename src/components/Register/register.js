import React, { Component } from 'react';
class Register extends Component {
    
    render() { 
        return (
            <div>
                 <div id="login" >
                    <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>

                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12 text-center">
                                    <form id="login-form" className="form" >
                                        <h3  className="text-center text-info" ><span style={{color:"white"}}>SIGN IN</span></h3>
                                        <div className=" txt_field form-group">

                                            <input type="text" name="username" id="username" className="form-control" placeholder="email" />
                                        </div>
                                        <div className=" txt_field form-group">

                                            <input type="text" name="password" id="password" className="form-control" placeholder="password" />
                                        </div>
                                        <div className="form-group">
                                        <h5><a href="#" className="pass">forgot password</a></h5>
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="SIGN IN" />
                                        </div>
                                        <div >
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Register;