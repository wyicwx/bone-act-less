var less = require('less');
var path = require('path');

module.exports.act = function(buffer, encoding, callback) {
	var options = this.options();
	var runtime = this;
	// set cacheable flag
	this.cacheable();

	options.filename = this.source;

	less.render(buffer.toString(), options, function (e, result) {
		if(e) {
			bone.log.warn('bone-act-less', 'Error msg:'+e.message);
			bone.log.warn('bone-act-less', 'Error info:\r\n'+JSON.stringify(e, null, 4));
			callback(null, buffer);
		} else {
			if(result.imports) {
				result.imports.forEach(function(p) {
					var resolvedPath = path.resolve(runtime.sourceParsed.dir, p);
					runtime.addDependency(resolvedPath);
				});
			}
			callback(null, result.css);
		}
	});
};

module.exports.filter = {
	ext: '.less'
};
