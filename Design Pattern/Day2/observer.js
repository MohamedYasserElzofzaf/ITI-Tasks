/* With Using Observer design pattern
Create the main functionality for Facebook (Post,Comments,Message,createAccount,Friend,Unfriend )
a- create main class for Facebook accounts
b- create IFaceBookSetting make it as Abstract class(Interface)
contain the main members
a- Array of Friends
b- AddFriendFunction
c- RemoveFriend
d- sendMessageToAllFriend
e- PostsPushNotification
f- CommentsPush notification
g- SendMessageForPrivateFriend(Bonus)
c- make Facebook Account implement the main functionality IFaceBookSetting
d- create many Accounts (MyAccount ,Acc1,Acc2,Acc3,Acc4)
e- Add (Acc1,Acc2,Acc3) as Friends for MyAccount
f- Add new Post from My Account and fire notifications for all friends List
g- Acc2 make new Post with Comment From MyAccount (Send Notify for Acc2 with MyAccountComment)
h- Send Private Messages From MyAccount To Acc1 (Bonus)
*/

class FacebookActions {
    constructor() {
        this.Friends = [];
        this.Posts = [];
        this.Messages = [];
        this.Comments = [];
    }
    Friend(targetFacebookAccount) {
        this.Friends.push(targetFacebookAccount);
        console.log("Freind");
    }
    UnFriend(targetFacebookAccount) {
        this.Friends = this.Friends.filter((account) => {
            if (targetFacebookAccount != account) {
                return account;
            }
        });
    }
    MessageAll(msg) {
        this.Messages.push(msg);
        this.Friends.forEach((Friend) => {
            Friend.notifyMessage(msg, this);
        });
    }
    addPosts(Post) {
        this.Posts.push(Post);
        this.Friends.forEach((Friend) => {
            Friend.notify(Post, this);
        });
    }
    Comments(friend, post, comment) {
        for (let i of friend.Posts) {
            if (friend.Posts[i] == post) {
                this.Comments.push(comment);
                this.notifyComment(comment, post);
            }
        }
    }
}
class FacebookAccount extends FacebookActions {
    constructor(_Name, _Age) {
        super();
        this.Name = _Name;
        this.Age = _Age;
    }
    notify(Posts, owner) {
        console.log(`${owner.Name} Posts this ${Posts}`);
    }
    notifyMessage(Message, owner) {
        console.log(`${owner.Name} Send this ${Message} To all friends`);
    }
    notifyComment(comment, post) {
        console.log(
            `${this.Name} comment this ${comment} on this post of yours ${post}`
        );
    }
}
let MyAccount = new FacebookAccount("yasser", 27);
let AhmedAccount = new FacebookAccount("Ahmed", 30);
let AliAccount = new FacebookAccount("ali", 21);
let EmanAccount = new FacebookAccount("Eman", 18);
MyAccount.Friend(AhmedAccount);
MyAccount.Friend(EmanAccount);

MyAccount.addPosts("My first Post from JS");