String.prototype.xpnd = function(keys) {
  return this.replace(/\#\{(.*?)\}/g, function(x,y) { return keys[y]});
}