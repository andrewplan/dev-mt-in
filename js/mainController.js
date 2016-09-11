angular.module( 'dmSocialApp' ).controller( 'mainController', function( $scope, mainService ) {

  $scope.showInitialPageTopNavBar = true;
  $scope.showLandingPageTopNavBar = false;
  $scope.showAllOtherViewsTopNavBar = false;

  $scope.showInitialViewLeftSide = true;
  $scope.showMyProfileViewLeftSide = false;
  $scope.showFriendProfileViewLeftSide = false;

  $scope.showInitialViewRightSide = true;
  $scope.showLandingPageRightSide = false;
  $scope.showFriendProfileViewRightSide = false;
  $scope.showFriendsViewRightSide = false;
  $scope.showSearchForNewFriendsRightSide = false;
  $scope.showUpdateProfileRightSide = false;

  $scope.myProfile = {};

  $scope.viewFriendsIsActive = false;
  $scope.findFriendsIsActive = false;
  $scope.updateProfileIsActive = false;

  $scope.isUserProfileLogged = false;

  $scope.goToViewFriends = function() {
    $scope.showAllOtherViewsTopNavBar = true;
    $scope.showInitialPageTopNavBar = false;
    $scope.showLandingPageTopNavBar = false;

    $scope.showMyProfileViewLeftSide = true;
    $scope.showInitialViewLeftSide = false;
    $scope.showFriendProfileViewLeftSide = false;

    $scope.showFriendsViewRightSide = true;
    $scope.showInitialViewRightSide = false;
    $scope.showLandingPageRightSide = false;
    $scope.showFriendProfileViewRightSide = false;
    $scope.showSearchForNewFriendsRightSide = false;
    $scope.showUpdateProfileRightSide = false;

    $scope.viewFriendsIsActive = true;
    $scope.findFriendsIsActive = false;
    $scope.updateProfileIsActive = false;

  };

  $scope.goToFindFriends = function() {
    $scope.showAllOtherViewsTopNavBar = true;
    $scope.showInitialPageTopNavBar = false;
    $scope.showLandingPageTopNavBar = false;

    $scope.showMyProfileViewLeftSide = true;
    $scope.showInitialViewLeftSide = false;
    $scope.showFriendProfileViewLeftSide = false;

    $scope.showSearchForNewFriendsRightSide = true;
    $scope.showInitialViewRightSide = false;
    $scope.showLandingPageRightSide = false;
    $scope.showFriendProfileViewRightSide = false;
    $scope.showFriendsViewRightSide = false;
    $scope.showUpdateProfileRightSide = false;

    $scope.findFriendsIsActive = true;
    $scope.viewFriendsIsActive = false;
    $scope.updateProfileIsActive = false;
  };

  $scope.goToUpdateProfile = function() {
    $scope.showAllOtherViewsTopNavBar = true;
    $scope.showInitialPageTopNavBar = false;
    $scope.showLandingPageTopNavBar = false;

    $scope.showMyProfileViewLeftSide = true;
    $scope.showFriendProfileViewLeftSide = false;
    $scope.showInitialViewLeftSide = false;

    $scope.showUpdateProfileRightSide = true;
    $scope.showInitialViewRightSide = false;
    $scope.showLandingPageRightSide = false;
    $scope.showFriendProfileViewRightSide = false;
    $scope.showFriendsViewRightSide = false;
    $scope.showSearchForNewFriendsRightSide = false;

    $scope.updateProfileIsActive = true;
    $scope.findFriendsIsActive = false;
    $scope.viewFriendsIsActive = false;
  };

  $scope.goToLandingPage = function() {
    $scope.showLandingPageTopNavBar = true;
    $scope.showAllOtherViewsTopNavBar = false;
    $scope.showInitialPageTopNavBar = false;

    $scope.showMyProfileViewLeftSide = true;
    $scope.showFriendProfileViewLeftSide = false;
    $scope.showInitialViewLeftSide = false;

    $scope.showLandingPageRightSide = true;
    $scope.showUpdateProfileRightSide = false;
    $scope.showInitialViewRightSide = false;
    $scope.showFriendProfileViewRightSide = false;
    $scope.showFriendsViewRightSide = false;
    $scope.showSearchForNewFriendsRightSide = false;

  }

  $scope.initialPageSaveChanges = function( profileObj, $event ) {
    $event.preventDefault();
    $scope.myProfile = profileObj;
    mainService.storeMyProfile( profileObj );
    $scope.goToLandingPage();
    $scope.isUserProfileLogged = true;
  };

  $scope.updateProfile = function( profileObj, $event ) {
    $event.preventDefault();
    $scope.myProfile = mainService.getMyProfile();

    for ( var prop in profileObj ) {
      if ( profileObj[ prop ] ) {
        $scope.myProfile[ prop ] = profileObj[ prop ];
      }
    }

    mainService.storeMyProfile( $scope.myProfile );
    $scope.goToLandingPage();
  };

} )
