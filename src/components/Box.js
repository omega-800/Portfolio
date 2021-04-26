import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
    render(){
        return(
            <div className="box">
                <h4 className="box_title">{this.props.title}</h4>
                {
                        Array(this.props.rows)
                        .fill()
                        .map((_) => (
                            <p>idk how this works man, but i'll figure it out</p>
                        ))
                    }
            </div>
        )
    }
}