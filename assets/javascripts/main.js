$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	// $('.load').delay(1000).fadeOut('fast');
	$('.loader').delay(1000).fadeOut('fast');
});

$(document).ready(function() {
	$('.button-menu-mobile').click(function(event) {
		$('.is_menu').toggleClass('show-button-menu-mobile');
	});

	$('.categories').click(function(event){
		$('.main-menu-mobile').addClass('show-menu-categories');
	});
	$('.menu-categories div').click(function(event){
		$('.main-menu-mobile').removeClass('show-menu-categories');
	});

	var dataMenu = $('.main-menu-mobile').attr('data-menu');
	var arrMenu = $('.this-is-menu a').toArray();
	if (dataMenu == "home") {
		$('.button-menu-mobile').addClass('main-menu-mobile');
		$('.logo').addClass('main-menu-mobile');
	}
	if (dataMenu == "about") {
		$('.button-menu-mobile').addClass('about-menu-mobile');
	}
	var dataIsMenu ="";
	for (var i = 0; i < arrMenu.length; i++) {
		dataIsMenu = $(arrMenu[i]).attr('data-is-menu');
		if (dataMenu == dataIsMenu) {
			$(arrMenu[i]).addClass('active-menu');
		}
	}
	


	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: $('.slide_next'),
		pauseOnHover: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	if(screen.width <= 1024 && screen.width >= 768 || screen.width <= 768){
		$('.this-slider-menu-3').removeClass('slider-menu-3');
	}

	var play_work = 0;
	tl4 = new TimelineMax({paused: true});

	function slide_works(src1,src2,src3, title1, title2, title3, content1, content2, content3, titlesp1, titlesp2, titlesp3){
		tl4.set('.slide-work-1 .img-work img',{attr:{src:src1}}, 0.8);
		tl4.set('.slide-work-2 .img-work img', {attr:{src:src2}}, 0.8);
		tl4.set('.slide-work-3 .img-work img', {attr:{src:src3}}, 0.8);
		tl4.to('.slide-work-1 .content-work > div > article', 0, {text: title1}, 0.6);
		tl4.to('.slide-work-1 .content-work > div:nth-child(1) span', 0, {text: content1}, 0.6);
		tl4.to('.slide-work-1 .content-work > div:nth-child(2)', 0, {text: titlesp1}, 0.6);
		tl4.to('.slide-work-2 .content-work > div > article', 0, {text: title2}, 0.6);
		tl4.to('.slide-work-2 .content-work > div:nth-child(1) span', 0, {text: content2}, 0.6);
		tl4.to('.slide-work-2 .content-work > div:nth-child(2)', 0, {text: titlesp2}, 0.6);
		tl4.to('.slide-work-3 .content-work > div > article', 0, {text: title3}, 0.6);
		tl4.to('.slide-work-3 .content-work > div:nth-child(1) span', 0, {text: content3}, 0.6);
		tl4.to('.slide-work-3 .content-work > div:nth-child(2)', 0, {text: titlesp3}, 0.6);
	}
	if(screen.width <= 1023 && screen.width >= 768 || screen.width <= 768){
		$('.work > div').removeClass('slide-work-1');
		$('.work > div').removeClass('slide-work-2');
		$('.work > div').removeClass('slide-work-3');
	}
	$('.slide_next_work').click(function(event) {
		tl4.clear();
		tl4.to('.slide-work-1 .img-work > article', 0, {transformOrigin:"0% 0%"}, 0);
		tl4.to('.slide-work-1 .img-work > article', 0.8, {scaleY: 1});
		tl4.to('.slide-work-2 .img-work > article', 0, {transformOrigin:"0% 100%"}, 0);
		tl4.to('.slide-work-2 .img-work > article', 0.8, {scaleY: 1}, 0);
		tl4.to('.slide-work-3 .img-work > article', 0, {transformOrigin:"0% 0%"}, 0);
		tl4.to('.slide-work-3 .img-work > article', 0.8, {scaleY: 1}, 0);
		tl4.to('.slide-work-1 .content-work', 0.5, {opacity: 0, y: 30}, 0);
		tl4.to('.slide-work-1 .content-work', 0, {opacity: 0, y: -30}, 0.5);
		tl4.to('.slide-work-2 .content-work', 0.5, {opacity: 0, y: -30}, 0);
		tl4.to('.slide-work-2 .content-work', 0, {opacity: 0, y: 30}, 0.5);
		tl4.to('.slide-work-3 .content-work', 0.5, {opacity: 0, y: 30}, 0);
		tl4.to('.slide-work-3 .content-work', 0, {opacity: 0, y: -30}, 0.5);
		if(play_work == 0){
			play_work = 1;
			let src1 = "assets/images/img-menu-3-3.png",
				src2 = "assets/images/img-menu-3-1.png",
				src3 = "assets/images/img-menu-3-2.png",
				title1 = "cheese coffee",
				title2 = "tết kỷ hợi",
				title3 = "wrap & roll",
				content1 = "cheese sytem",
				content2 = "personal",
				content3 = "restaurent sytem",
				titlesp1 = "brand identity",
				titlesp2 = "advertising",
				titlesp3 = "brand identity";
			slide_works(src1,src2,src3, title1, title2, title3, content1, content2, content3, titlesp1, titlesp2, titlesp3);
			tl4.to('.slide-work-1 .img-work > article', 0, {transformOrigin:"0% 100%"}, 0.9);
			tl4.to('.slide-work-1 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.slide-work-2 .img-work > article', 0, {transformOrigin:"0% 0%"}, 0.9);
			tl4.to('.slide-work-2 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.slide-work-3 .img-work > article', 0, {transformOrigin:"0% 100%"}, 0.9);
			tl4.to('.slide-work-3 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.work .content-work', 0.7, {opacity: 1, y: 0}, 0.7);
			tl4.to('.pagingInfo', 0, {text: "2/2"}, 0.7);
			tl4.progress(0).play();
		}else if(play_work == 1){
			play_work = 0;
			let src1 = "assets/images/img-menu-3-1.png",
				src2 = "assets/images/img-menu-3-2.png",
				src3 = "assets/images/img-menu-3-3.png",
				title1 = "tết kỷ hợi",
				title2 = "wrap & roll",
				title3 = "cheese coffee",
				content1 = "personal",
				content2 = "restaurent sytem",
				content3 = "cheese sytem",
				titlesp1 = "advertising",
				titlesp2 = "brand identity",
				titlesp3 = "brand identity";
			slide_works(src1,src2,src3, title1, title2, title3, content1, content2, content3, titlesp1, titlesp2, titlesp3);
			tl4.to('.slide-work-1 .img-work > article', 0, {transformOrigin:"0% 100%"}, 0.9);
			tl4.to('.slide-work-1 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.slide-work-2 .img-work > article', 0, {transformOrigin:"0% 0%"}, 0.9);
			tl4.to('.slide-work-2 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.slide-work-3 .img-work > article', 0, {transformOrigin:"0% 100%"}, 0.9);
			tl4.to('.slide-work-3 .img-work > article', 0.8, {scaleY: 0}, 0.9);
			tl4.to('.work .content-work', 0.7, {opacity: 1, y: 0}, 0.7);
			tl4.to('.pagingInfo', 0, {text: "1/2"}, 0.7);
			tl4.progress(0).play();
		}
	});	




	var arrContentLy4 = $('.content-ly-4').toArray();
	var arrDetlLy4 = $('.detail-ly4').toArray();
	for (let i = 0; i < arrDetlLy4.length; i++) {
		$(arrDetlLy4[i]).click(function(event){
			$("html, body").animate({ scrollTop: 50 }, 1500); 
			for (let j = 0; j < arrDetlLy4.length; j++) {
				$(arrContentLy4[j]).removeClass('show-content-ly-4');
			}
			$(arrContentLy4[i]).addClass('show-content-ly-4');
		});
		
	}

	var services_menusp = $('.menu-4-menusp ul li').toArray();
	var play_menusp = 0;
	var content_menusp = "";
	tl2 = new TimelineMax({paused: true, onComplete: function(){
		play_menusp = 1;
	} });
	function slide_services(src1,src2,src3){
		tl2.set('.img-services > div:nth-child(1) img',{attr:{src:src1}});
		tl2.set('.img-services > div:nth-child(2) img', {attr:{src:src2}});
		tl2.set('.img-services > div:nth-child(3) img', {attr:{src:src3}});
	}

	for (let i = 0; i < services_menusp.length; i++) {
		$(services_menusp[i]).click(function(event) {
			content_menusp = $(this).attr('data-menusp');
			for (let j = 0; j < services_menusp.length; j++) {
				$(services_menusp[j]).removeClass('active-menusp');
			}
			$(this).addClass('active-menusp');
			play_menusp = i;
			tl2.clear();
			tl2.to('.img-services > div:nth-child(1) > article', 0, {transformOrigin:"0% 0%"});
			tl2.to('.img-services > div:nth-child(2) > div > article', 0, {transformOrigin:"100% 0%"});
			tl2.to('.img-services > div:nth-child(3) > div > article', 0, {transformOrigin:"0% 100%"});

			tl2.to('.img-services > div:nth-child(1) > article', 1, {scaleY: 1});
			tl2.to('.img-services > div:nth-child(2) > div > article', 1, {scaleX: 1}, 0);
			tl2.to('.img-services > div:nth-child(3) > div > article', 1, {scaleY: 1}, 0);
			tl2.to('.img-services > div:nth-child(4) > div section', 0.5, {opacity: 0}, 0);
			tl2.to('.img-services > div:nth-child(4) > div section', 0, {y: "100%"}, 0.5);
			

			slide_services();
			if(play_menusp == 0){
				let src1 = "assets/images/menu4-images-1.png",
				src2 = "assets/images/menu4-images-2.png",
				src3 = "assets/images/menu4-images-3.png";
				slide_services(src1,src2,src3);
			}
			if(play_menusp == 1){
				let src1 = "assets/images/menu4-images-1_2.png",
				src2 = "assets/images/menu4-images-3_2.png",
				src3 = "assets/images/menu4-images-2_2.png";
				slide_services(src1,src2,src3);
			}
			if(play_menusp == 2){
				let src1 = "assets/images/menu4-images-3_2.png",
				src2 = "assets/images/menu4-images-2_2.png",
				src3 = "assets/images/menu4-images-1_2.png";
				slide_services(src1,src2,src3);
			}
			if(play_menusp == 3){
				let src1 = "assets/images/menu4-images-2_2.png",
				src2 = "assets/images/menu4-images-3_2.png",
				src3 = "assets/images/menu4-images-1_2.png";
				slide_services(src1,src2,src3);
			}
			tl2.to('.img-services > div:nth-child(4) > div section', 0, {text: content_menusp}, 0.55);
			tl2.to('.img-services > div:nth-child(1) > article', 0, {transformOrigin:"0% 100%"});
			tl2.to('.img-services > div:nth-child(2) > div > article', 0, {transformOrigin:"0% 0%"}, 1);
			tl2.to('.img-services > div:nth-child(3) > div > article', 0, {transformOrigin:"0% 0%"}, 1);
			tl2.to('.img-services > div:nth-child(1) > article', 1, {scaleY: 0}, 1.05);
			tl2.to('.img-services > div:nth-child(2) > div > article', 1, {scaleX: 0}, 1.05);
			tl2.to('.img-services > div:nth-child(3) > div > article', 1, {scaleY: 0}, 1.05);
			tl2.to('.img-services > div:nth-child(4) > div section', 1, {opacity: 1, y: 0}, 0.6);
			tl2.progress(0).play();
			

		});
	}

	const slide_main_next = $('.slide_main_next');
	var playing = 0;
	tl = new TimelineMax({paused: true});

	slide_main_next.click(function(){
		tl.clear();
		tl.to('.main-1-left > article', 0, {transformOrigin:"0% 0%"}, 0);
		tl.to('.main-1-left > article', 0.85, {scaleY: 1}, 0);
		if(playing == 0){
			playing = 1;
			tl.to('.layout-01', 0.5, {background: '#dddddd'}, 0.15);
			tl.to('.main-1-left-1', 0, {opacity: 0});
			tl.to('.main-1-left-2', 0, {opacity: 1});
			tl.to('.main-1-left > article', 0, {transformOrigin:"0% 100%"}, 0.85);
			tl.to('.main-1-left > article', 0.85, {scaleY: 0}, 0.9);

			tl.to('.slide-content-mid-1 h3', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1 img', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-1 h3', 0, {y: "100%"}, 0.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1', 0, {y: 50}, 0.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1 img', 0, {x: -50}, 0.5);

			tl.to('.slide-content-mid-2 h3', 0, {y: "100%"}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1', 0, {y: 50}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1 img', 0, {x: -50}, 0.5);

			tl.to('.slide-content-mid-2 h3', 0.7, {opacity: 1, y: 0}, 0.55);
			tl.to('.slide-content-mid-2 .main-1-icon-1', 0.7, {opacity: 1, y: 0}, 1.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1 img', 0.5, {opacity: 1, x: 0}, 2);
			tl.progress(0).play();
		}
		else if(playing == 1){
			playing = 0;
			tl.to('.layout-01', 0.5, {background: '#ffcb08'}, 0.15);
			tl.to('.main-1-left-1', 0, {opacity: 1});
			tl.to('.main-1-left-2', 0, {opacity: 0});
			tl.to('.main-1-left > article', 0, {transformOrigin:"0% 100%"}, 0.85);
			tl.to('.main-1-left > article', 0.85, {scaleY: 0}, 0.9);

			tl.to('.slide-content-mid-2 h3', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1 img', 0, {opacity: 0}, 0.5);
			tl.to('.slide-content-mid-2 h3', 0, {y: "100%"}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1', 0, {y: 50}, 0.5);
			tl.to('.slide-content-mid-2 .main-1-icon-1 img', 0, {x: -50}, 0.5);

			tl.to('.slide-content-mid-1 .main-1-icon-1', 0, {y: 50}, 0.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1 img', 0, {x: -50}, 0.5);
			tl.to('.slide-content-mid-1 h3', 0.7, {opacity: 1, y: 0}, 0.55);
			tl.to('.slide-content-mid-1 .main-1-icon-1', 0.7, {opacity: 1, y: 0}, 1.5);
			tl.to('.slide-content-mid-1 .main-1-icon-1 img', 0.5, {opacity: 1, x: 0}, 2);
			tl.progress(0).play();
		}
	});
});