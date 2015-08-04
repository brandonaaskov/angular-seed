angular.module('angular-seed').directive('filepicker', function($window, config) {
  return {
    restrict: 'A',
    link: function(scope) {
      scope.filepicker = $window.filepicker
      scope.filepicker.setKey(config.filepicker.apiKey)
    },
    controller: function($scope) {
      let options = {
        picker: {
          services: ['COMPUTER', 'DROPBOX', 'BOX', 'GOOGLE_DRIVE'],
          container: 'window',
          multiple: true,
          mimetype: 'video/*'
        },
        store: {
          path: "uploads/"
        }
      }

      let success = function(inkBlob) {
        saveUploads(inkBlob)
        startJobs(inkBlob)
        return analytics.track('Upload: Success', inkBlob)
      }

      let error = function(FPError) {
        return analytics.track('Upload: Error', FPError.toString())
      }

      let saveUploads = function(inkBlob) {
        return _(inkBlob).each(function(file) {
          console.log('save each file?', file)
        })
      }

      let startJobs = function(inkBlob) {
        var keys
        keys = _(inkBlob).pluck('key')
        return _(keys).each(function(filepath) {
          var filename = _.getFilename(filepath)
        })
      }

      return $scope.pick = function () {
        return $scope.filepicker.pickAndStore(options.picker, options.store, success, error)
      }
    }
  }
})
