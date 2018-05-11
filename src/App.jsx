import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      articals: [{
        key: 1,
        image:{ src: " build/images.jpeg", alt: "image"} ,
        discription: "This would be a small line of text describing the artical, This would be a small line of text describing the artical (This would be a small line of text describing the artical)",
        text: "Lorem ipsum dolor sit amet, faucibus porta, sociis wisi maecenas scelerisque purus eros nec, risus metus leo, metus odio arcu dignissim dignissim. Erat mattis sit fusce eleifend vestibulum, luctus mauris consectetuer, eu luctus ornare fringilla, et nec ut, est mi nec duis aliquam. Et wisi, magna in penatibus faucibus lorem nunc leo, at lorem lectus erat luctus molestie, mi euismod mi, eget velit ultrices. Montes lectus sapien dolor cum dui, eros magnis, nulla ac, iaculis tempus a. A quos libero lectus, lobortis elit ipsam justo qui egestas, potenti rutrum sed urna tortor, ullam vehicula elementum, rhoncus vel mi porta sapien a sed. Vulputate lectus vitae curabitur, lorem tellus nibh justo viverra libero condimentum, molestie at euismod, nulla magna. Sed wisi donec suspendisse orci. Nisl morbi amet rutrum, ipsum mollis molestie aliquet lacus sit, sed venenatis in eu suscipit. Curabitur ornare, tincidunt urna nec primis, elit velit varius integer nisl nullam tellus, leo suspendisse semper. In litora ultrices nulla pellentesque, libero aenean interdum odio posuere ullamcorper nec. Elit magna ante sed qui porttitor natoque.",
        tags: ["flower" , "blue"]
      },{
        key: 2,
        image: { src: "build/images.jpeg", alt: "image" },
        discription: "This would be a small line of text describing the artical",
        text: "Lorem ipsum dolor sit amet, faucibus porta, sociis wisi maecenas scelerisque purus eros nec, risus metus leo, metus odio arcu dignissim dignissim. Erat mattis sit fusce eleifend vestibulum, luctus mauris consectetuer, eu luctus ornare fringilla, et nec ut, est mi nec duis aliquam. Et wisi, magna in penatibus faucibus lorem nunc leo, at lorem lectus erat luctus molestie, mi euismod mi, eget velit ultrices. Montes lectus sapien dolor cum dui, eros magnis, nulla ac, iaculis tempus a. A quos libero lectus, lobortis elit ipsam justo qui egestas, potenti rutrum sed urna tortor, ullam vehicula elementum, rhoncus vel mi porta sapien a sed. Vulputate lectus vitae curabitur, lorem tellus nibh justo viverra libero condimentum, molestie at euismod, nulla magna. Sed wisi donec suspendisse orci. Nisl morbi amet rutrum, ipsum mollis molestie aliquet lacus sit, sed venenatis in eu suscipit. Curabitur ornare, tincidunt urna nec primis, elit velit varius integer nisl nullam tellus, leo suspendisse semper. In litora ultrices nulla pellentesque, libero aenean interdum odio posuere ullamcorper nec. Elit magna ante sed qui porttitor natoque.",
        tags: ["different", "flower"]
      }],
      userLoggedIn: null,
    }
  }

openArticalPage(event, data){
  const colapsableDiv = document.getElementById(data)
  console.log(colapsableDiv)
  if(colapsableDiv.style.display == "block"){
    colapsableDiv.style.display = "none";
  }else{
    colapsableDiv.style.display = "block"
  }
}


  render() {
    console.log("Rendering <App />");
    console.log(this.state.userLoggedIn)
    return (
      <div> 
        <Content openArticalPage={this.openArticalPage.bind(this)} articals={this.state.articals} />
        <Navbar loggedin={this.state.userLoggedIn} />
      </div>
    );
  }
}
export default App;