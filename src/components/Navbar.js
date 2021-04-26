import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
                <div className="navbar_top">
                    <span className="navbar_top_open" onClick={this.Toggle}>&#9776;</span>
                    <Link to="/" className="navbar_top_link">
                        <h3>Home</h3>
                    </Link>
                    <Link to="/career" className="navbar_top_link">
                        <h3>Karriere</h3>
                    </Link>
                    <Link to="/certificates" className="navbar_top_link">
                        <h3>Zertifikate</h3>
                    </Link>
                    <Link to="/projects" className="navbar_top_link">
                        <h3>Projekte</h3>
                    </Link>
                    <Link to="/art" className="navbar_top_link">
                        <h3>Kunst</h3>
                    </Link>
                </div>
                <div className={this.state.toggle ? "navbar_content show_navbar" : "navbar_content"}>   
                    <button className="navbar_content_close" onClick={this.Toggle}>&times;</button>
                    <h3>Verzeichnis</h3>
                    <h3 className="navbar_content_link" href="Home.js">Home</h3>
                    <h3 className="navbar_content_link" href="Career.js">Karriere</h3>
                    <h3 className="navbar_content_link" href="Certificates.js">Zertifikate</h3>
                    <h3 className="navbar_content_link" href="Projects.js">Projekte</h3>
                    <h3 className="navbar_content_link" href="Art.js">Kunst</h3>
                    <h3>Kontakt</h3>
                    <h3 className="navbar_content_link" href="tel:076 271 93 38">076 271 93 38</h3>
                    <h3 className="navbar_content_link" href="mailto:gshevoroshkin@gmail.com">Email</h3>
                    <h3 className="navbar_content_link" href="github.com">Github</h3>
                    <h3>Eingeloggt als:</h3>
                    <i>Omega</i>
                    <h3 className="navbar_content_link" href="php/logout.php">Logout</h3>
                </div>
            </div>
        )
    }
}