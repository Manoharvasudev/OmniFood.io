$(document).ready(function(){
   
    //stikcy navigation
    $(".js--section-features").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px'
    });

    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

    //scroll on buttons
    $(".js--scroll-to-plans").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 2000);
    });

    $(".js--scroll-to-start").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1500);
    });


    //navigation scrolling

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

    //animations on scroll

    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated animate__fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated animate__fadeInUp");
    }, {
        offset: "50%"
    });

    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated animate__headShake");
    }, {
        offset: "50%"
    });

    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated animate__pulse");
    }, {
        offset: "50%"
    });

    //responsive navigation

    $(".js--nav-icon").click(function(){
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200);

        if(icon.hasClass("ion-ios-menu")){
            icon.addClass("ion-ios-close");
            icon.removeClass("ion-ios-menu");
        }
        else{
            icon.removeClass("ion-ios-close");
            icon.addClass("ion-ios-menu");
        }



        //<i class="icon ion-ios-close"></i>
    })

});
