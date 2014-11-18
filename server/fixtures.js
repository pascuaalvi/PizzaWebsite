if (Products.find().count() === 0) {
  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount:0,
    flagged: false,
    upvoters: [],
    vot
}