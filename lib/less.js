var less = require('less');
var bone = require('bone');
module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option;
	option.filename = this.source;
	less.render(buffer.toString(), option, function (e, css) {
		if(e) {
			console.log(e.message);
			callback(null, buffer);
		} else {
			callback(null, css);
		}
	});
});
