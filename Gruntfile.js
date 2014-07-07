/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: "assets/bootstrap/dist/css/",
          src: 'bootstrap.css',
          dest: "static/bootstrap/css/"
        }, {
          expand: true,
          cwd: "assets/bootstrap/dist/fonts/",
          src: '**',
          dest: "static/bootstrap/fonts"
        }, {
          expand: true,
          cwd: "assets/bootstrap/dist/js/",
          src: '*.min.js',
          dest: "static/bootstrap/js"
        }, {
          expand: true,
          cwd: "assets/jquery/dist/",
          src: '*.min.js',
          dest: "static/jquery"
        }]
      }
    },

    tasks: ['copy'],

  });

  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('build', ['copy']);
  grunt.registerTask('default', 'build');

};
