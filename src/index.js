import jQuery from 'jquery';
import jQueryPseudoClass from 'jquery-pseudo-class';

import {config} from './config.js';
import {PseudoClassCtrlDirective} from './pseudo-class-ctrl.js';
import {PseudoClassScopeDirective} from './pseudo-class-scope.js';

angular.module('angularPseudoClass', [])
	.constant('config', config)
    .directive('pseudoClassCtrl', PseudoClassCtrlDirective)
    .directive('pseudoClassScope', PseudoClassScopeDirective)
    ;

export default 'angularPseudoClass';
