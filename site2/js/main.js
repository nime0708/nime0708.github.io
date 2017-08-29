$(function () {
    
     
    "use strict";

    var itemsQ=$("#carousel .item").length;
    var wheight=$(window).height();
    var randNo=Math.floor(Math.random()*itemsQ);
    
    $("#carousel .item").eq(randNo).addClass("active");
    $(".fullheight").css("height",wheight);
    $("#carousel .item img").each(function(){
        var src=$(this).attr("src");
        $(this).parent().css("background-image","url("+src+")");
        $(this).remove();
    });
    
    $(window).resize(function(){
        $(".fullheight").css("height",$(window).height());
    });
    
    var topoffset = 50;
    $("body").scrollspy({
        target: "header .navbar"
        , offset: topoffset
    });
      var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#carousel') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }

    $('#navbar-col').on('activate.bs.scrollspy', function () {
       var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#carousel') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
    });

    function addNavClass() {
        var hash = $(document).find('li.active a').attr("href");
        console.log(hash);
        if (hash != "#carousel") {
            $("header nav").addClass("inbody");
        } else {
            $("header nav").removeClass("inbody");
        }
    }
    
    
    
    
    /*Use smooth scrolling when clicking on navigation*/
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

for(var i=0;i<itemsQ;i++){
    var classVal="active";
    if(i!=randNo){
        classVal="";
    }
    var ins="<li class='"+classVal+"' data-target='#carousel' data-slide-to='"+i+"'>";
    $("#carousel ol").append(ins);
}
    
$("#carousel").carousel({
    interval:'5000',
    pause:false
});    
    
});