import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navbox from './Navbox';

export default class Navbar extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return(
            <div className="navbar">
                <Navbox />
                <div className="navbar_top" className={this.state.toggle ? "navbar_top" : "navbar_top show_navbar_top"}>
                    <span className="navbar_top_open navbar_top_link" onClick={this.Toggle}>&#9776;</span>
                    <Link to="/" className="navbar_top_link">
                        <h4>Home</h4>
                    </Link>
                    <Link to="/career" className="navbar_top_link">
                        <h4>Karriere</h4>
                    </Link>
                    <Link to="/certificates" className="navbar_top_link">
                        <h4>Zertifikate</h4>
                    </Link>
                    <Link to="/projects" className="navbar_top_link">
                        <h4>Projekte</h4>
                    </Link>
                    <Link to="/art" className="navbar_top_link">
                        <h4>Kunst</h4>
                    </Link>
                </div>
            </div>
        )
    }
}