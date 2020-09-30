import React, {Component} from "react";
import './style.css';
import logo from '../../images/logo-lanscape.png'

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <img className="logo" src={logo} alt="" />
        </div>
      );
    }
  }
  export default Header;