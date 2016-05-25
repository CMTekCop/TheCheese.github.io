$(document).ready(function() {
    //menu opener
    $("#navbarBottom").hide();
    $("#navbarTopLi1").click(function() {
        var x = window.innerHeight;
        $("#navbarBottom").css("height", x);
        $("#navbarBottom").slideToggle("slow");
    });
    
    //image switcher
    $(function(){
       function slideSwitch(){
           var $active = $('#slideshow img.active');
           var $next = $active.next();

            if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

            var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');

           $active.addClass('last-active');

           $next.css({opacity: 0.0})
             .addClass('active')
             .animate({opacity:1.0}, 1000, function() {
                  $active.removeClass('active last-active');
             });
      }
      setInterval(slideSwitch, 5000 );
    });
    
    //page refitter when view on narrow devices
    $(function(){
        function shrink() {
            $("#leftSide").css("width","100%");
            $("#rightSide").css("width","100%");
            $("#bottomMid").css("width","100%");
            $("#bottomRight").css("width","100%");
            $("#slideshow img").css("min-width","100%");
            $("#slideshow img").css("max-width","100%");
            $("#slideshow img").css("width","100%");
        }
        function grow() {
            $("#leftSide").css("width","30%");
            $("#rightSide").css("width","70%");
            $("#bottomMid").css("width","60%");
            $("#bottomRight").css("width","40%");
            $("#slideshow img").css("min-width","70%");
            $("#slideshow img").css("max-width","70%");
            $("#slideshow img").css("width","70%");
        }
        function resizeCheck() {
            if(window.innerWidth<800) {
                shrink();
            }
            else {
                grow();
            }
        }
        setInterval(resizeCheck, 10);
    });
    
});
