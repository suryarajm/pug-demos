module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
  pug: {
        compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "app/src",
              src: "**/*.pug",
              dest: "app/build",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    watch: {
          grunt: { files: ['Gruntfile.js'] },
          pug: {
          files: 'app/**/*.pug',
          tasks: ['pug']
       }
     }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-pug');
  // Default task.
  grunt.registerTask('build', 'Convert pug templates into html templates', ['pug']);
};
