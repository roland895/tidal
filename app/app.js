(function(angular) {
  'use strict';
  var tidalApp = angular.module('tidalApp',[]);
  //CONTROLLERS
  tidalApp.controller('mainController',["$scope", function($scope) {
    this.slide = {
      name: "Future",
      txt:"Kanye West is our one and only god.",
      img:"img/future.png",
      verb:"LISTEN NOW"
    };
    this.slide2 = {
      name:"Experience DS2 Live",
      txt:"All hail Kanye West: Our lord and saviour.",
      img:"img/Brush.png",
      verb:"BUY TICKETS"
    }
    this.slide3 = {
      name:"Watch exclusive videos.",
      txt:"Praise to Kayne",
      img:"img/Screenshot.png",
      verb:"WATCH VIDEOS"
    }
    $scope.features = [
      this.slide,
      this.slide2,
      this.slide3
    ]
    $scope.nav = [
      {item: "Something", href: "#"},
      {item: "Web Player", href: "#"}
    ]
  }]);
  function albumFeatureController() {
  }
  tidalApp.component('albumFeature', {
      templateUrl: "templates/albumFeature.html",
      controller: albumFeatureController,
      bindings:{
        name: '=',
        img:'=',
        txt:'=',
        verb:'='
      }
    }
    
    );
  function popupSectionController(){
    var id = this.id;
    console.dir(this);
    var waypoint = new Waypoint({
      element: document.getElementById(id),
      handler: function(direction) {
        this.elemtent.className="toggle-bounce";
      },
      offset: 100
    });
  };
  tidalApp.component('popUpSection', {
      templateUrl: "templates/popUpSectionPhones.html",
       controller: popupSectionController,
      bindings:{
        id: "@"
      }
  });

    
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('button').toggleClass("open");
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('button').toggleClass("open");
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
})(window.angular);