var bone = require('bone');
var less = bone.require('../../');

var dist = bone.dest('dist').cwd('~/');

dist.src('./!(common).less')
    .act(less)
    .rename({
        ext: '.css'
    });