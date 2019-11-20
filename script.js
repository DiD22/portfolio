// JavaScript Document

		// MOBILE / PC
//		var filter = "win16|win32|win64|mac|macintel";
//		if ( navigator.platform ) {
//			if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
//				//mobile
//				alert('mobile 접속. 구현되지 않았습니다.');
//			} else {
//				//pc
//				alert('pc 접속');
//			}
//		}
		



		


		// ENTER HOVER

		$(function(){
			"use strict";
			$(".enter").mouseover(function(){
				$(".enter").css("animation-name","enterHover");
			});
		});	
	
	
		$(function(){
			"use strict";
			$(".enter").mouseout(function(){
				$(".enter").css("animation-name","enterOut");
			});
		});	
		
		


		
		//INTRO
		$(".enter").click(function(){
			
			"use strict";
			
			$("#intro").css("display","none");
			$("body").css("overflow-y","scroll");
			$("body").css("overflow-x","scroll");
		});
//		//INTRO
//		$(".enter").click(function(){
//			$("#intro").hide();
//		});
		
		
		
		
		
		//TEXT
//		var str = "text효과임시코딩"
//		var c = 0;
//		setInterval(function(){
//			if(c<10)
//				$(".typing").append(str[c]);
//			c++;
//		}, 150);
		



		

		//LOGO RELOAD
		$("h1").click(function(){
			"use strict";	  
			location.reload();
		});






		
		
		//TOP btn\
		$(function() {
			
			"use strict";
			
		  $(window).scroll(function() {
			if ($(this).scrollTop() > 250) {
			  $('#topBtn').fadeIn();
			} else {
			  $('#topBtn').fadeOut();
			}
		  });

		  $("#topBtn").click(function() {
			$('html, body').animate({
			  scrollTop : 0
			}, 500);
			return false;
		  });
		});
		
		
		
		//MENU BTN
//		$('.icon').click(function(){
//			
//			"use strict";
//			
//			$('.icon').toggleClass('active');
//		});


		$(document).ready(function(){
			"use strict";

				$('.aboutBtn').click(function(){

					var offset = $('#about').offset();

				$('html').animate({scrollTop : offset.top}, 500);

			});

		});

		$(document).ready(function(){
			"use strict";

				$('.skillBtn').click(function(){

					var offset = $('#skill').offset();

				$('html').animate({scrollTop : offset.top}, 500);

			});

		});


		$(document).ready(function(){
			"use strict";

				$('.workBtn').click(function(){

					var offset = $('#work').offset();

				$('html').animate({scrollTop : offset.top}, 500);

			});

		});
		
		$(document).ready(function(){
			"use strict";

				$('.contactBtn').click(function(){

					var offset = $('#contact').offset();

				$('html').animate({scrollTop : offset.top}, 500);

			});

		});
		
		
		
		//HINDE NAV
		
		//(1)
//		function open_chatroom(){
//		var windowWidth = $(window).width();
//		if(windowWidth < 300) {
//			$(".nav").fadeOut();
//		}
//		else{
//			$(".nav").fadeIn();
//		}}
		
		//(2)
//		if ($(window).width() < 700) {
//			  $(".nav").fadeOut();
//			} else {
//			  $('.nav').fadeIn();
//			}
		
		//(3)
		$(window).resize(function(){
			
			"use strict";
			
			if($(window).width() < 720) {
				$(".nav").fadeOut();
			}else {
				$(".nav").fadeIn();
			}
		});







//	$(window).resize(function(){
//			
//			"use strict";
//			
//		var viewheight = $(".conup").height;
//		
//			if($(window).height(viewheight)) {
//				$("#contect").css("display","block");
//			}
//		});












