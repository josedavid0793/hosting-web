$(document).ready(function(){
	$('.popup').delay(4000).fadeIn(500);
	$('.popup .cerrar').click(function(){
		$('.popup').fadeOut();
	})


   /* $('#tab-uno').addClass("active");
	$('#hosting-dos').fadeOut();
	$('#hosting-tres').fadeOut();

	$('#tab-dos').click(function(){

		$('#hosting-uno').fadeOut(10);
		$('#hosting-tres').fadeOut(10);
		$('#hosting-dos').fadeIn(10);
		$('#tab-dos').addClass("active");
		$('#tab-uno').removeClass("active");
		$('#tab-tres').removeClass("active");
	})



	$('#tab-uno').click(function(){

		$('#hosting-uno').fadeIn(10);
		$('#hosting-tres').fadeOut(10);
		$('#hosting-dos').fadeOut(10);
		$('#tab-dos').removeClass("active");
		$('#tab-uno').addClass("active");
		$('#tab-tres').removeClass("active");
	})

	$('#tab-tres').click(function(){

		$('#hosting-uno').fadeOut(10);
		$('#hosting-tres').fedeIn(10);
		$('#hosting-dos').fadeOut(10);
		$('#tab-dos').removeClass("active");
		$('#tab-uno').removeClass("active");
		$('#tab-tres').addClass("active");
	})*/



	$('.menu-icon').on('click',function(){
		$('nav').slideToggle();
	})
})