import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

class TopNavigation extends Component {
    render() {
        let loginLink = '/login';
        let loginText = 'Login';
        if (this.props.auth.isAuthenticated) {
            loginLink = '/logout';
            loginText = 'Logout';
        }
        else {
            loginLink = '/login';
            loginText = 'Login';
        }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">CompanyName</a>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to='/'>Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to='/about'>About </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to={loginLink}>{loginText} </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(connect(mapStateToProps)(TopNavigation));