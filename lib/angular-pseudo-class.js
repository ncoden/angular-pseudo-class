'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryPseudoClass = require('jquery-pseudo-class');

var _jqueryPseudoClass2 = _interopRequireDefault(_jqueryPseudoClass);

var _pseudoClassCtrl = require('./pseudo-class-ctrl.js');

var _pseudoClassScope = require('./pseudo-class-scope.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = angular.module('angularPseudoClass').directive('pseudoClassCtrl', _pseudoClassCtrl.pseudoClassCtrlDirective).directive('pseudoClassScope', _pseudoClassScope.pseudoClassScopeDirective);

exports.default = app;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PseudoClassCtrlDirective = PseudoClassCtrlDirective;
var events = {
  active: ['mousedown', 'mouseup'],
  hover: ['mouseenter', 'mouseleave']
};

function PseudoClassCtrlLink(scope, elem, attrs) {
  var pseudoClasses = attrs['pseudoClassCtrl'] || 'active hover';
  pseudoClasses = pseudoClasses.split(' ');

  for (var i = 0; i < pseudoClasses.length; i++) {
    (function (pseudoClass) {

      elem.on(events[pseudoClass][0], function (e) {
        e.stopPropagation();
        elem.parent().trigger(events[pseudoClass][1]);
      });

      elem.on(events[pseudoClass][1], function (e) {
        e.stopPropagation();
        elem.closest(':' + pseudoClass).trigger(events[pseudoClass][0]);
      });
    })(pseudoClasses[i]);
  }
}

function PseudoClassCtrlDirective() {
  return {
    restrict: 'A',
    link: PseudoClassCtrlLink
  };
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PseudoClassScopeDirective = PseudoClassScopeDirective;
function PseudoClassScopeLink(scope, element, attrs) {
  var pseudoClasses = attrs['pseudoClassScope'] || 'active hover';
  pseudoClasses = pseudoClasses.split(' ');

  for (var i = 0; i < pseudoClasses.length; i++) {
    (function (pseudoClass) {
      element.onPseudoClass(pseudoClass, function (e) {
        element.addClass('pseudo-class--' + pseudoClass);
      }, function (e) {
        element.removeClass('pseudo-class--' + pseudoClass);
      });
    })(pseudoClasses[i]);
  }
}

function PseudoClassScopeDirective() {
  return {
    restrict: 'A',
    link: PseudoClassScopeLink
  };
}
