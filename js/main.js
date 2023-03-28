
//SLIDER==================================================================================================
$(document).ready(function () {
	$('#pagepiling').pagepiling({
		scrollingSpeed: 100,
	});
});
//LOADER==================================================================================================
document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 2000)
}
//========================================================================================================
