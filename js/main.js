$(function(){
	
	/* HEADER BANNER BACKGROUND SLIDER */
	
	$(".header-slider").slick({
		prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/header-link-arrow-left-prev.svg" alt="" title="Previous Shore">',
		nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/header-link-arrow-right-next.svg" alt="" title="Next Shore">',
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		fade: true,
		asNavFor: ".header-slider-dots"
	});
	
	
	
	/* HEADER BANNER DOTS SLIDER */
	
	$(".header-slider-dots").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		asNavFor: ".header-slider"
	});
	
	
	
	/* SURF MAP POINTS SLIDER  */
	
	$(".surf-map__slider").slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		focusOnSelect: true,
		asNavFor: ".surf-slider",
		responsive: [
			{
				breakpoint: 541,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
		
	
	
	/* SURF SLIDER */
	
	$(".surf-slider").slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/header-link-arrow-left-prev.svg" alt="" title="Previous Beach">',
		nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/header-link-arrow-right-next.svg" alt="" title="Next Beach">',
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
//		focusOnSelect: true,
		asNavFor: ".surf-map__slider", 
		responsive: [
			{
				breakpoint: 1921,
				settings: {
					slidesToShow: 5
				}
			}, 
			{
				breakpoint: 1601,
				settings: {
					slidesToShow: 4
				}
			}, 
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3
				}
			}, 
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					centerMode: true
				}
			}, 
			{
				breakpoint: 541,
				settings: {
					slidesToShow: 1, 
//					centerMode: false
				}
			}
		]
	});
	
});



/* TRAVEL SLIDER */

$(".travel-slider").slick({
	prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/header-link-arrow-left-prev.svg" alt="" title="Previous Shore">',
	nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/header-link-arrow-right-next.svg" alt="" title="Next Shore">',
	autoplay: true,
	autoplaySpeed: 5000,
	infinite: true,
	fade: true,
});



/* SLEEP SLIDER */

$(".sleep-slider").slick({
	prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/header-link-arrow-left-prev.svg" alt="" title="Previous Shore">',
	nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/header-link-arrow-right-next.svg" alt="" title="Next Shore">',
	autoplay: true,
	autoplaySpeed: 5000,
	infinite: true,
	fade: true,
});



/* SHOP SLIDER */

$(".shop-slider").slick({
	prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/header-link-arrow-left-prev.svg" alt="" title="Previous Board">',
	nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/header-link-arrow-right-next.svg" alt="" title="Next Board">',
	autoplay: true,
	autoplaySpeed: 5000,
	infinite: true,
	fade: true,
});



/* HEADER ATTR TITLE OF TITLE */

$(".header-title").hover(function() {
	var headerTitleText = $.trim($(this).text());
	$(this).attr("title", headerTitleText);
});



/* HEADER ATTR TITLE OF ARROW LINK */

$(".header-slider__item-link").hover(function() {
	var headerArrowTitle = $.trim($(this).siblings(".header-title").text());
	$(this).attr("title", "More info about " + headerArrowTitle);
});



/* MENU LINK ATTR TITLE */

$(".header-menu__item").each(function() {
	var menuItemAttrTitle = $.trim($(this).find(".header-menu__text").text());
//	console.log(menuItemAttrTitle);
	$(this).attr("title", menuItemAttrTitle);
});



/* CURRENT DATE */
/* --- SCRIPT IN HTML --- */



/* DATE ATTR TITLE */

//console.log(typeof currentDay);
currentDay = String(day);
//console.log(typeof currentDay);

switch (currentDay) {
	case "1":
	case "21":
	case "31":
		currentDayImproved = currentDay + "st";
			break;
	case "2":
	case "22":
		currentDayImproved = currentDay + "nd";
			break;
	case "3":
	case "23":
		currentDayImproved = currentDay + "rd";
			break;
	default:
		currentDayImproved = currentDay + "th";
			break;
}
//console.log(currentDayImproved);

$(".header-date").attr("title", 
					   "Today is " + currentMonthText + " " + currentDayImproved + ", " + currentYear);



/* PLACE POINT NAME ATTR TITLE */

var pointTitle = $.trim($(".header-point").text());
//console.log(pointTitle);
$(".header-point").attr("title", pointTitle)



/* BUTTON ARROW ANIMATION */

$(".bttn").hover(function() {
	$(this).find(".bttn-box__right-half-arrow").toggleClass("animate__animated animate__fadeInLeft animate__slow animate__infinite");
});



/* SURF SECTION -- ATTR TITLE OF BUTTON  */

//$(".surf").find(".bttn").hover(function() {
//	var placeName = $.trim($(this).parent(".bttn-object")
//						   .siblings(".title-object")
//						   .find(".surf-slider__item-title")
//						   .text());
//	$(this).attr("title", "Go to description of " + placeName);
////	console.log(placeName);
//});



