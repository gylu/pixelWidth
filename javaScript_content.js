$(document).ready(function() {

	function load() {
		$(window).resize(function () {
			var the_height = $(window).height();
			var the_width = $(window).width();
			$('#theHeight').html(the_height);
			$('#theWidth').html(the_width);
		}).resize();	
	}
	//google.maps.event.addDomListener(window, 'load', load); //alternative way of loading, i saw this from view-source:https://google-developers.appspot.com/maps/documentation/javascript/examples/place-details
	load();
});