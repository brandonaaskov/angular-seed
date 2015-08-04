describe('angular-seed', function () {
  let $compile, $rootScope

  beforeEach(module('angular-seed'))

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  describe('services', function () {
    describe('analytics', function () {
      let analytics, $location
      let inputs = [['a', 'b', 'c'], ['a'], [1, 2, 3], ['bacon']]
      let methods = ['page', 'pageview', 'track', 'identify']

      beforeEach(inject((_analytics_, _$location_) => {
        analytics = _analytics_
        $location = _$location_
      }))

      beforeEach(() => {
        jasmine.createSpyObj('window.analytics', methods)
      })

      it('should proxy methods to the underlying library', function () {
        methods.forEach(function (func) {
          analytics[func].apply(analytics)
          expect(window.analytics[func]).toHaveBeenCalled()
        })
      })

      it('should record virtual pageviews when we change pages', function() {
        $location.path('/404')
        $rootScope.$digest()
        expect(window.analytics.page).toHaveBeenCalled()

        $location.path('/')
        $rootScope.$digest()
        expect(window.analytics.page.calls.count()).toBe(2)
      })
    })

    // ------------------------- utils service
    describe('utils', () => {
      let utils
      beforeEach(inject((_utils_) => {
        utils = _utils_
      }))
  
      it('can make a string a number', function () {
        expect(utils.makeNumber('12')).toBe(12)
  
        let veryBadInput = ['very', 'bad', 'input']
        expect(utils.makeNumber(veryBadInput)).toEqual(veryBadInput)
      })
    })
  })

  describe('directives', () => {
  })
})
