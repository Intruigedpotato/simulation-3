import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

    }

render(){
    return (
        <div className="header-parent">
            <div className="header-container">
                <div className="header-child-left">
                    <span className="header-helo">Helo</span>
                        <a href="/" >
                            <img className="header-home" src="" />
                        </a>
                        <a href="/search" ></a>
                </div>
                <div className="header-child-mid"></div>
                <div className="header-child-right"></div>
            </div>

        </div>
    )
}

}