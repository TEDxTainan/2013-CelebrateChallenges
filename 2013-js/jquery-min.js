$(function(){
    $(".nav1").click(function(e) {
         e.preventDefault();
        var i = $(this).children('a').attr("href");
        $('html, body').animate({
            scrollTop: $(i).offset().top
        }, 400);
    });
});

jQuery(document).ready(function(){

     $("body").click(function(event) {
        $('.bubble').css("-webkit-transform" , "");
        $('.title-preview').show();
        $('.expanded-content').css({ display: "none",  opacity: "1"}, 200);
        $('.bubble').css("z-index" , "5");
        event.stopPropagation();
    });

    $(".bubble").click(function(event) {
		  $('.bubble').css("-webkit-transform" , "");
        $('.title-preview').show();
        $('.expanded-content').css({ display: "none",  opacity: "1"}, 200);
        $('.bubble').css("z-index" , "5");
        var i = $(this).find(".expanded-content");
        var j = $(this).find(".title-preview");
        $(this).css("-webkit-transform" , "scale(1)");
        $(this).css("z-index" , "999999");
        $(j).hide();
        $(i).css({ display: "table-cell",  opacity: "1"}, 200);
        event.stopPropagation();
    });
	
	$('.expanded-content').mouseover(function() {
		$('.expanded-intro').css({ display: "block",  opacity: "1"}, 200);
		 $(this).css("background" , "white");
		  $('.expanded-title').hide();
	});
	$('.expanded-content').mouseleave(function() {
		$('.expanded-intro').css({ display: "none",  opacity: "1"}, 200);
		 $(this).css("background" , "");
		  $('.expanded-title').show();
	});
  

});




