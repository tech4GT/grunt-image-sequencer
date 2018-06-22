/*
 * grunt-image-sequencer
 * https://github.com/tech4GT/grunt-image-sequencer
 *
 * Copyright (c) 2018 tech4GT
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    image_sequencer: {
        options: {
          steps: 'invert'
        },
        files: [
          {dest: 'tmp',src: ['test/*.png']}
        ]
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s)
  grunt.registerTask('default', ['clean', 'image_sequencer']);

};
