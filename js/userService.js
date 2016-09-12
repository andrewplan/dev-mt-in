angular.module( 'dmSocialApp' ).service( 'mainService', function() {
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

  var userFriends = [
    {
        'name': 'Clem'
      ,	'tagline': 'Enjoy the moment.'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1470784790053-6c2f15489967'
      , 'bio': 'Live it up!'
    } ,
    {
        'name': 'Paul Morley'
      ,	'tagline': 'Hoot'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1469297677538-c7312a64dbe8'
      , 'bio': 'I am not amused.'
    } ,
    {
        'name': 'Allef Vinicius'
      ,	'tagline': '...'
      , 'profileUrl': 'https://images.unsplash.com/photo-1473283297248-4a5c0b5fad7f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=0a962e1b456cb9404b3e1f7cc606602d'
      , 'bio': '...'
    } ,
    {
        'name': 'Jane Garcia'
      ,	'tagline': 'Living for the weekend'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1458662236860-b721a6735660'
      , 'bio': 'Searching for the next great experience.'
    } ,
    {
        'name': 'Ayo'
      ,	'tagline': 'Keep it 100.'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1463453091185-61582044d556'
      , 'bio': 'Life is good.'
    } ,
    {
        'name': 'Cengizhan Konus'
      ,	'tagline': 'Child\'s play'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1463200870069-e707405e5fdf'
      , 'bio': 'I love my toy cars!'
    } ,
    {
        'name': 'Andrew Branch'
      ,	'tagline': 'Play with me!'
      , 'profileUrl': 'https://hd.unsplash.com/photo-1467321628149-d91a2c0c0e6d'
      , 'bio': 'I\'m furry!'
    } ,
  ];

} )
