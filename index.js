module.exports = function bindMethods(methods, that) {
  for(var i = 0; i < methods.length; i++) {
    that[methods[i]] = that[methods[i]].bind(that);
  }
}
