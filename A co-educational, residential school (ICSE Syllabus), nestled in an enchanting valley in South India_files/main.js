!function(e){"use strict";e(function(){e(".popup-youtube").length&&e(".popup-youtube").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(".elv-zoom-single").length&&e(".elv-zoom-single").magnificPopup({type:"image"}),e(".zoom-gallery").length&&e(".zoom-gallery").each(function(){e(this).magnificPopup({delegate:"a.gallery-zoom",type:"image",gallery:{enabled:!0}})}),e(".rt-date").length&&e(".rt-date").datetimepicker({format:"Y-m-d",timepicker:!1}),e(".rt-time").length&&e(".rt-time").datetimepicker({format:"H:i",datepicker:!1}),e("#top-search-form").on("click","a.search-button",function(a){return a.preventDefault(),e(this).prev("input.search-input").animate({width:["toggle","swing"],height:["toggle","swing"],opacity:"toggle"},500,"linear"),!1}),e(".loadmore").on("click","a",function(a){a.preventDefault();var t=e(this),n=t.parents(".menu-list-wrapper").find(".menu-list").find(".menu-item.hidden").slice(0,4);return n.length?(n.animate({opacity:0}),n.promise().done(function(){n.removeClass("hidden"),n.show().animate({opacity:1},1e3)})):t.text("No more item to display"),!1})}),e("nav#dropdown").meanmenu({siteLogo:"<a href='index.php' class='logo-mobile-menu'><img src='img/mobile-logo.png' /></a>"}),(new WOW).init(),e.scrollUp({scrollText:'<i class="fa fa-arrow-up"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"}),e("#additional-menu-area").on("click","span.side-menu-trigger",function(){var a=e(this),t=e(this).parents("body").find(">#wrapper");a.hasClass("open")?(document.getElementById("mySidenav").style.width="0",a.removeClass("open").find("i.fa").removeClass("fa-times").addClass("fa-bars"),t.removeClass("open")):(t.addClass("open"),a.addClass("open").find("i.fa").removeClass("fa-bars").addClass("fa-times"),document.getElementById("mySidenav").style.width="280px")}),e("#mySidenav").on("click",".closebtn",function(a){a.preventDefault();e(this);e(this).parents("body").find(">#wrapper").removeClass("open"),document.getElementById("mySidenav").style.width="0",e("#additional-menu-area span.side-menu-trigger").removeClass("open").find("i.fa").removeClass("fa-times").addClass("fa-bars")}),void 0!==e.fn.knob&&e(".knob.knob-nopercent").each(function(){var a=e(this),t=a.attr("data-rel");a.knob({draw:function(){}}),a.appear(function(){e({value:0}).animate({value:t},{duration:2e3,easing:"swing",step:function(){a.val(Math.ceil(this.value)).trigger("change")}})},{accX:0,accY:-150})}),e(".request-form-select select.select2").length&&e(".request-form-select select.select2").select2({theme:"classic",dropdownAutoWidth:!0,width:"100%"}),e(window).on("load",function(){var a=e("#blog-gallery");if(a.length)var t=a.imagesLoaded(function(){t.isotope({itemSelector:".blog-item",masonry:{columnWidth:".blog-item"}})});e("#preloader").fadeOut("slow",function(){e(this).remove()});var n=e("#isotope-container");if(n.length>0){var i=n.find(".featuredContainer").isotope({filter:"*",animationOptions:{duration:750,easing:"linear",queue:!1}});n.find(".isotope-classes-tab").on("click","a",function(){var a=e(this);a.parent(".isotope-classes-tab").find("a").removeClass("current"),a.addClass("current");var t=a.attr("data-filter");return i.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})}var s=e("#rt-testimonial-slider-wrap");s.length&&(s.find(".testimonial-sliders").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,asNavFor:".testimonial-carousel"}),s.find(".testimonial-carousel").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".testimonial-sliders",dots:!1,arrows:!0,prevArrow:!0,nextArrow:!0,centerMode:!0,centerPadding:"0px",focusOnSelect:!0}))});var a=e(".counter");a.length&&a.counterUp({delay:50,time:5e3});var t=e("#faq-accordion");t.on("show.bs.collapse",function(a){t.find(".panel-heading").removeClass("active"),e(a.target).parents(".panel").find(".panel-heading").addClass("active"),t.find(".panel-collapse.collapse").slideUp("slow",function(){e(this).removeClass("in").css("display","")})});var n=e("#accordion");n.children(".panel").children(".panel-collapse").each(function(){e(this).hasClass("in")&&e(this).parent(".panel").children(".panel-heading").addClass("active")}),n.on("show.bs.collapse",function(a){e(a.target).prev(".panel-heading").addClass("active")}).on("hide.bs.collapse",function(a){e(a.target).prev(".panel-heading").removeClass("active")});var i=e("#contact-form");i.length&&i.validator().on("submit",function(a){var t=e(this),n=i.find(".form-response");if(!a.isDefaultPrevented())return e.ajax({url:"vendor/php/contact-process.php",type:"POST",data:i.serialize(),beforeSend:function(){n.html("<div class='alert alert-info'><p>Loading ...</p></div>")},success:function(e){"success"==e?(t[0].reset(),n.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>")):n.html("<div class='alert alert-success'><p>"+e+"</p></div>")}}),!1;n.html("<div class='alert alert-success'><p>Please select all required field.</p></div>")});var s=e("#request-form");if(s.length&&s.validator().on("submit",function(a){var t=e(this),n=s.find(".form-response");if(!a.isDefaultPrevented())return e.ajax({url:"vendor/php/request-process.php",type:"POST",data:s.serialize(),beforeSend:function(){n.html("<div class='alert alert-info'><p>Loading ...</p></div>")},success:function(e){"success"==e?(t[0].reset(),n.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>")):n.html("<div class='alert alert-success'><p>"+e+"</p></div>")}}),!1;n.html("<div class='alert alert-success'><p>Please select all required field.</p></div>")}),e("#quantity-holder").on("click",".quantity-plus",function(){var a=e(this).parents(".quantity-holder").find("input.quantity-input"),t=parseInt(a.val(),10);e.isNumeric(t)&&t>0?(t+=1,a.val(t)):a.val(t)}).on("click",".quantity-minus",function(){var a=e(this).parents(".quantity-holder").find("input.quantity-input"),t=parseInt(a.val(),10);e.isNumeric(t)&&t>=2?(t-=1,a.val(t)):a.val(1)}),e(".fn-carousel").each(function(){var a=e(this),t=a.data("loop"),n=a.data("items"),i=a.data("margin"),s=(a.data("stage-padding"),a.data("autoplay")),o=a.data("autoplay-timeout"),r=a.data("smart-speed"),l=a.data("dots"),d=a.data("nav"),c=a.data("nav-speed"),p=a.data("r-x-small"),m=a.data("r-x-small-nav"),u=a.data("r-x-small-dots"),g=a.data("r-x-medium"),h=a.data("r-x-medium-nav"),f=a.data("r-x-medium-dots"),v=a.data("r-small"),y=a.data("r-small-nav"),w=a.data("r-small-dots"),b=a.data("r-medium"),C=a.data("r-medium-nav"),k=a.data("r-medium-dots"),x=a.data("center");a.owlCarousel({loop:!!t,items:n||4,lazyLoad:!0,margin:i||0,autoplay:!!s,autoplayTimeout:o||1e3,smartSpeed:r||250,dots:!!l,nav:!!d,navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],navSpeed:!!c,center:!!x,responsiveClass:!0,responsive:{0:{items:p||1,nav:!!m,dots:!!u},480:{items:g||2,nav:!!h,dots:!!f},768:{items:v||3,nav:!!y,dots:!!w},992:{items:b||5,nav:!!C,dots:!!k}}})}),e(window).on("load resize",function(){var a=e(window).height();e("a.logo-mobile-menu").outerHeight();a-=50,e(".mean-nav > ul").css("height",a+"px");var t=e("#sticker");if(t.parent(".header-one-style").length){var n=t.prev(".header-top-bar").outerHeight()+t.outerHeight();e("#wrapper").css("padding-top",n+"px")}}),e(window).on("scroll",function(){var a,t,n=e("#sticker"),i=e(".wrapper"),s=n.outerHeight(),o=e(window).scrollTop(),r=e(window).width(),l=n.parent(".header-one-style"),d=n.parent(".header-two-style"),c=n.parent(".header-three-style"),p=n.parent(".header-four-style"),m=n.parent(".header-five-style"),u=n.parent(".header-six-style");r>767&&(i.css("padding-top",""),l.length||u.length?t=(a=n.prev(".header-top-bar")).outerHeight():d.length?(a=d,t=d.outerHeight()-35):p.length?t=(a=n.prev(".header-area")).outerHeight():(m.length||c.length)&&(t=1),o>=t?(n.addClass("stick"),(l.length||p.length||u.length)&&a.css("margin-bottom",s+"px")):(n.removeClass("stick"),(l.length||p.length||u.length)&&a.css("margin-bottom",0)))}),e(".spinner .btn:first-of-type").on("click",function(){e(".spinner input").val(parseInt(e(".spinner input").val(),10)+1)}),e(".spinner .btn:last-of-type").on("click",function(){e(".spinner input").val(parseInt(e(".spinner input").val(),10)-1)}),e(function(){var e=document.getElementById("price-range-filter");if(e){noUiSlider.create(e,{start:[20,80],connect:!0,range:{min:0,max:100},format:wNumb({decimals:0})});var a=document.getElementById("price-range-min"),t=document.getElementById("price-range-max");e.noUiSlider.on("update",function(e,n){n?t.innerHTML="$"+e[n]:a.innerHTML="$"+e[n]})}}),e("#googleMap").length){google.maps.event.addDomListener(window,"load",function(){var e={zoom:15,scrollwheel:!1,center:new google.maps.LatLng(-37.81618,144.95692),styles:[{stylers:[{saturation:-100}]}]},a=new google.maps.Map(document.getElementById("googleMap"),e);new google.maps.Marker({position:a.getCenter(),animation:google.maps.Animation.BOUNCE,icon:"img/map-marker.png",map:a})})}}(jQuery);
