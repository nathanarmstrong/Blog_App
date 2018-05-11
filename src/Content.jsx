import React, {Component} from 'react';
import Article from "./Article.jsx"

class Content extends Component {

  render() {
    console.log("Rendering <Content />")
    let articalPost = [];
    for(let article of this.props.articals){
        articalPost.push(
            <Article openArticalPage={this.props.openArticalPage} articalPost={articalPost} id={article.key} image={article.image} key={article.key} discription={article.discription} text={article.text} tags={article.tags} />
        );
    }

    return (
        <div className="content-box">
            <ul>
                <li>{articalPost}</li>
            </ul>
        </div>
    );
  }
}
export default Content;