angular.module( 'dmSocialApp' ).service( 'mainService', function() {
  var profiles = [];
  var myProfile = {};

  this.storeMyProfile = function( profileObj ) {
    myProfile = profileObj;
  };

  this.getMyProfile = function() {
    return myProfile;
  }

} )
