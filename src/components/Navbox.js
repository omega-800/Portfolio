import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbox.css';

class Navbox extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return(
            <div className="navbar">
                <div className={this.state.toggle ? "navbar_content show_navbar" : "navbar_content"}>   
                    <button className="navbar_content_close" onClick={this.Toggle}>&times;</button>
                    <div className="navbar_list">
                        <div>
                        <h2>Verzeichnis</h2>
                        <div className="navbar_list_list">
                        <a className="navbar_content_link" href="Home.js">Home</a>
                        <a className="navbar_content_link" href="Career.js">Karriere</a>
                        <a className="navbar_content_link" href="Certificates.js">Zertifikate</a>
                        <a className="navbar_content_link" href="Projects.js">Projekte</a>
                        <a className="navbar_content_link" href="Art.js">Kunst</a>
                        </div>
                    </div>
                    <div>
                        <h2>Kontakt</h2>
                        <div className="navbar_list_list">
                        <a className="navbar_content_link" href="tel:076 271 93 38">076 271 93 38</a>
                        <a className="navbar_content_link" href="mailto:gshevoroshkin@gmail.com">Email</a>
                        <a className="navbar_content_link" href="github.com">Github</a>
                        </div>
                    </div>
                    </div>
                    <h2 className ="navbar_login">Eingeloggt als:</h2>
                    <i className ="navbar_name">Omega</i>
                    <button className="navbar_content_logout" href="php/logout.php">Logout</button>
                </div>
            </div>
        )
    }
}

export default Navbox;