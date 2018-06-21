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

// CHECK BUSINESS HOURS (BASIC: 7-4)
var date = new Date();
var day = date.getDay();
var daystring = parseInt(day);
var hour = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles", hour:'2-digit', hour12: false});
console.log(hour);
console.log(daystring);

  if(hour > 7 && hour < 4) {
     $(".bone-health-specialist").show();
  } else {
     $(".bone-health-specialist").hide();
  }

// VIDEO LINK
$('.play-video').click(function() {
  "use strict";
  $(this).html('<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_cecdwaq3dz videoFoam=true " style="height:100%;width:100%">&nbsp;</div></div></div>');
  $(this).removeClass('play-video');
});