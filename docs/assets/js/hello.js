$(document).ready(function () {
	
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
	});
	
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42196413-1', 'helloduane.com');
ga('send', 'pageview');


$(function () {
	var message = "Veganburger Misses You...";
	var original;
	  
	$(window).focus(function() {
		if(original) {
			document.title = original;
		}
	}).blur(function() {
		var title = $('title').text();
		
		if(title != message) {
			original = title;
		}
		document.title = message;
	});
});