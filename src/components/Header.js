import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
      return <div className="section about"> 
        <div className="about_title">
          <h1>{this.props.title}</h1>
        </div>
        <div>
          <h4 className="about_text">{this.props.text}</h4>
        </div>
      </div>;
    }
  }

  export default Header;