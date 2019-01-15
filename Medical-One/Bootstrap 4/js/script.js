console.log("usman");


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav2 = $(".navbar-brand");
        $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav2.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav3 = $(".navbar-nav");
        $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav3.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-light .navbar-nav .nav-link");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".logo1");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-toggler");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});



/*================== Read More Text ==================*/
$(function () {
    var showChar = 250;
    var moretext = "READ MORE";
    var lesstext = " READ LESS";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display:block;margin-top:20px"><span>' + hide_content +
                '</span><a href="" class="morelinks read-more mt-30 arrow-outline" style="display:block">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 180;
    var moretext = "more details &nbsp;&nbsp; &#x2192;";
    var lesstext = " less details &nbsp;&nbsp; &#x2190;";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-content service-desc"><span>' + hide_content +
                '</span><a href="" class="morelink more-details arrow-outline link-style mt-20">' + moretext + '</a>'
                + '</span> ' + '<span></span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
//Custom

/*===================== Load More Images ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Owl Carousel =======================*/

/*===================== Js Ranks Counter ====================*/

/*=================== Change Bannner on Click on Banner =================== */

/*==================== 3D Slider Java Script ====================*/

/*============= Applying the class on scrolling ==============*/
//$(window).scroll(function () {
//    var scroll = $(window).scrollTop();

//    //>=, not <=
//    if (scroll >= 50) {
//        //clearHeader, not clearheader - caps H
//        $("nav").removeClass("pt-45");
//    }
//    if (scroll == 0) {
//        $("nav").addClass("pt-45 ");
//    }
//});
