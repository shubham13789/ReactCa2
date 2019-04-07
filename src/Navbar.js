import React, { Component } from 'react';



class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
          
          <h2 style={{color:"white"}}>Totol Books = {this.props.length}</h2>
      
      </nav>
    );
  }
}

export default Navbar;