angular.module( 'dmSocialApp' ).controller( 'mainController', function( $scope, userService, resultsService ) {

  $scope.viewStates = {
      showInitialPageTopNavBar: true
    , showLandingPageTopNavBar: false
    , showAllOtherViewsTopNavBar: false

    , showInitialViewLeftSide: true
    , showUserProfileViewLeftSide: false
    , showFriendProfileViewLeftSide: false

    , showInitialViewRightSide: true
    , showLandingPageRightSide: false
    , showFriendProfileViewRightSide: false
    , showFriendsViewRightSide: false
    , showSearchForNewFriendsRightSide: false
    , showUpdateProfileViewRightSide: false
  };

  $scope.userProfile = {};
  $scope.friendProfile = {};
  $scope.userFriends = [];

  $scope.viewFriendsIsActive = false;
  $scope.findFriendsIsActive = false;
  $scope.updateProfileIsActive = false;

  $scope.isUserProfileLogged = false;

  $scope.thumbnailOverlayActive = false;

  if ( localStorage.userProfile && localStorage.userFriends ) {
    $scope.userProfile = userService.getUserProfile();
    $scope.userFriends = userService.getUserFriends();
    $scope.isUserProfileLogged = true;
  }

  $scope.goToInitialView = function() {
    $scope.viewStates.showInitialPageTopNavBar = true;
    $scope.viewStates.showLandingPageTopNavBar = false;
    $scope.viewStates.showAllOtherViewsTopNavBar = false;

    $scope.viewStates.showInitialViewLeftSide = true;
    $scope.viewStates.showUserProfileViewLeftSide = false;
    $scope.viewStates.showFriendProfileViewLeftSide = false;

    $scope.viewStates.showInitialViewRightSide = true;
    $scope.viewStates.showFriendsViewRightSide = false;
    $scope.viewStates.showLandingPageRightSide = false;
    $scope.viewStates.showFriendProfileViewRightSide = false;
    $scope.viewStates.showSearchForNewFriendsRightSide = false;
    $scope.viewStates.showUpdateProfileViewRightSide = false;

    $scope.viewFriendsIsActive = false;
    $scope.findFriendsIsActive = false;
    $scope.updateProfileIsActive = false;
  };

  $scope.goToViewFriends = function() {
    $scope.userFriends = userService.getUserFriends();

    $scope.viewStates.showAllOtherViewsTopNavBar = true;
    $scope.viewStates.showInitialPageTopNavBar = false;
    $scope.viewStates.showLandingPageTopNavBar = false;

    $scope.viewStates.showUserProfileViewLeftSide = true;
    $scope.viewStates.showInitialViewLeftSide = false;
    $scope.viewStates.showFriendProfileViewLeftSide = false;

    $scope.viewStates.showFriendsViewRightSide = true;
    $scope.viewStates.showInitialViewRightSide = false;
    $scope.viewStates.showLandingPageRightSide = false;
    $scope.viewStates.showFriendProfileViewRightSide = false;
    $scope.viewStates.showSearchForNewFriendsRightSide = false;
    $scope.viewStates.showUpdateProfileViewRightSide = false;

    $scope.viewFriendsIsActive = true;
    $scope.findFriendsIsActive = false;
    $scope.updateProfileIsActive = false;

  };

  $scope.goToFindFriends = function() {
    $scope.userResults = resultsService.getUserResults();

    $scope.viewStates.showAllOtherViewsTopNavBar = true;
    $scope.viewStates.showInitialPageTopNavBar = false;
    $scope.viewStates.showLandingPageTopNavBar = false;

    $scope.viewStates.showUserProfileViewLeftSide = true;
    $scope.viewStates.showInitialViewLeftSide = false;
    $scope.viewStates.showFriendProfileViewLeftSide = false;

    $scope.viewStates.showSearchForNewFriendsRightSide = true;
    $scope.viewStates.showInitialViewRightSide = false;
    $scope.viewStates.showLandingPageRightSide = false;
    $scope.viewStates.showFriendProfileViewRightSide = false;
    $scope.viewStates.showFriendsViewRightSide = false;
    $scope.viewStates.showUpdateProfileViewRightSide = false;

    $scope.findFriendsIsActive = true;
    $scope.viewFriendsIsActive = false;
    $scope.updateProfileIsActive = false;
  };

  $scope.goToUpdateProfile = function() {
    $scope.viewStates.showAllOtherViewsTopNavBar = true;
    $scope.viewStates.showInitialPageTopNavBar = false;
    $scope.viewStates.showLandingPageTopNavBar = false;

    $scope.viewStates.showUserProfileViewLeftSide = true;
    $scope.viewStates.showFriendProfileViewLeftSide = false;
    $scope.viewStates.showInitialViewLeftSide = false;

    $scope.viewStates.showUpdateProfileViewRightSide = true;
    $scope.viewStates.showInitialViewRightSide = false;
    $scope.viewStates.showLandingPageRightSide = false;
    $scope.viewStates.showFriendProfileViewRightSide = false;
    $scope.viewStates.showFriendsViewRightSide = false;
    $scope.viewStates.showSearchForNewFriendsRightSide = false;

    $scope.updateProfileIsActive = true;
    $scope.findFriendsIsActive = false;
    $scope.viewFriendsIsActive = false;
  };

  $scope.goToLandingPage = function() {
    $scope.viewStates.showLandingPageTopNavBar = true;
    $scope.viewStates.showAllOtherViewsTopNavBar = false;
    $scope.viewStates.showInitialPageTopNavBar = false;

    $scope.viewStates.showUserProfileViewLeftSide = true;
    $scope.viewStates.showFriendProfileViewLeftSide = false;
    $scope.viewStates.showInitialViewLeftSide = false;

    $scope.viewStates.showLandingPageRightSide = true;
    $scope.viewStates.showUpdateProfileViewRightSide = false;
    $scope.viewStates.showInitialViewRightSide = false;
    $scope.viewStates.showFriendProfileViewRightSide = false;
    $scope.viewStates.showFriendsViewRightSide = false;
    $scope.viewStates.showSearchForNewFriendsRightSide = false;

    $scope.updateProfileIsActive = false;
    $scope.findFriendsIsActive = false;
    $scope.viewFriendsIsActive = false;
  };

  $scope.initialPageSaveChanges = function( profileObj, $event ) {
    $event.preventDefault();
    $scope.userProfile = profileObj;
    userService.storeUserProfile( profileObj );
    $scope.goToLandingPage();
    $scope.isUserProfileLogged = true;
  };

  $scope.updateProfile = function( profileObj, $event ) {
    $event.preventDefault();
    $scope.userProfile = userService.getUserProfile();

    for ( var prop in profileObj ) {
      if ( profileObj[ prop ] ) {
        $scope.userProfile[ prop ] = profileObj[ prop ];
      }
    }

    userService.storeUserProfile( $scope.userProfile );
    $scope.goToLandingPage();

    $scope.updateProfileIsActive = false;
    $scope.findFriendsIsActive = false;
    $scope.viewFriendsIsActive = false;
  };

  $scope.viewFriendProfile = function( profileObj, $event ) {
    $event.preventDefault();

    $scope.friendProfile = profileObj;
    $scope.isPersonInUserFriends = false;

    for ( var i = 0; i < $scope.userFriends.length; i++ ) {
      if ( $scope.userFriends[ i ].name === profileObj.name ) {
          $scope.isPersonInUserFriends = true;
      }
    }

    $scope.viewStates.showAllOtherViewsTopNavBar = true;
    $scope.viewStates.showInitialPageTopNavBar = false;
    $scope.viewStates.showLandingPageTopNavBar = false;

    $scope.viewStates.showFriendProfileViewLeftSide = true;
    $scope.viewStates.showInitialViewLeftSide = false;
    $scope.viewStates.showUserProfileViewLeftSide = false;

    $scope.viewStates.showFriendProfileViewRightSide = true;
    $scope.viewStates.showUpdateProfileViewRightSide = false;
    $scope.viewStates.showInitialViewRightSide = false;
    $scope.viewStates.showLandingPageRightSide = false;
    $scope.viewStates.showFriendsViewRightSide = false;
    $scope.viewStates.showSearchForNewFriendsRightSide = false;
  };

  $scope.addFriend = function( profileObj ) {
    userService.addFriendToUserFriends( $scope.friendProfile );
    $scope.isPersonInUserFriends = true;
  };

  $scope.removeFriend = function( profileObj ) {
    userService.removeFriendFromUserFriends( $scope.friendProfile );
    $scope.isPersonInUserFriends = false;
  };

} )
