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
    var showChar = 90;
    var moretext = " ...";
    var lesstext = " ... less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinks link-style" >' + moretext + '</a>'
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
    var showChar = 178;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinkss btn btn-more-load link-style mt-45 btn-r-0" style="display:block;" >' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

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

/*===================== Load More Images ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('nav-active');
            $(this).addClass('nav-active');
        });
});
/*======================= Owl Carousel =======================*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.nav-link').addClass('text-white');

        } else {
            $('.nav-link').removeClass('text-white');
        }
    });
});
