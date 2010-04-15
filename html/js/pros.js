String.prototype.xpnd = function(keys) {
  return this.replace(/\#\{(.*?)\}/g, function(x,y) { return keys[y]});
}

String.prototype.trim = function(){
  return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1');
}    

String.prototype.empty = function(){
  return (this.trim() == '')
}