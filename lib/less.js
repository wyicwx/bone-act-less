var less = require('less');
var bone = require('bone');
if(bone.version < '0.0.27') {
	console.log('bone-act-less require bone version >= 0.0.27');
	process.exit(0);
}
module.exports = bone.wrapper(function(buffer, encoding, callback) {
	var option = this.option;
	option.filename = this.source;
	less.render(buffer.toString(), option, function (e, result) {
		if(e) {
			bone.log.error('bone-act-less', 'Error msg:'+e.message);
			bone.log.error('bone-act-less', 'Error info:\r\n'+JSON.stringify(e, null, 4));
			callback(null, buffer);
		} else {
			callback(null, result.css);
		}
	});
});
