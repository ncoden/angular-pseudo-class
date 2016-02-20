export let PseudoClassCtrlDirective = ['config', function (config) {
  return {
    restrict: 'A',

    link: function (scope, element, attrs) {
      var pseudoClasses = attrs['pseudoClassCtrl'] || 'active hover';
      pseudoClasses = pseudoClasses.split(' ');

      for (var i in pseudoClasses) {
        (function(i) {
          var class_ = config.classPrefix + pseudoClasses[i];

          element.onPseudoClass(pseudoClasses[i],
            function(e) {
              element.addClass(class_);
            },
            function(e) {
              element.removeClass(class_);
            }
          )
        })(i);
      }
    }

  };
}]
