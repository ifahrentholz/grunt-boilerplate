module.exports = function(grunt) {
  grunt.registerTask('default', [
    'clean',
    'compass:prod',
    'concat',
    'uglify',
    'syncAssets',
    'linkAssetsProd',
    'notify'
  ]);
};