/* SURF SECTION -- ATTR TITLE OF TITLE */

//$(".surf").find(".surf-slider__item-title").hover(function() {
//	var placeName = $.trim($(this).text());
//	$(this).attr("title", "Go to description of " + placeName);
////	console.log(placeName);
//});



/* SURF SECTION -- ATTR TITLE OF SLIDER */

$(".surf").find(".surf-slider__item").hover(function() {
	var placeName = $.trim($(this).find(".surf-slider__item-title").text());
	$(this).attr("title", "Go to description of " + placeName);
//	console.log(placeName);
});



/* MAPS POINT TITLE OF LINK ARROW */
$(".slider-dots-info").each(function() {
	var newTitle = $.trim($(this).find(".slider-dots-info__title").text());
//	console.log(newTitle);
	$(this).find(".slider-dots-info__link").attr("title", "More about " + newTitle);
});



/* MAPS POINT TITLE OF UNACTIVE MARKERS */

$(".slider-dot--unactive").hover(function() {
	var newTitleUnactiveDot = $.trim($(this).siblings(".slider-dots-info").find(".slider-dots-info__title").text());
	$(this).attr("title", "Show more info about " + newTitleUnactiveDot);
});



/* MAPS POINT TITLE OF ACTIVE MARKERS */

//$(".slider-dot--active").hover(function() {
//	var newTitleActiveDot = $.trim($(this).siblings(".slider-dots-info").find(".slider-dots-info__title").text());
//	$(this).attr("title", "Collapse info about " + newTitleActiveDot);
//});



/* SLEEP SECTION -- RATING */

$(".sleep").find(".sleep-slider__item").each(function() {
	var ratingNum = $.trim($(this).find(".rating-num").text());
//	console.log(ratingNum);
	
	switch (ratingNum) {
		case "1":
			var ratingText = "Meh";
				break;
		case "2":
			var ratingText = "Not So Bad";
				break;
			
		case "3":
			var ratingText = "Normal";
				break;
			
		case "4":
			var ratingText = "Good";
				break;
			
		case "5":
			var ratingText = "Excellent";
				break;
		
	}
//	console.log(ratingText);
	$(this).find(".rating-text").text(ratingText).attr("title", ratingText);

	
//	$(this).find(".rating--" + ratingNum).toggle();
	
	var ratingModify = "rating--" + ratingNum;
//	console.log(ratingModify);
	
	$(this).find(".rating-box").find(".rating").each(function() {
		if (!$(this).hasClass(ratingModify)) {
			$(this).toggle();
		} else {
			$(this).attr("title", ratingNum == 1 ? ratingNum + " Star" : ratingNum + " Stars");
		}
	});
});



/* SLEEP CALCULATION */

/* MAIN */
$('.quantity').each(function() {
  var spinner = $(this),
	input = spinner.find('input[type="number"]'),
	btnUp = spinner.find('.quantity-up'),
	btnDown = spinner.find('.quantity-down'),
	min = input.attr('min'),
	max = input.attr('max');

  btnUp.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue >= max) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue + 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue <= min) {
	  var newVal = oldValue;
	} else {
	  var newVal = oldValue - 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
  });
});


