(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    // $('.content).not('.static').hide();
    $('.content).hide();
    // $('#home-page').fadeIn();
    // $('.link a').css({color:'white'});
    // $('#home-link').css({color:'grey'});
  };

  module.homeController = homeController;
})(window);
