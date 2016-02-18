import jQuery from 'jquery';
import jQueryPseudoClass from 'jquery-pseudo-class';

import {PseudoClassCtrlDirective} from './pseudo-class-ctrl.js';
import {PseudoClassScopeDirective} from './pseudo-class-scope.js';

angular.module('angularPseudoClass', [])
    .directive('pseudoClassCtrl', PseudoClassCtrlDirective)
    .directive('pseudoClassScope', PseudoClassScopeDirective)
    ;

export default 'angularPseudoClass';
