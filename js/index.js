$(document).ready(function(){
	
	$('.sun').mousemove(function(){
		
		$('body').addClass('bodybg');
		$('.sun').fadeOut(1);
		$('.star').fadeIn(1);
	});
//	$('.star').mousemove(function(){		
//		$('body').addClass('sunbg');
//		$('.star').fadeOut(1);
//		$('.sun').fadeIn(1);
//	});
});
function $(id){
	return document.getElementById(id);
}
