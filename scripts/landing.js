var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(point) {
     var revealPoint = function(i) {
         for (var i = 0; i < point.length; i++) {
            point[i].style.opacity = 1;
            point[i].style.transform = "scaleX(1) translateY(0)";
            point[i].style.msTransform = "scaleX(1) translateY(0)";
            point[i].style.WebkitTransform = "scaleX(1) translateY(0)";  
         }
     }
 
     revealPoint();
 
 };

 window.onload = function() {
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);   
         }
     });
 }