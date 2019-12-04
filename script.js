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
				$(".introtext h2").css("animation-name","h2ani");
				$(".introS").css("animation-name","tani");
			});
		});	
	
	
		$(function(){
			"use strict";
			$(".enter").mouseout(function(){
				$(".introtext h2").css("animation-name","h2aniO");
				$(".introS").css("animation-name","taniO");
			});
		});	
		
		


		
		//INTRO
		$(".enter").click(function(){
			
			"use strict";
			
			$("#intro").css("display","none");
			$("body").css("overflow-y","scroll");
			$("body").css("overflow-x","scroll");
			
			
			$(".born").css("animation-name","bornIn");
			$(".popol").css("animation-name","fadeInUph2");
			$(".hello p").css("animation-name","fadeInUpp");
			
			
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
			if ($(this).scrollTop() > 650) {
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
		
//SCROLL
$(window).scroll(function(){
	"use strict";
	
	if ($(this).scrollTop() < 250) {
		$('#scrollani').fadeIn();
	} else {
		$('#scrollani').fadeOut();
	}
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

				$('html').animate({scrollTop : offset.top+100}, 500);

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





// WORK BTN
//	$(document).ready(function(){
//				"use strict";
//
//				$('.Dcon').click(function(){
//
//				var offset = $('.Drawing').offset();
//
//				$('html').animate({scrollTop : offset.top}, 500);
//					$(".Drawing").css("display","block");
//					$(".UIUX").css("display","none");
//					$(".Graphic").css("display","none");
//		});
//	});
//	$(document).ready(function(){
//				"use strict";
//
//				$('.Ucon').click(function(){
//
//				var offset = $('.UIUX').offset();
//
//				$('html').animate({scrollTop : offset.top}, 500);
//					$(".Drawing").css("display","none");
//					$(".UIUX").css("display","block");
//					$(".Graphic").css("display","none");
//		});
//	});
//	$(document).ready(function(){
//				"use strict";
//
//				$('.Gcon').click(function(){
//
//				var offset = $('.Graphic').offset();
//
//				$('html').animate({scrollTop : offset.top}, 500);
//					$(".Drawing").css("display","none");
//					$(".UIUX").css("display","none");
//					$(".Graphic").css("display","block");
//		});
//	});

//	var offset = $('.UIUX').offset();
//	$('html').animate({scrollTop : offset.top}, 500);


$(function(){
	"use strict";
	$(".Dcon").click(function(){
		$(".Drawing").css("display","block");
		$(".UIUX").css("display","none");
		$(".Graphic").css("display","none");
	});
});	

$(function(){
	"use strict";
	$(".Ucon").click(function(){
		$(".Drawing").css("display","none");
		$(".UIUX").css("display","block");
		$(".Graphic").css("display","none");
	});
});

$(function(){
	"use strict";
	$(".Gcon").click(function(){
		$(".Drawing").css("display","none");
		$(".UIUX").css("display","none");
		$(".Graphic").css("display","block");
	});
});



// IMG POPUP
$(function(){
	"use strict";
	$(".cgvWeb").click(function(){
		$(".cgvWebImg").css("display","block");
		$("#about").css("display","none");
		$("#skill").css("display","none");
		$("#work").css("display","none");
		$("#contact").css("display","none");
		$("#backBtn").css("display","block");
	});
});

$(function(){
	"use strict";
	$(".cgvApp").click(function(){
		$(".cgvAppImg").css("display","block");
		$("#about").css("display","none");
		$("#skill").css("display","none");
		$("#work").css("display","none");
		$("#contact").css("display","none");
		$("#backBtn").css("display","block");
	});
});

$(function(){
	"use strict";
	$(".vegetable").click(function(){
		$(".vegBanner").css("display","block");
		$("#about").css("display","none");
		$("#skill").css("display","none");
		$("#work").css("display","none");
		$("#contact").css("display","none");
		$("#backBtn").css("display","block");
	});
});

// IMG BACK BTN
	//APP
	$(function(){
		"use strict";
		$("#backBtn").click(function(){
			$(".cgvAppImg").css("display","none");
			$("#about").css("display","block");
			$("#skill").css("display","block");
			$("#work").css("display","block");
			$("#contact").css("display","block");
			$("#backBtn").css("display","none");
		});
	});

	//WEB
	$(function(){
		"use strict";
		$("#backBtn").click(function(){
			$(".cgvWebImg").css("display","none");
			$("#about").css("display","block");
			$("#skill").css("display","block");
			$("#work").css("display","block");
			$("#contact").css("display","block");
			$("#backBtn").css("display","none");
		});
	});
	
	//VEG
	$(function(){
		"use strict";
		$("#backBtn").click(function(){
			$(".vegBanner").css("display","none");
			$("#about").css("display","block");
			$("#skill").css("display","block");
			$("#work").css("display","block");
			$("#contact").css("display","block");
			$("#backBtn").css("display","none");
		});
	});



	$(document).ready(function(){
			"use strict";

			$('#backBtn').click(function(){

			var offset = $('#work').offset();

			$('html').animate({scrollTop : offset.top}, 500);
		});
	});


// UIUX MOUSE OVER OUT

	//WEB
$(function(){
			"use strict";
			$(".cgvWeb").mouseover(function(){
				$(".webText").css("animation-name","webOver");
				$(".webText > p").css("animation-name","webOverp");
				$(".webText > p").css("display","block");
				$(".cgvWeb > img").css("animation-name","webOverimg");
			});
		});	
		$(function(){
			"use strict";
			$(".cgvWeb").mouseout(function(){
				$(".webText").css("animation-name","webOut");
				$(".webText > p").css("animation-name","webOutp");
				$(".webText > p").css("display","none");
				$(".cgvWeb > img").css("animation-name","webOutimg");
			});
		});

	//APP
$(function(){
			"use strict";
			$(".cgvApp").mouseover(function(){
				$(".appText").css("animation-name","appOver");
				$(".appText > p").css("animation-name","appOverp");
				$(".appText > p").css("display","block");
				$(".cgvApp > img").css("animation-name","appOverimg");
			});
		});	
		$(function(){
			"use strict";
			$(".cgvApp").mouseout(function(){
				$(".appText").css("animation-name","appOut");
				$(".appText > p").css("animation-name","appOutp");
				$(".appText > p").css("display","none");
				$(".cgvApp > img").css("animation-name","appOutimg");
			});
		});

	//GRAHPIC
$(function(){
			"use strict";
			$(".vegetable").mouseover(function(){
				$(".vegetableText").css("animation-name","vegetableOver");
				$(".vegetableText > p").css("animation-name","vegetableOverp");
				$(".vegetableText > p").css("display","block");
				$(".vegetable > img").css("animation-name","vegetableOverimg");
			});
		});	
		$(function(){
			"use strict";
			$(".vegetable").mouseout(function(){
				$(".vegetableText").css("animation-name","vegetableOut");
				$(".vegetableText > p").css("animation-name","vegetableOutp");
				$(".vegetableText > p").css("display","none");
				$(".vegetable > img").css("animation-name","vegetableOutimg");
			});
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