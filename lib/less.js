var less = require('less');

module.exports.act = function(buffer, encoding, callback) {
	var options = this.options();

	options.filename = this.source;

	less.render(buffer.toString(), options, function (e, result) {
		if(e) {
			bone.log.error('bone-act-less', 'Error msg:'+e.message);
			bone.log.error('bone-act-less', 'Error info:\r\n'+JSON.stringify(e, null, 4));
			callback(null, buffer);
		} else {
			callback(null, result.css);
		}
	});
};

module.exports.filter = {
	ext: '.less'
};
