function PseudoClassCtrlLink(scope, element, attrs) {
  var pseudoClasses = attrs['pseudoClassCtrl'] || 'active hover';
  pseudoClasses = pseudoClasses.split(' ');

  for (var i = 0; i < pseudoClasses.length; i++) {
    (function(pseudoClass) {
      element.onPseudoClass(pseudoClass,
        function(e) {
          element.addClass('pseudo-class--' + pseudoClass);
        },
        function(e) {
          element.removeClass('pseudo-class--' + pseudoClass);
        }
      )
    })(pseudoClasses[i]);
  }
}

export function PseudoClassCtrlDirective() {
  return {
    restrict: 'A',
    link: PseudoClassCtrlLink
  };
}
