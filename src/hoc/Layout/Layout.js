import React, {Component} from 'react';
import classes from './Layout.css';
import Menu from '../../components/Navigation/Menu/Menu';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {

  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <div className={classes.Layout}>

        <Drawer onClose={this.menuCloseHandler} isOpen={this.state.menu}/>

        <Menu
          onToggleMenu={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;