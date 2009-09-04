function jsPath(file){
	var JS_DIR = 'js/'
  return JS_DIR + file + '.js'	
}
function load(){
	for(var i = 0 ; i < arguments.length ; i++){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = jsPath(arguments[i]);
		document.getElementsByTagName("head")[0].appendChild(script);		
	}
}
function loadWithCallback(url, callback) {
	var f = arguments.callee;
	if (!("queue" in f))
		f.queue = {};
	var queue =  f.queue;
	if (url in queue) { // script is already in the document
		if (callback) {
			if (queue[url]) // still loading
				queue[url].push(callback);
			else // loaded
				callback();
		}
		return;
	}
	queue[url] = callback ? [callback] : [];
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.onload = script.onreadystatechange = function() {
		if (script.readyState && script.readyState != "loaded" && script.readyState != "complete")
			return;
		script.onreadystatechange = script.onload = null;
		while (queue[url].length)
			queue[url].shift()();
		queue[url] = null;
	};
	script.src = jsPath(url);
	document.getElementsByTagName("head")[0].appendChild(script);
}