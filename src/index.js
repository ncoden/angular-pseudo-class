import jQuery from 'jquery';
import jQueryPseudoClass from 'jquery-pseudo-class';

import {pseudoClassCtrlDirective} from './pseudo-class-ctrl.js';
import {pseudoClassScopeDirective} from './pseudo-class-scope.js';

let app = angular.module('angularPseudoClass')
    .directive('pseudoClassCtrl', pseudoClassCtrlDirective)
    .directive('pseudoClassScope', pseudoClassScopeDirective)
    ;

export default app;
