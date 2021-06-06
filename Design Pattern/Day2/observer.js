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
        this.Followers = [];
        this.MyTwittes = [];
    }
    Follow(FacebookAccout) {
        this.Followers.push(FacebookAccout);
    }
    UnFollow(targetFacebookAccunt) {
        this.Followers = this.Followers.filter((account) => {
            if (targetFacebookAccunt != account) {
                return account;
            }
        });
    }
    addTwittes(Twitte) {
        this.MyTwittes.push(Twitte);
        this.Followers.forEach((follower) => {
            follower.notify(Twitte, this);
        });
    }
}
class FacebookAccount extends FacebookActions {
    constructor(_Name, _Age) {
        super();
        this.Name = _Name;
        this.Age = _Age;
    }
    notify(twittes, owner) {
        console.log(owner.Name, "Twittes this ", twittes);
    }
}
let MyAccount = new FacebookAccount("Nadia", 29);
let AhmedAccount = new FacebookAccount("Ahmed", 30);
let MarwaAccount = new FacebookAccount("Marwa", 27);
let EmanAccount = new FacebookAccount("Eman", 23);
MyAccount.Follow(AhmedAccount);
MyAccount.Follow(EmanAccount);
MyAccount.addTwittes("My first Twitte from JS");