$('document').ready(function () {
	$('.bxslider').bxSlider({
		auto: true
	});
	$('.menu-btn').click (function () {
		if ($('.top-navigation').css('display') == 'none') {
			$('.top-navigation').slideDown(300);
		} else {
			$('.top-navigation').slideUp(300);
		}
	});

});