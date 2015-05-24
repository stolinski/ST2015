String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


if (Meteor.isClient) {
    Template.Layout.helpers({
    });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}