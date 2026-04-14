$(document).ready(function(){


  /* Password Show Hide Start */
  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash ");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  /* Password Show Hide End */

});