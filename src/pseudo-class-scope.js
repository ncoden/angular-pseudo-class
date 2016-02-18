var events = {
  active: ['mousedown', 'mouseup'],
  hover: ['mouseenter', 'mouseleave']
};

function PseudoClassScopeLink(scope, elem, attrs) {
  var pseudoClasses = attrs['pseudoClassScope'] || 'active hover';
  pseudoClasses = pseudoClasses.split(' ');

  for (var i = 0; i < pseudoClasses.length; i++) {
    (function(pseudoClass) {

      elem.on(events[pseudoClass][0], function(e) {
        e.stopPropagation();
        elem.parent().trigger(events[pseudoClass][1]);
      });

      elem.on(events[pseudoClass][1], function(e) {
        e.stopPropagation();
        elem.closest(':' + pseudoClass).trigger(events[pseudoClass][0]);
      });

    })(pseudoClasses[i]);
  }
}

export function PseudoClassScopeDirective() {
  return {
    restrict: 'A',
    link: PseudoClassScopeLink
  };
}
