import React from 'react';

import logo from '../../asset/web-logo.png';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">

                <div className="logo-container">
                    <Link to="/">
                        <img alt="logo" src={logo} className="logo-web"/>
                    </Link>

                </div>

                <div className="collapse navbar-collapse nav-center" id="navbarSupportedContent">
                    <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                              Lịch Chiếu
                            </li>
                            <li className="nav-item">
                              Cụm Rạp
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="nav-left-content" >
                    <Button className="button-login" >
                        <UserOutlined className="icon" />
                        <Link to='/login'>
                            Đăng Nhập
                        </Link>
                    </Button>
                   {/* <span className="avatar-container">
                        <img alt="avatar" src={avatar} className="avatar-nav" />
                    </span>
                     <p className="login"> Đăng Nhập</p>*/}
                </div>

            </nav>
        </div>
    );
};

export default NavBar;