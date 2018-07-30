class Tweet {
    constructor(id) {
        this.id = id;
        this.time = Tweet.count++;
    }
}
Tweet.count = 0;
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.tweets = {};
    this.follows = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let t = new Tweet(tweetId);
    if (this.tweets[userId] === undefined) this.tweets[userId] = [];
    this.tweets[userId].push(t);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let allNewTweets = this.tweets[userId] ? [...this.tweets[userId]] : [];
    if (this.follows[userId] !== undefined) {
        // let that = this
        this.follows[userId].forEach((userid) => {
            let followeeTweets = this.tweets[userid] ? [...this.tweets[userid]] : [];
            for (let i = followeeTweets.length - 1; i >= 0 && i + 10 >= followeeTweets.length; i--) {
                allNewTweets.push(followeeTweets[i]);
            }
        });
    }
    allNewTweets.sort((a, b) => {
        return b.time - a.time
    });
    return allNewTweets.slice(0, 10).map((element) => {
        return element.id;
    });
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return;
    if (this.follows[followerId] === undefined) this.follows[followerId] = [];
    if (this.follows[followerId].indexOf(followeeId) === -1) {
        this.follows[followerId].push(followeeId);
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows[followerId] === undefined) return;
    this.follows[followerId] = this.follows[followerId].filter((item) => {
        return item !== followeeId;
    })
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
var obj = new Twitter();
obj.postTweet(1, 5);
obj.follow(1, 2);
obj.postTweet(2, 6);

console.log(obj.getNewsFeed(1));
