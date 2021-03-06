/**
 * Driving School app Scripts
 */
;( function( $ ) {
	"use strict";
	
	var countDiv = $("#countdown");
	if(countDiv.length == 0) {
	} else {
		var countUntil = countDiv.attr('data-until');
		function t(t) {
			var d = $(".countdown__item-d"),
				i = $(".countdown__item-s"),
				l = $(".countdown__item-m"),
				s = $(".countdown__item-h"),
				a = t[6],
				n = t[5],
				r = t[4],
				f = t[3];
			d.val(f).trigger("change");
			i.val(a).trigger("change");
			l.val(n).trigger("change");
			s.val(r).trigger("change");
			//console.log(d.val());
			if(d.val() == 0){
				d.parents('.countdown__section').css('display','none');
			}
		}
		var until = new Date;
		var countUntil = countUntil.split(',');
		until = new Date(countUntil[0],countUntil[1]-1,countUntil[2],countUntil[3],countUntil[4]);
	
		$(".countdown__item-d").knob({
			'font':   'inherit',
			'readOnly': true,
		}),
		$(".countdown__item-h").knob({
			'font':   'inherit',
			'readOnly': true,
		}), $(".countdown__item-m").knob({
			'font':   'inherit',
			'readOnly': true,
		}), $(".countdown__item-s").knob({
			'font':   'inherit',
			'readOnly': true,
		});
		countDiv.countdown({
			until: until,
			format: "DHMS",
			padZeroes: !1,
			//layout: $("#countdownLayout").html(),
			onTick: t
		});
	};
	
	$('.profile__fig-thumb img').click(function(){
		var bigImgVal = $('.profile__fig-img img');
		var thumbImgVal = $(this).attr('src');
		bigImgVal.attr('src',thumbImgVal);
	});
	
	$('select').styler({
		singleSelectzIndex: 4
	});
	
	$(".faq__question").on("click", function() {
		var thisParent = $(this).closest(".faq__item");
		var allParents = $(".faq__item");
		allParents.not(thisParent).removeClass("faq__item_active");
		thisParent.toggleClass("faq__item_active");
	});
	
	/**
	 * Magnific Popup
	 */
	$(".photo__list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".gallery__list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".footer__instagramm-list").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			showCloseBtn: !1,
			gallery: {
				enabled: !0
			}
		});
	});
	
	$(".sertificate__thumb").magnificPopup({
		type: "image",
		showCloseBtn: true,
		closeBtnInside: false,
		gallery: {
			enabled: true
		}
	});

	$(".video__body-inner").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: !1,
		fixedContentPos: !1
	});
	
	/**
	 * Swiper
	 */
	var tiserSwiper = new Swiper ('#tiserSlider', {
		loop: true
	});  

	var reviewPageItem = $(".review__pager .review__pager-item");
	var reviewActiveClass = 'review__pager-item_active';
	var reviewSlider = new Swiper("#reviewSlider", {
		loop: false,
		onInit: function (swiper) {
			var thisIndex = swiper.activeIndex;
			reviewPageItem.eq(thisIndex).addClass(reviewActiveClass);
		},
		onSlideChangeStart: function (swiper) {
			var thisIndex = swiper.activeIndex;
			reviewPageItem.removeClass(reviewActiveClass);
			reviewPageItem.eq(thisIndex).addClass(reviewActiveClass);
		},
	});

	var instructorPageItem = $(".instructor__pager .instructor__pager-item");
	var instructorActiveClass = 'instructor__pager-item_active';
	var instructorSlider = new Swiper("#instructorSlider", {
		loop: false,
		onInit: function (swiper) {
			var thisIndex = swiper.activeIndex;
			instructorPageItem.eq(thisIndex).addClass("instructor__pager-item_active");
		},
		onSlideChangeStart: function (swiper) {
			var thisIndex = swiper.activeIndex;
			instructorPageItem.removeClass(instructorActiveClass);
			instructorPageItem.eq(thisIndex).addClass(instructorActiveClass);
		},
	});

	new Swiper("#courseSlider", {
		loop: true,
		spaceBetween: 5
	});

	$(".tiser__pager-item").on("click", function() {
		var e = $(this);
		e.siblings().removeClass("tiser__pager-item_active");
		var t = e.index() + 1;
		e.addClass("tiser__pager-item_active"), tiserSwiper.slideTo(t);
	});
	
	$(".review__pager-item").on("click", function() {
		var e = $(this);
		var t = e.index();
		reviewSlider.slideTo(t);
	});

	$(".instructor__pager-item").on("click", function() {
		var e = $(this);
		var t = e.index();
		instructorSlider.slideTo(t);
	});
	
	/**
	 * Nav
	 */
	$(".nav__btn").on("click", function() {
		$("body").addClass("nav_open");
	});
	$(".nav__close").on("click", function() {
		$("body").removeClass("nav_open");
	});

	$("#date").length && rome(date, {
		time: !1
	});

	  
  
	$(".contact").on("click", function() {
		$(".contact__map").css("pointer-events", "auto");
	});

	$('.gallery__list').imagesLoaded( function() {
		var e = $(".gallery__list").isotope({
			itemSelector: ".gallery__list-item",
			layoutMode: "fitRows"
		});
	$(".gallery__filter").on("click", ".filter__item", function() {
		var t = $(this).attr("data-filter");
		e.isotope({
			filter: t
		})
	});
	$(".gallery__filter").each(function(e, t) {
		var i = $(t);
		i.on("click", ".filter__item", function() {
			i.find(".filter__item_active").removeClass("filter__item_active");
			$(this).addClass("filter__item_active");
		});
	});
	$(".address__filter").each(function(e, t) {
		var i = $(t);
		i.on("click", ".filter__item", function() {
			i.find(".filter__item_active").removeClass("filter__item_active");
			$(this).addClass("filter__item_active");
		});
	});
	
	$('.course__filter .filter__item').click(function () {
		var linkActiveVal = $(this).index();
		$(this).addClass('filter__item_active').siblings().removeClass('filter__item_active');
		var displayContentVal = $('.course__slider .course__slider-item').eq(linkActiveVal).addClass('active').siblings().removeClass('active');
	});
	
	/**
	 * Google map
	 */
	if (typeof google === 'object' && typeof google.maps === 'object') {
		(function(e) {
			function t(t) {
				for (var i = {
						url: "/wp-content/themes/drivingschool/assets/images/pin_y.png",
						size: new e.maps.Size(25, 33),
						origin: new e.maps.Point(0, 0),
						anchor: new e.maps.Point(25, 33)
					}, s = {
						coords: [1, 1, 1, 20, 18, 20, 18, 1],
						type: "poly"
					}, a = 0; a < l.length; a++) {
					var n = l[a];
					new e.maps.Marker({
						position: {
							lat: n[1],
							lng: n[2]
						},
						map: t,
						icon: i,
						shape: s,
						title: n[0],
						zIndex: n[3]
					})
				}
			}
			var i = [{
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [{
						saturation: 36
					}, {
						color: "#000000"
					}, {
						lightness: 40
					}]
				}, {
					featureType: "all",
					elementType: "labels.text.stroke",
					stylers: [{
						visibility: "on"
					}, {
						color: "#000000"
					}, {
						lightness: 16
					}]
				}, {
					featureType: "all",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.fill",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}, {
						weight: 1.2
					}]
				}, {
					featureType: "administrative",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "labels.text",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.province",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}, {
						saturation: "-100"
					}, {
						lightness: "30"
					}]
				}, {
					featureType: "administrative.neighborhood",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.land_parcel",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "landscape",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}, {
						gamma: "0.00"
					}, {
						lightness: "74"
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 20
					}]
				}, {
					featureType: "landscape.man_made",
					elementType: "all",
					stylers: [{
						lightness: "3"
					}]
				}, {
					featureType: "poi",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 21
					}]
				}, {
					featureType: "road",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 29
					}, {
						weight: .2
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 18
					}]
				}, {
					featureType: "road.local",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 16
					}]
				}, {
					featureType: "transit",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 19
					}]
				}, {
					featureType: "water",
					elementType: "geometry",
					stylers: [{
						color: "#000000"
					}, {
						lightness: 17
					}]
				}],
				l = [
					["Bondi", 40.64565, -73.997769, 4],
					["Coogee", 40.699844, -74.088668, 5],
					["Cronulla", 40.614416, -74.11803, 3]
				],
				s = void 0;
			return !!document.getElementById("contactMap") && (s = new e.maps.Map(document.getElementById("contactMap"), {
				center: {
					lat: 40.661372,
					lng: -73.872558
				},
				zoom: 11
			}), s.setOptions({
				styles: i
			}), void t(s))
		})(google),
		
		function(e) {
			function t(t) {
				for (var l = {
						url: "assets/images/pin.png",
						size: new e.maps.Size(25, 33),
						origin: new e.maps.Point(0, 0),
						anchor: new e.maps.Point(25, 33)
					}, s = {
						coords: [1, 1, 1, 20, 18, 20, 18, 1],
						type: "poly"
					}, a = 0; a < i.length; a++) {
					var n = i[a];
					new e.maps.Marker({
						position: {
							lat: n[1],
							lng: n[2]
						},
						map: t,
						icon: l,
						shape: s,
						title: n[0],
						zIndex: n[3]
					})
				}
			}
			var i = [
					["Bondi Beach", 53.477054, -2.239885, 0]					
				],
				l = void 0;
			return !!document.getElementById("addressMap") && (l = new e.maps.Map(document.getElementById("addressMap"), {
				center: {
					lat: -2.239885,
					lng: 53.477054
				},
				zoom: 12
			}), void t(l))
		}(google);
		
		! function() {
			$(".routes").on("click", function() {
				$(".routes__map").css("pointer-events", "auto")
			});
		}();
		
		(function(e) {
			function t(t) {
				for (var i = {
					url: "/wp-content/themes/drivingschool/assets/images/pin_y.png",
						size: new e.maps.Size(25, 33),
						origin: new e.maps.Point(0, 0),
						anchor: new e.maps.Point(25, 33)
						}, s = {
							coords: [1, 1, 1, 20, 18, 20, 18, 1],
							type: "poly"
						}, a = 0; a < l.length; a++) {
						var n = l[a];
	
					new e.maps.Marker({
							position: {
								lat: n[1],
								lng: n[2]
							},
							map: t,
							icon: i,
							shape: s,
							title: n[0],
							zIndex: n[3]
						})
					}
				}
				var i = [{
						featureType: "all",
						elementType: "labels.text.fill",
						stylers: [{
							saturation: 36
						}, {
							color: "#000000"
						}, {
							lightness: 40
						}]
					}, {
						featureType: "all",
						elementType: "labels.text.stroke",
						stylers: [{
							visibility: "on"
						}, {
							color: "#000000"
						}, {
							lightness: 16
						}]
					}, {
						featureType: "all",
						elementType: "labels.icon",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "administrative",
						elementType: "geometry.fill",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 20
						}]
					}, {
						featureType: "administrative",
						elementType: "geometry.stroke",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 17
						}, {
							weight: 1.2
						}]
					}, {
						featureType: "administrative",
						elementType: "labels",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "administrative.country",
						elementType: "all",
						stylers: [{
							visibility: "simplified"
						}]
					}, {
						featureType: "administrative.country",
						elementType: "geometry",
						stylers: [{
							visibility: "simplified"
						}]
					}, {
						featureType: "administrative.country",
						elementType: "labels.text",
						stylers: [{
							visibility: "simplified"
						}]
					}, {
						featureType: "administrative.province",
						elementType: "all",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "administrative.locality",
						elementType: "all",
						stylers: [{
							visibility: "simplified"
						}, {
							saturation: "-100"
						}, {
							lightness: "30"
						}]
					}, {
						featureType: "administrative.neighborhood",
						elementType: "all",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "administrative.land_parcel",
						elementType: "all",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "landscape",
						elementType: "all",
						stylers: [{
							visibility: "simplified"
						}, {
							gamma: "0.00"
						}, {
							lightness: "74"
						}]
					}, {
						featureType: "landscape",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 20
						}]
					}, {
						featureType: "landscape.man_made",
						elementType: "all",
						stylers: [{
							lightness: "3"
						}]
					}, {
						featureType: "poi",
						elementType: "all",
					stylers: [{
						visibility: "off"
						}]
					}, {
						featureType: "poi",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 21
						}]
					}, {
						featureType: "road",
						elementType: "geometry",
						stylers: [{
							visibility: "simplified"
						}]
					}, {
						featureType: "road.highway",
						elementType: "geometry.fill",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 17
						}]
					}, {
						featureType: "road.highway",
						elementType: "geometry.stroke",
						stylers: [{
							color: "#000000"
						}, {
						lightness: 29
						}, {
							weight: .2
						}]
					}, {
						featureType: "road.arterial",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 18
						}]
					}, {
						featureType: "road.local",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 16
						}]
					}, {
						featureType: "transit",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 19
						}]
					}, {
						featureType: "water",
						elementType: "geometry",
						stylers: [{
							color: "#000000"
						}, {
							lightness: 17
						}]
					}],
					l = [
						["Bondi", 40.64565, -73.997769, 4],
						["Coogee", 40.699844, -74.088668, 5],
						["Cronulla", 40.614416, -74.11803, 3]
					],
					s = void 0;
				return !!document.getElementById("routesMap") && (s = new e.maps.Map(document.getElementById("routesMap"), {
					center: {
						lat: 40.661372,
						lng: -73.872558
					},
					zoom: 11
				}), s.setOptions({
					styles: i
				}), void t(s))
			})(google);
		//}]);
			
		var Popup = { this: $('.popup'), wrapper: $('.popup__wrapper'), close: $('.popup__close'), bg: $('.popup__bg')},
			body = $('body'),
			w = $(window);
			
		function abs(object) {
			$(this).removeAttr('href');
			var scrollTop = w.scrollTop(),
			height = body.height();
			object.css('padding-top', scrollTop+20).fadeIn(500).height(height-scrollTop-20);
		}
		
		Popup.close.click(function() {
			Popup.this.fadeOut(500);
		});
		
		Popup.bg.click(function() {
			Popup.this.fadeOut(500);
		});
		
		var popups = [$('.popup_usual'), $('.popup_bestsellers'), $('.popup_teacher'), $('.popup_protect'), $('.popup_callback')];
		
		$('.popup-usual-btn').click(function() {
			$(this).removeAttr('href');
			abs(popups[0]);
		});
		$('.popup-bestsellers-btn').click(function() {
			$(this).removeAttr('href');
			abs(popups[1]);
		});
		$('.popup-teacher-btn').click(function() {
			$(this).removeAttr('href');
			abs(popups[2]);
		});
		$('.popup-protect-btn').click(function() {
			$(this).removeAttr('href');
			abs(popups[3]);
		});
		$('.header__callback').click(function() {
			$(this).removeAttr('href');
			abs(popups[4]);
		});
	
		var ThisMapCordX,
			ThisMapCordY;
		
		initMap();
		
		$('.address__map').click(function() {
			$('.address__map div').css("pointer-events", "auto");
		});
		$(".address__map").mouseleave(function() {
			$('.address__map div').css("pointer-events", "none");
		});
		$('.address__filter .filter__item').click(function(){
			var linkActiveVal = $(this).index();
			$(this).addClass('filter__item_active').siblings().removeClass('filter__item_active');
			var displayContentVal = $('.address__map .address__map-item').eq(linkActiveVal).addClass('active').siblings().removeClass('active');
			ThisMapCordX = $('.address__map .address__map-item').eq(linkActiveVal).data('cor1');
			ThisMapCordY = $('.address__map .address__map-item').eq(linkActiveVal).data('cor2');
			
			initMap();	
		});
		
		$('.address__filter .filter__item').eq(0).trigger('click');
			
			function initMap() {
				var pos1 = new google.maps.LatLng(ThisMapCordX, ThisMapCordY),
				pos2 = new google.maps.LatLng(ThisMapCordX, ThisMapCordY),
				pos3 = new google.maps.LatLng(ThisMapCordX,ThisMapCordY),
				markerPos = new google.maps.LatLng(43.1043732,131.9544712),
		
				option1 = {
						zoom: 17,
						center: pos1,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						styles: [
							{
								"featureType": "landscape",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 65
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "poi",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 51
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.highway",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.arterial",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 30
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "road.local",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 40
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "transit",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "administrative.province",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							}, {
								"featureType": "water",
								"elementType": "labels",
								"stylers": [
									{
										"visibility": "on"
									}, {
										"lightness": -25
									}, {
										"saturation": -100
									}
								]
							}, {
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"hue": "#ffff00"
									}, {
										"lightness": -25
									}, {
										"saturation": -97
									}
								]
							}
						]
					},
		
					option2 = {
						zoom: 17,
						center: pos2,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						styles: [
							{
								"featureType": "landscape",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 65
									}, {
										"visibility": "on"
									}
							   ]
							}, {
								"featureType": "poi",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 51
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.highway",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.arterial",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 30
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "road.local",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 40
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "transit",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "administrative.province",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							}, {
								"featureType": "water",
								"elementType": "labels",
								"stylers": [
									{
										"visibility": "on"
									}, {
										"lightness": -25
									}, {
										"saturation": -100
									}
								]
							}, {
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"hue": "#ffff00"
									}, {
										"lightness": -25
									}, {
										"saturation": -97
									}
								]
							}
						]
					},
		
					option3 = {
						zoom: 17,
						center: pos3,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						styles: [
							{
								"featureType": "landscape",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 65
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "poi",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 51
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.highway",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "road.arterial",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 30
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "road.local",
								"stylers": [
									{
										"saturation": -100
									}, {
										"lightness": 40
									}, {
										"visibility": "on"
									}
								]
							}, {
								"featureType": "transit",
								"stylers": [
									{
										"saturation": -100
									}, {
										"visibility": "simplified"
									}
								]
							}, {
								"featureType": "administrative.province",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							}, {
								"featureType": "water",
								"elementType": "labels",
								"stylers": [
									{
										"visibility": "on"
									}, {
										"lightness": -25
									}, {
										"saturation": -100
									}
								]
							}, {
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"hue": "#ffff00"
									}, {
										"lightness": -25
									}, {
										"saturation": -97
									}
								]
							}
						]
					}
		
				if ( $(".address > div").hasClass("address__map") ) {
					
					if ( $("#addressMap1").length != 0) {
						var map1 = new google.maps.Map(document.getElementById("addressMap1"), option1)
						var myMarker = new google.maps.Marker({position: pos1, map: map1, title: "Pune"});
					}
					if ( $("#addressMap2").length != 0) {
						var map2 = new google.maps.Map(document.getElementById("addressMap2"), option2);
						var myMarker2 = new google.maps.Marker({position: pos2, map: map2, title: "Noida"});
					}
					if ( $("#addressMap3").length != 0) {
						var map3 = new google.maps.Map(document.getElementById("addressMap3"), option3);
						var myMarker3 = new google.maps.Marker({position: pos3, map: map3, title: "Noida"});
					}
				}
			}	
		};
	});

})( jQuery );