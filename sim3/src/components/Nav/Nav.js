import React, {Component} from 'react';
import './Nav.css';
import home from './../../assets/home.png';
import search from './../../assets/search.png';

class Nav extends Component {
    constructor(props) {
        super(props);

    }

render(){
  let {header} = this.props;
    return (
        <div className="header-parent">
            <div className="header-container">
                <div className="header-child-left">
                    <span className="header-helo">Helo</span>
                        <a href="/" >
                            <img className="header-home" src={home} />
                        </a>
                        <a href="/search" >
                            <img className="header-search" src={search} />
                        </a>
                </div>

                <div className="header-child-mid">
                    <span className="header-word">{header}</span>
                </div>

                <div className="header-child-right">
                    <span className="header-logout">Logout</span>
                </div>
            </div>

        </div>
    )
}

}
export default Nav;