export class Post {
    constructor(text, type, imageUrl, videoUrl, id, userId, commentsNum, userDisplayName) {
        this.text = text;
        this.type = type;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.id = id;
        this.userId = userId;
    }
}