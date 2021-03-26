import React, { Component } from 'react';
import "./register.css"
import axios from "axios";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            mobile: "",
            city: ""

        }
        this.firstnameRef = React.createRef();
        this.lastnameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.mobileRef = React.createRef();
        this.cityRef = React.createRef();
    }



    emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&_?"])(?=.*\d).{8,}$/;
    firstName = false
    lastName = false
    mobile = false
    city = false



    captureData = event => {
        //console.log(this.confirmPass);
        let name = event.target.name;
        let value = event.target.value;
        //console.log(value)
        if (name == "firstName") {
            if (value != "" && value.length > 3) {
                this.firstnameRef.current.innerHTML = ""
                this.firstName = true
                this.setState({ [name]: value })
            } else {
                this.firstnameRef.current.innerHTML = "Please enter the firstname"
                this.firstName = false
            }
        }
        if (name == "lastName") {
            if (value != "" && value.length > 3) {
                this.lastnameRef.current.innerHTML = ""
                this.lastName = true
                this.setState({ [name]: value })
            } else {
                this.lastnameRef.current.innerHTML = "Please enter the lastname"
                this.lastName = false
            }
        }
        if (name == "password") {
            let passwordValidation = this.passwordPattern.test(value)
            if (value != "" && passwordValidation) {
                this.setState({ [name]: value })
                this.passwordRef.current.innerHTML = ""
            } else {
                this.passwordRef.current.innerHTML = "password required"
            }
        }
        if (name == "email") {
            let emailvalidation = this.emailPattern.test(value)
            if (value != "" && emailvalidation) {
                this.setState({ [name]: value })
                this.emailRef.current.innerHTML = ""
            } else {
                this.emailRef.current.innerHTML = "Email required"
            }
        }
        if (name == "mobileNo") {
            if (value.length == 10) {
                this.mobileRef.current.innerHTML = ""
                this.mobile = true
            } else {
                this.mobileRef.current.innerHTML = "Invalid mobile number"
                this.mobile = false
            }
        }
        if (name == "city") {
            if (value != "" && value != null) {
                this.cityRef.current.innerHTML = ""
                this.city = true
            } else {
                this.cityRef.current.innerHTML = "Please enter your city name"
                this.city = false
            }
        }
        this.setState({ [name]: event.target.value })
    }



    register = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/v1/user/register', this.state).then(
            res => {
                if (res.data.token) {
                    sessionStorage.setItem("token", res.data.token);
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
            <div className="register">
                <div id="login" >
                    <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>

                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12 text-center">
                                    <form id="login-form" className="form" >
                                        <h3 className="text-center text-info" ><span style={{ color: "white" }}>SIGN IN</span></h3>


                                        <div className=" txt_field form-group">

                                            <input type="text" name="firstname" onChange={this.captureData} className="form-control" placeholder="Firstname" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.firstnameRef}></p>
                                        </div>

                                        <div className=" txt_field form-group">

                                            <input type="text" name="lastname" onChange={this.captureData} className="form-control" placeholder="Lastname" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.lastnameRef}></p>
                                        </div>



                                        <div className=" txt_field form-group">

                                            <input type="text" name="email" onChange={this.captureData} className="form-control" placeholder="email" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.emailRef}></p>
                                        </div>
                                        <div className=" txt_field form-group">

                                            <input type="password" name="password" id="password" onChange={this.captureData} className="form-control" placeholder="password" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.passwordRef}></p>

                                        </div>

                                        <div className=" txt_field form-group">

                                            <input type="number" name="mobile" onChange={this.captureData} className="form-control" placeholder="mobile no" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.mobileRef}></p>
                                        </div>
                                        <div className=" txt_field form-group">

                                            <input type="text" name="city" onChange={this.captureData} className="form-control" placeholder="city" />
                                            <p style={{ color: 'red', fontSize: 18 + 'px' }} ref={this.cityRef}></p>
                                        </div>
                                        <div className="form-group">

                                            <input type="submit" name="submit" onClick={this.register} className="btn btn-info btn-md" value="Register" />

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