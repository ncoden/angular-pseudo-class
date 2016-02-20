function PseudoClassCtrlLink(scope, element, attrs, config) {
  'ngInject';

  var pseudoClasses = attrs['pseudoClassCtrl'] || 'active hover';
  pseudoClasses = pseudoClasses.split(' ');

  for (i in pseudoClasses) {
    (function(i) {
      var class_ = config.classPrefix + pseudoClasses[i];

      element.onPseudoClass(pseudoClass,
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

export function PseudoClassCtrlDirective() {
  return {
    restrict: 'A',
    link: PseudoClassCtrlLink
  };
}
