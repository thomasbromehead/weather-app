$(document).ready(function(){
   $('#weather').hide();
   if(navigator.geolocation){
      var currentPosition = '';
      navigator.geolocation.getCurrentPosition(function(position){
         currentPosition = position;
         console.log(currentPosition);
         var latitude = currentPosition.coords.latitude;
         var longitude = currentPosition.coords.longitude;
         console.log(latitude, longitude);
      });
   }
})