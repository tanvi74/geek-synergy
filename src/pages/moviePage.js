import React, { Component } from 'react';
import axios from 'axios';

export default class moviePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false  
        };

        this.toggleCompanyInfo = this.toggleCompanyInfo.bind(this);
    }

    toggleCompanyInfo() {
        this.setState({visible: !this.state.visible})
    }


    componentDidMount(){
        console.log(localStorage.getItem("name"))
        if(localStorage.getItem("user")!==null){
            // this.getMovies();
        }else{
            window.location.href = "/";
        }
        
    }

    getMovies = async() => {
        const res = await axios.post('https://hoblist.com/movieList', {
            "category": "movies",
            "language": "kannada",
            "genre": "all",
            "sort": "voting"
        })
        console.log(res.data);      
    }

    logout = () =>{
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('number');
            localStorage.removeItem('password');
            localStorage.removeItem('profession');
            localStorage.removeItem('user');
            window.location.href = "/"
        
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li> <button className="waves-effect waves-light btn sign-page-button abc" onClick={this.toggleCompanyInfo}>Company Info</button></li>
                        <li> <button className="waves-effect waves-light btn sign-page-button abc" onClick={this.logout}>LOGOUT</button></li>
                    </ul>
                    </div>
                </nav>
        
                <h1 className="heading">Movie Page</h1>
                {this.state.visible ? <div className="company">
                    <div>Company: Geeksynergy Technologies Pvt Ltd </div> 
                    <div>Address:  Sanjayanagar, Bengaluru-56</div>
                    <div>Phone:XXXXXXXXX09</div>
                    <div>Email: XXXXXX@gmail.com</div>
                    </div> : <></>}
            </div>
        )
    }
}


