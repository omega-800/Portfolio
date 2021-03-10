import React, { Component } from 'react';
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
                    <a className="navbar_top_link" href="home">Home</a>
                    <a className="navbar_top_link" href="career">Karriere</a>
                    <a className="navbar_top_link" href="certificates">Zertifikate</a>
                    <a className="navbar_top_link" href="projects">Projekte</a>
                    <a className="navbar_top_link" href="art">Kunst</a>
                </div>
                <div className={this.state.toggle ? "navbar_content show_navbar" : "navbar_content"}>   
                    <button className="navbar_content_close" onClick={this.Toggle}>&times;</button>
                    <h3>Verzeichnis</h3>
                    <a className="navbar_content_link" href="Home.js">Home</a>
                    <a className="navbar_content_link" href="Career.js">Karriere</a>
                    <a className="navbar_content_link" href="Certificates.js">Zertifikate</a>
                    <a className="navbar_content_link" href="Projects.js">Projekte</a>
                    <a className="navbar_content_link" href="Art.js">Kunst</a>
                    <h3>Kontakt</h3>
                    <a className="navbar_content_link" href="tel:076 271 93 38">076 271 93 38</a>
                    <a className="navbar_content_link" href="mailto:gshevoroshkin@gmail.com">Email</a>
                    <a className="navbar_content_link" href="github.com">Github</a>
                    <h3>Eingeloggt als:</h3>
                    <i>Omega</i>
                    <a className="navbar_content_link" href="php/logout.php">Logout</a>
                </div>
            </div>
        )
    }
}