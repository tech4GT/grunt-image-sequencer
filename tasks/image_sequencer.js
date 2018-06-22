/*
* grunt-image-sequencer
* https://github.com/tech4GT/grunt-image-sequencer
*
* Copyright (c) 2018 tech4GT
* Licensed under the MIT license.
*/

'use strict';
var shjs = require('shelljs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('image_sequencer', 'Integrates Image Sequencer Library into Grunt', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      steps: 'ndvi',
      config: {}
    });

    options.config = JSON.stringify(options.config);

    // Iterate over all specified file groups.
    this.data.forEach(function(f) {
      var filepaths = [];
      // Expand file paths
      f.src.forEach((filepath)=>{
        grunt.file.expand(filepath).forEach((expandedFilePath)=>{
          filepaths.push(expandedFilePath);
        });
      });

      var src = filepaths.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          shjs.exec(`sequencer -i '${filepath}' -s '${options.steps}' -o '${f.dest}' -c '${options.config}' --basic`)
          return true;
        }
      });

      // Print a success message.
      grunt.log.writeln(`Succesfully sequenced!!`);
    });
  });

};
