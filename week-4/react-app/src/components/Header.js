import React, { Component } from 'react';
import NavigationIcon from '../img/icons8-menu.svg';
import DeleteIcon from '../img/icons8-delete.svg';

class Header extends Component {
  state = {
    showSideBar: false,
  }

  toggleSideBar = () => {
    this.setState((prev) => {
      return {
        showSideBar: !prev.showSideBar
      }
    });
    document.getElementsByTagName('body')[0].classList.toggle('dimmed');
  }

  render() {
    const { showSideBar } = this.state;
    
    return (
      <header className="main-header">
        <div className="main-title">
          <h1 className="name">
            <button className="navy-blue">臺北松山機場</button>
          </h1>
          <img src={NavigationIcon} alt="navigation-bar" className="navigation-bar" onClick={this.toggleSideBar} />
        </div>
        <ul className={showSideBar ? "main-nav show" : "main-nav"}>
          <img src={DeleteIcon} alt="close-button" className="close-button" onClick={this.toggleSideBar} />
          <li><button className="light-orange">航班資訊</button></li>
          <li><button className="light-orange">旅客服務</button></li>
          <li><button className="light-orange">機場交通</button></li>
          <li><button className="light-orange">機場資訊</button></li>
        </ul>
      </header>
    );
  }
}

export default Header;
