export class User {
    constructor(userId, avatar, firstName, lastName, email, postsCount, commentsCount) {
        this.userId = userId;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
    }

    getFullName = () => {
        return this.firstName + ' ' + this.lastName
    }

}