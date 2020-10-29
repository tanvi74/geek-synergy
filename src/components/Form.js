import React, { Component } from 'react';
import './Form.css';
import swal from 'sweetalert';
// import Dropdown from 'react-css-dropdown'
// import 'react-css-dropdown/dist/index.css'
import M from 'materialize-css';

export default class Form extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        number: "",
        profession: "",
        user: false
    }

    componentDidMount(){
        M.AutoInit();
        console.log(document.getElementsByClassName("selected")[0].innerText);
    }
    submitSignup = (e) =>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.name);
        console.log(this.state.number);
        if(this.state.email!=="" && this.state.password!=="" && this.state.name!=="" && this.state.number!=="" && document.getElementsByClassName("selected")[0].innerText!=="Profession"){
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('number', this.state.number);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('user', true);
            localStorage.setItem('profession', document.getElementsByClassName("selected")[0].innerText)
            window.location.href = "/login"
        }else{
            swal({
                title: "All fields are mandatory",
                icon: "error",
              })
        }
       
    }

    submitlogin = (e) =>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.name);
        console.log(this.state.number);
    
        if(localStorage.getItem('name')===this.state.name && localStorage.getItem("email")===this.state.email && 
           localStorage.getItem('password')===this.state.password && localStorage.getItem("number")===this.state.number &&
           localStorage.getItem('profession')===document.getElementsByClassName("selected")[0].innerText){
            swal({
                        title: "Success!",
                        icon: "success",
                      });
            window.location.href = "/movie"
           }else{
            swal({
                        title: "Invalid Credentials",
                        icon: "error",
                      })
           }
                
    }
    
    changeEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    changeNumber = (e) =>{
        this.setState({
            number: e.target.value
        })
    }

    render() {
        // console.log(this.props.page)
        return (
            <div>
                 <div className="row">
                     <div className="col l3 m2"></div>
                    <form className="col l6 m4 s12" onSubmit={this.props.page==="SIGNUP"? this.submitSignup : this.submitlogin}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" className="validate" onChange={this.changeName}/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input id="password" type="password" className="validate" onChange={this.changePassword}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" onChange={this.changeEmail} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate" onChange={this.changeNumber} />
                            <label htmlFor="icon_telephone">Mobile Number</label>
                        </div>
                    </div>
                    <div className = "row">
                        <div className="input-field col s12">
                        
                        <select>
                                <option value="1" defaultValue={'DEFAULT'}>Profession</option>
                                <option value="2">Student</option>
                                <option value="3">Employer</option>
                        </select>
                     
                        </div>
                    </div>

                    <div className="row">
                        {this.props.page === "SIGNUP" ? <> <button className="waves-effect waves-light btn sign-page-button" >SIGN UP</button> </> :
                                                        <> <button className="waves-effect waves-light btn sign-page-button" >LOGIN</button> </>

                        }
                        
                    </div>
                    </form>
                    <div className="col l3 m2"></div>
                </div>
            </div>
        )
    }
}

