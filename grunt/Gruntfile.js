module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: '\n;\n'
      },
      dist: {
        src: ['build/*.js'],
        dest: 'js/scripts-min.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/scripts-min.js'],
        dest: 'js/scripts-min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['build/*.css'],
        dest: 'css/styles-min.css'
      }
    },
    watch: {
      files: ['build/*'],
      tasks: ['concat', 'uglify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};