// JavaScript Document

// ALGAECAL API CALL
var request = new XMLHttpRequest();
request.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options/default_phone_number', true);
request.onload = function () {
  "use strict";
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      $( ".api-phone" ).html( data.default_phone_number );
      $( ".api-phone" ).attr("href", "tel:"+data.default_phone_number);
    }
};
request.send();

var guarantee_request = new XMLHttpRequest();
guarantee_request.open('GET', 'https://www.algaecal.com/wp-json/acf/v3/options/options/7yr_full_copy', true);
guarantee_request.onload = function () {
  "use strict";
  var data = JSON.parse(this.response);
  if (guarantee_request.status >= 200 && guarantee_request.status < 400) {
      $( ".modal-body" ).html(data['7yr_full_copy']);
    }
};
guarantee_request.send();

// WISTIA VIDEO CALL
var video_request = new XMLHttpRequest();
video_request.open('GET', 'http://fast.wistia.com/oembed?url=http%3A%2F%2Fhome.wistia.com%2Fmedias%2Fcecdwaq3dz', true);
video_request.onload = function () {
  "use strict";
  var data = JSON.parse(this.response);
  data.thumbnail_url = '/image/video-play-button.png';
};
video_request.send();


// CHECK BUSINESS HOURS (BASIC: 7-4)
var date = new Date();
var day = date.getDay();
var daystring = parseInt(day);
var hour = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles", hour:'2-digit', hour12: false});
var hourstring = parseInt(hour);
console.log(hourstring);
console.log(daystring);

  if(hourstring > 7 && hourstring < 16) {
     $(".bone-health-specialist").show();
  } else {
     $(".bone-health-specialist").hide();
  }

// VIDEO LINK
$('.play-video').click(function() {
  "use strict";
  $('.play-video img').hide();
  $(this).removeClass('play-video');
  $('.wistia_embed').show();
});

// PRODUCT BUY NOW SHOW AT 2:13
window._wq = window._wq || [];

// target our video by the first 3 characters of the hashed ID
_wq.push({ id: "cecdwaq3dz", onReady: function(video) {
  // at 10 seconds, do something amazing
  video.bind('secondchange', function(s) {
    if (s >= 133) {
      $(".products").css({"display":"flex"});
      $(".buy-now").css({"display":"block"});
    }
  });
}});