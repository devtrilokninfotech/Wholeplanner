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


/*********** Sidebar toggle JS Start ***********/

    $(".sidebar-toggle").click(function (event) {
        event.preventDefault(); // Prevent default anchor action
        $("body").toggleClass("sidebar-show-hide");
    });

/*********** Sidebar toggle JS End ***********/