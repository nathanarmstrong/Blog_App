import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    console.log("Rendering <Navbar />");
    console.log(this.props.loggedin)
    let buttonDiv;
    if(this.props.loggedin == null){
      buttonDiv = 
        <div>
          <button>Log In</button>
        </div>
    }else{
      buttonDiv =
        <div>
          <button>+</button>
          <button>*</button>
        </div>
    }
    return (
        <div className="navbar">
            <a className="navbar-brand" href="/" >Blog</a>
            {buttonDiv}
            <input type="text" onKeyUp=""/>
        </div>
    );
  }
}
export default Navbar;