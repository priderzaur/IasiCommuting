var map;

$( window ).resize(function() {
	 positionSideBarAndMap();
})
$( document ).ready(function() {
	initMap();
	positionSideBarAndMap();
	
	
});

function positionSideBarAndMap(){
	var side_bar_height = $( window ).height()-$("#top_bar").height();
	var map_width = $( window ).width()-$("#side_bar").width();
	$("#side_bar").height(side_bar_height);
	$("#map").height(side_bar_height);
	$("#map").width(map_width);
	if ($(window).width() <= 800 ){
		$("html").css("overflow-x","auto");
		$("html").css("overflow-y","none");
		$("body").css("overflow-x","auto");
		$("body").css("overflow-y","none");
	} else {
		$("html").css("overflow-x","none");
		$("body").css("overflow-x","none");
	}
} 
 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.151, lng: 27.589},
      zoom: 16 ,
      mapTypeControl: true,
      mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER
      },
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
      },
      fullscreenControl: true
    });
    
    map.addListener("rightclick", function(event) {
	    var lat = event.latLng.lat().toFixed(3);
	    var lng = event.latLng.lng().toFixed(3);
	    $("#lat_box").value=lat;
	    $("#lng_box").value=lng;
	    console.log(lat+","+lng);
	}); 
    
    /*map.addListener('mouseover', function(event) {
	    console.log(event.latLng.lat().toFixed(3)+","+event.latLng.lng().toFixed(3));
	}); */
  }