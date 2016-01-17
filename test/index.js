'use strict';
var assert = require('assert');
var path = require('path');
var bone = require('bone');
var _ = bone.utils._;
var Data = require('bone/lib/data.js');

bone.setup(path.join(__dirname, './raw'));
require('./bone/bonefile.js');
bone.run();

var FileSystem = require('bone/lib/fs.js');
var bonefs = FileSystem.fs;

bone.status.test = true;
bone.log.log('test start.');

describe('less', function() {
    it('correct', function(done) {
        bonefs.readFile('~/dist/style.css', function(error, buffer) {
            if(error) {
                return done(false);
            }

            done();
        });
    });

    it('@import track dependency', function(done) {
        bone.utils.fs.dependentFile('~/dist/style.css', function(error, list) {
            if(error) {
                return done(false);
            }

            if(_.intersection(list, [bonefs.pathResolve('./common.less')]).length == 1) {
                done();
            } else {
                done(false);
            }
        });
    });

    it('error', function(done) {
        bonefs.readFile('~/dist/style_illegal.css', function(error, buffer) {
            if(Data.logInfo.pop().indexOf('bone-act-less') != -1) {
                done();
            } else {
                done(false);
            }
        });
    });
});