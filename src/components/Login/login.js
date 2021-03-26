import React, { Component } from 'react';
import "./login.css"
import axios from "axios";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

    }

    emailValidation = false
    passwordValidation = false


    captureData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == 'email') {
            if (value != "") {
                this.setState({ [name]: value });
                this.emailRef.current.innerHTML = ""
                this.emailValidation = true
            } else {
                this.emailRef.current.innerHTML = "Enter email"
                this.emailValidation = false
            }
        }
        if (name == 'password') {
            if (value != "") {
                this.setState({ [name]: value });
                this.passwordRef.current.innerHTML = ""
                this.passwordValidation = true
            } else {
                this.passwordRef.current.innerHTML = "Enter password"
                this.passwordValidation = false
            }
        }
        this.setState({ [name]: value });
    }

    login = (event) => {
        event.preventDefault();
        console.log("state values", this.state)
        axios.post('http://localhost:8080/v1/user/login', this.state).then(
          res => {
            if (res.data.token) {
              sessionStorage.setItem("token", res.data.token)
              this.props.history.push("/dashboard")
            }
          },
          err => {
            console.log(err)
          }
        )
      }



    render() {
        return (
            <div className="login">

                <div id="login" >
                    <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>

                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12 text-center">
                                    <form id="login-form" className="form" >
                                        <h3 className="text-center text-info" ><span style={{ color: "white" }}>SIGN IN</span></h3>
                                        <div className=" txt_field form-group">

                                            <input type="text" onClick={this.captureData} name="email" className="form-control" placeholder="email" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.emailRef}></p>
                                        </div>
                                        <div className=" txt_field form-group">

                                            <input type="password" onClick={this.captureData} name="password" className="form-control" placeholder="password" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.passwordRef}></p>
                                        </div>
                                        <div className="form-group">
                                            <h5><a href="#" className="pass">forgot password</a></h5>
                                            <input type="button" onClick={this.login} className="btn btn-info btn-md" value="SIGN IN" />
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

export default Login;





