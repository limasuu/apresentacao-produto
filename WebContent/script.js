$(function(){
	
	$("#accordion").accordion({
		heightStyle: "content"
	});
	
	$("#add").button();
	$("#add").click(function(){
		 return false;
	});
	
	$("input[type='radio']").checkboxradio({
		      icon: false
	});
});