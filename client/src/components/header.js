import axios from 'axios';
import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        axios.defaults.headers.common = {'Authorization': ''};
        this.props.history.push('/');

    }

    render(){

        if(localStorage.getItem('token')){
            return(
                <div className="navbar">
                <ul>
                    <li><Link to="/">الرئيسية</Link></li>
                    <li><Link to="/post/create">انشاء تدوينة</Link></li>
                    <li><a href="#logout" onClick={this.logout}>تسجيل الخروج</a></li>
                </ul>
            </div>
            );
        }

        return(
            <div className="navbar">
            <ul>
                <li><Link to="/">الرئيسية</Link></li>
                <li><Link to="/login">تسجيل الدخول</Link></li>
                <li><Link to="/register">التسجيل</Link></li>
            </ul>
        </div>
        );
    }
}

export default withRouter(Header);