/* FOR EACH SLIDER */
$(".sleep").find(".sleep-slider__item").each(function() {
	
	var nightsNumStatic = $(".quantity-line-num[data-use='nights']").val();
//	console.log("nightsNumStatic = " + nightsNumStatic);

	var guestsNumStatic = $(".quantity-line-num[data-use='guests']").val();
//	console.log("guestsNumStatic = " + guestsNumStatic);

	var nightPrice = $(this).find(".amount").attr("data-night");
//	console.log("nightPrice = " + nightPrice);

	var guestPrice = $(this).find(".amount").attr("data-guest");
//	console.log("guestPrice = " + guestPrice);

	var totalSum = nightsNumStatic * nightPrice + (guestsNumStatic - 1) * guestPrice - 1;
//	console.log("totalSum = " + totalSum);
	
	$(this).find(".amount").html(totalSum);
	
	var newTotalSumNights = 0;
	var newTotalSumGuests = 0;
	
	
	/* CLICK ON BUTTONS IN NIGHTS BLOCK */
	$(this).find(".quantity-button[data-use='nights']").on("click", function() {
		
		var nightsNum = $(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-num[data-use='nights']").val();
//		console.log("nightsNum = " + nightsNum);
		
		var guestsNum = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".quantity-line-num[data-use='guests']").val();
//		console.log("guestsNum = " + guestsNum);
		
//		var nightPrice = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").attr("data-night");
//		console.log("nightPrice = " + nightPrice);
		
//		var guestPrice = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").attr("data-guest");
//		console.log("guestPrice = " + guestPrice);
		
		var newTotalSum = nightsNum * nightPrice + (guestsNum - 1) * guestPrice - 1;
//		console.log("newTotalSum = " + newTotalSum);
		
		$(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").html(newTotalSum);
	});
	
	
	/* CLICK ON BUTTONS IN GUESTS BLOCK */
	$(this).find(".quantity-button[data-use='guests']").on("click", function() {
		var guestsNum = $(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-num[data-use='guests']").val();
//		console.log("guestsNum = " + guestsNum);
		
		var nightsNum = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".quantity-line-num[data-use='nights']").val();
//		console.log("nightsNum = " + nightsNum);
		
//		var nightPrice = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").attr("data-night");
//		console.log("nightPrice = " + nightPrice);
		
//		var guestPrice = $(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").attr("data-guest");
//		console.log("guestPrice = " + guestPrice);
		
		var newTotalSum = nightsNum * nightPrice + (guestsNum - 1) * guestPrice - 1;
//		console.log("newTotalSum = " + newTotalSum);
		
		$(this).parents(".sleep-slider__item-info-box").siblings(".sleep-slider__item-info-box").find(".amount").html(newTotalSum);
	});
	
});



/* SLEEP NIGHTs & GUESTs */

$(".sleep").find(".sleep-slider__item").each(function() {
	$(this).find(".quantity-button[data-use='nights']").on("click", function() {
		var nihgtsNum = $(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-num").val();
		
		if (nihgtsNum == "1") {
			$(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-text").html("&nbsp;Night");
		} else {
			$(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-text").html("&nbsp;Nights")
		}
		
//		console.log(nihgtsNum);
//		console.log(typeof nihgtsNum);
	});
});

$(".sleep").find(".sleep-slider__item").each(function() {
	$(this).find(".quantity-button[data-use='guests']").on("click", function() {
		var guestsNum = $(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-num").val();
		
		if (guestsNum == "1") {
			$(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-text").html("&nbsp;Guest");
		} else {
			$(this).parents(".quantity-nav").siblings(".quantity-line").find(".quantity-line-text").html("&nbsp;Guests")
		}
		
		console.log(guestsNum);
		console.log(typeof guestsNum);
	});
});




/* SHOP SHOW/MINIMIZED DESCRIPTION OF BOARD */

$(".shop-slider__item-box-board-feature-unactive").on("click", function() {
	$(this).toggle();
	$(this).siblings(".shop-slider__item-box-board-feature-expanded").css("display", "flex");
});

$(".shop-slider__item-box-board-feature-expanded").on("click", function() {
	$(this).toggle();
	$(this).siblings(".shop-slider__item-box-board-feature-unactive").css("display", "flex");
});



/* SHOP RATING */

$(".shop").find(".shop-slider__item").each(function() {
	var ratingNum = $.trim($(this).find(".rating-num").text());
//	console.log(ratingNum);
//	console.log(typeof ratingNum);
	
	$(this).find(".rating--" + ratingNum).toggle();
	
	var ratingModify = "rating--" + ratingNum;
//	console.log(ratingModify);
	
	$(this).find(".rating-box").find(".rating").each(function() {
		var className = $(this).attr("class");
//		console.log(className);
		
		if (!$(this).hasClass(ratingModify)) {
			$(this).toggle();
		} else {
			$(this).attr("title", ratingNum == 1 ? ratingNum + " Star" : ratingNum + " Stars").css("display", "block");
		}
	});
});



/* MOBILE BUTTON */

/* CLICK ON BUTTON OF CALL OF MOBILE MENU */
$(".mobile-bttn").on("click", function() {
	$(this).toggleClass("hidden");
	$(this).siblings(".header-menu").toggleClass("active");
	$(this).siblings(".mobile-menu-close").toggle();
	$(this).parents(".header-aside").css({"position": "static"});
	$("body").css("overflow", "hidden");
});

/* CLICK ON CLOSE BUTTON IN MOBILE MENU */
$(".mobile-menu-close").on("click", function() {
	$(this).toggle();
	$(this).siblings(".mobile-bttn").toggleClass("hidden");
	$(this).siblings(".header-menu").toggleClass("active");
	$(this).parents(".header-aside").css({"position": "absolute"});
	$("body").css("overflow", "unset");
});

/* CLICK ON LINK IN MOBILE MENU */
$(".header-menu").find(".header-menu__item").on("click", function() {
	$(this).parents(".header-menu").siblings(".mobile-bttn").toggleClass("hidden");
	$(this).parents(".header-menu").siblings(".mobile-menu-close").toggle();
	$(this).parents(".header-menu").parents(".header-aside").css({"position": "absolute"});
	$(this).parents(".header-menu.active").toggleClass("active");
	$("body").css("overflow", "unset");
});
