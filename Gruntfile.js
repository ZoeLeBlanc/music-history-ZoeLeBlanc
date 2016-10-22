module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      js: {
          src: ['./javascripts/bongs.js'],
          dest: 'dist/bundle.js'
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$", "Music", "alert" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['./javascripts/**/*.js']
    },
    watch: {
      options: {
        livereload: true,
      },
      javascripts: {
        files: ['./javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};