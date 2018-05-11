import React, {Component} from 'react';
import ArticalContainer from './Models/Article.js';

class Article extends Component {

  render() {
      console.log("Rendering <Article />");
     const image = this.props.image;
    return (
        <div onClick={((e) =>  this.props.openArticalPage(e, this.props.id)) } className="article">
            <div className="preview">
                <img src={image.src} alt={image.alt}  />
                <p>{this.props.discription}</p>
            </div>
            <div id={this.props.id} className="collapsible">
                <p>{this.props.text}</p>
            </div>
        </div>
    );
  }
}
export default Article;