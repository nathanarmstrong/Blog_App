import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    console.log("Rendering <Navbar />");
    console.log(this.props.loggedin)
    let buttonDiv;
    let search = <input type="text" onKeyUp=""/>
    if(this.props.loggedin == null){
      buttonDiv = 
        <div className="loggin-button">
          <button>Log In</button>
          {search}
        </div>
    }else{
      buttonDiv =
        <div className="user-buttons">
          <button>+</button>
          <button>*</button>
          {search}
        </div>
    }
    return (
        <div className="navbar">
            <a className="navbar-brand" href="/" >Blog</a>
            {buttonDiv}
        </div>
    );
  }
}
export default Navbar;