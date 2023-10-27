// nav drop-down

$(".item").on('click', function() { 
    if($(this).next(".submenu").is(':visible')) {
        $(this).children(".item img").removeClass("active");
        $(this).next(".submenu").slideUp(600);
    } else {
        $(".item img").removeClass("active");
        $(".submenu").slideUp(600);        
        $(this).children(".item img").addClass("active");
        $(this).next(".submenu").slideDown(600);
        $(this).next(".submenu").css("display", "flex");
    } 
});

// side-pane

$(document).ready(function() {
    $(".item").click(function() { 
        if($(this).next(".sublist").is(':visible')) {
            $(this).children(".arrow").removeClass("active");
            $(this).next(".sublist").slideUp(600);
        } else {
            $(".arrow").removeClass("active");
            $(".sublist").slideUp(600);        
            $(this).children(".arrow").addClass("active");
            $(this).next(".sublist").slideDown(600);
            $(this).next(".sublist").css("display", "flex");
        } 
    });
    
    $(".hamburger").click(function() {
        $(".side-pane").css("display", "flex");
        if(screen.width >= 768) {
            $(".side-pane").animate({width: '30vw', padding: '2rem 1.5rem'}, 600);
            $(".side-pane").css("box-shadow", '-500px 0 10px 500px #000b');
        } else if(screen.width <= 400) {
            $(".side-pane").animate({width: '60vw', padding: '1rem 1.5rem'}, 600);
            $(".side-pane").css("box-shadow", '-200px 0 10px 200px #000b');
        } else {
            $(".side-pane").animate({width: '60vw', padding: '1.5rem 1.5rem'}, 600);
            $(".side-pane").css("box-shadow", '-350px 0 10px 350px #000b');
        }
    })
    
    $(".close").click(function() {
        if(screen.width >= 768) {
            $(".side-pane").animate({width: '0px', padding: '2rem 0'}, 600);
            setTimeout(() => {
                $(".side-pane").css("display", "none");
                clearTimeout();
            }, 600)
        } else if(screen.width <= 400) {
            $(".side-pane").animate({width: '0px', padding: '1rem 0'}, 600);
            setTimeout(() => {
                $(".side-pane").css("display", "none");
                clearTimeout();
            }, 600)
        } else {
            $(".side-pane").animate({width: '0px', padding: '1.5rem 0'}, 600);
            setTimeout(() => {
                $(".side-pane").css("display", "none");
                clearTimeout();
            }, 600)
        }
    })
    
    $(document).on('mousewheel touchmove resize', function() {
        $(".side-pane").css("height", screen.availHeight + window.scrollY);
    })
})
