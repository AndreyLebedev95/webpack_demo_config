var html = require('./module.html');
var css = require('./module.css');

module.exports = {
   create: function() {
      console.log($);
      $('body').append(html);
   }
};