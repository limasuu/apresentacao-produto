$(function(){
	
	$("#accordion").accordion({
		heightStyle: "content"
	});
	
	$("#add").button();
	$("#add").click(function(){
		 return false;
	});
	
	$("#quantidade").spinner({
		min:1,
        max:10
	});
	
	$("input[type='radio']").checkboxradio({
		      icon: false
	});
});