import React from 'react'
import classes from './Menu.css';

const Menu = (props) => {
  const cls = [
    classes.Menu,
    'fa'
  ];

  if (props.isOpen) {
    cls.push('fa-times', classes.open);
  } else {
    cls.push('fa-bars');
  }

  return (
    <i
      onClick={props.onToggleMenu}
      className={cls.join(' ')}
    ></i>
  )
};

export default Menu;