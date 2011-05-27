function booted($){
	var URL = 'https://github.com/voodoo/scraps/raw/master/marklets/cam/';

	function css(href){
		var link = $("<link>");
		link.attr({
		        type: 'text/css',
		        rel: 'stylesheet',
		        href: URL + href
		});
		link.onload(function(){
			console.log('css loaded ' + href); 
		});
		$("head").append( link ); 
	
	}
	css('app.css');

	$.getScript(URL + 'app.js', function(){
		console.log(' app is ready');
	});	
}
