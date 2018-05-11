class Article {
    constructor(picture, discription, content, key = null ){
        this.key = key
        this.image = picture;
        this.discription = discription;
        this.content = content;
    }
}
export default Article