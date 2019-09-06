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

  render() {
    return (
      <div className={classes.Layout}>

        <Drawer isOpen={this.state.menu}/>

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