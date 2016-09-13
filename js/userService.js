angular.module( 'dmSocialApp' ).service( 'userService', function() {
  var userProfile = {};
  localStorage.userProfile = {};
  localStorage.userFriends = [];

  this.storeUserProfile = function( profileObj ) {
    userProfile = profileObj;
    localStorage.userProfile = JSON.stringify( profileObj );

  };

  this.getUserProfile = function() {
    return JSON.parse( localStorage.userProfile );
  };

  this.getUserFriends = function() {
    localStorage.userFriends = JSON.stringify( userFriends );
    return JSON.parse( localStorage.userFriends );
  }

  var userFriends = [];

} )
