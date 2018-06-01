$(document).ready(function(){
   $('.short').hide();
   if(navigator.geolocation){
      var currentPosition = '';
      navigator.geolocation.getCurrentPosition(function(position){
         currentPosition = position;
         console.log(currentPosition);
         var latitude = currentPosition.coords.latitude;
         var longitude = currentPosition.coords.longitude;
         console.log(latitude, longitude);
         var url = 'https://api.apixu.com/v1/current.json?key=bcaf6e0ad3c94a37a1a192107182805&q=';
         $.getJSON (url + latitude + ',' + longitude, function(data){
            console.log(data);
            //JSON.stringify turns a JS object into JSON text and stores that JSON text in a string.
            var data = JSON.stringify(data);
            //JSON.parse turns a string of JSON text into a JS object
            var json = JSON.parse(data);

            var country = json.location.country;
            var city = json.location.name;
            var region = json.location.region;
            
            var temp = json.current.temp_c;
            var tempf = json.current.temp_f;
           // var last-update = json.current.last_updated.replace('-', ' ');

            var wind = json.current.wind_kph;
            var humidity = json.current.humidity;
            var time = json.location.localtime.split(' ')[1];
            var cloud = json.current.cloud;
            console.log(data);
            $('#weather').html(city + ', ' + region +', ' + country);
               if (temp < 18) {
                  $('.grey-jumbo').css({
                     backgroundImage : 'url(https://placeimg.com/640/480/nature)'
                  });
                  $('#temp').html("<h1>It's a pretty cold day today ... <hr></h1>");
               } else if (temp > 18) {
                  $('.grey-jumbo').css({
                     backgroundImage : 'url(https://placeimg.com/640/480/nature)'
                  });
                  $('#temp').html("<h1>It's a sunny day... <hr></h1>");
               };

            $('#info1').html(time);
            $('#info2').html('Wind: ' + wind + 'kph');
            $('#info3').html(temp + '&#8451');
            var yes = true;
            $('#switch').on('click', function(){
               if (yes) {
                  $('#info3').html(temp_f + '&#8457');
                  $('#switch').html("Show in Celsius");
                  var yes = false;
               } else {
                  $('#info3').html(temp + '&#8451');
                  $('#switch').html("Show in Fahrenheit");
                  yes = true;
               }
            });

            $('.short').show();
            //show sky status
            if ( cloud <= 30) {
               $('#info5').html('Clear sky');
            } else {
               $('#info5').html('Cloudy');
            }
            $('#info6').html('Humidity: ' + humidity + '%');
         })
      });
   }
})

 
//https://api.apixu.com/v1/current.json?key=bcaf6e0ad3c94a37a1a192107182805&q=Paris