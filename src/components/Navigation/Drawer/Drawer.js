import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/quiz-creator', label: 'Создать тест', exact: false},
];

class Drawer extends Component {
  handleClick = () => {
    this.props.onClose();
  };

  renderLinks() {
    return links.map((item, index) => {
      return (
        <li key={index}>
          <NavLink
            activeClassName={classes.active}
            exact={item.exact}
            to={item.to}
            onClick={this.handleClick}
          >
            {item.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];

    if(!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;