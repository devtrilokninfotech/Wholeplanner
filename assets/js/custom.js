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



/*********** On click → show all badges - Profile Page ***********/
$(document).ready(function () {
    $(".more-badge").click(function () {
        $(this).closest(".cm-tags-js").find(".extra-badge").fadeIn(40);
        $(this).hide();
    });
});
/*********** On click → show all badges - Profile Page ***********/



/*********** Menu toggle btn on card - Common JS ***********/
$(document).ready(function () {

    // Toggle dropdown on click
    $(".menu-toggle-btn").click(function (e) {
        e.stopPropagation();
        var $dropdown = $(this).siblings(".card-dropdown");
        // Close all other open dropdowns first
        $(".card-dropdown").not($dropdown).removeClass("open");
        $dropdown.toggleClass("open");
    });

    // Close dropdown when clicked outside
    $(document).click(function () {
        $(".card-dropdown").removeClass("open");
    });
})
/*********** Menu toggle btn on card - Common JS ***********/
