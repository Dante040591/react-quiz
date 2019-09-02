import React, {Component} from 'react';
import classes from './Layout.css';
import Menu from '../../components/Navigation/Menu/Menu';

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