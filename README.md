# Angular pseudo-class
>Take control on CSS pseudo-classes !

Provides a set of jQuery, angular and Sass features to easily control the CSS pseudo-classes in Javascript.


## Install
```shell
npm install angular-pseudo-class --save
```

If you use Sass, you need to import the mixins (path to `node_modules` can be different).
```sass
@import ./node_modules/angular-pseudo-class/angular-pseudo-class

```


## Usage

### Supported pseudo-classes

:construction: The module is still in development.
The following pseudo-classes are supported:
- `active`
- `hover`
- *... work in progress ...*

### Listen for pseudo-classes
:point_right: *Feature from [jquery-pseudo-class](https://github.com/ncoden/jquery-pseudo-class)*
```javascript
$elem.onPseudoClass( pseudo_class, function_in, function_out );
```

For exemple:
```javascript
var $elem = $('.js-button');

$elem.onPseudoClass('hover',
	function(e) {
		$elem.html('Mouse is in');
	},
	function(e) {
		$elem.html('Mouse is out');
	}
);

```

### Pseudo-class control
*:warning: The pseudo-classes controlled by Js are slower than standard CSS pseudo-classes. Use it only if you need it.*

Make a component pseudo-classes **controlled by the JS events**. So it can be **[stopped](https://api.jquery.com/event.preventdefault)**, **[prevent](https://api.jquery.com/event.stopimmediatepropagation)** or **[manually triggered](https://api.jquery.com/trigger)**.
If no pseudo-classes are given, all supported pseudo-classes are controlled.

```html
<button class = "js-button" pseudo-class-ctrl = "hover">
<!-- OR                 ... pseudo-class-ctrl = "active hover" ... -->
<!-- OR                 ... pseudo-class-ctrl ... -->
	My :hover is controlled !
</button>
```

In the CSS, the pseudo-class is triggered by:
```css
.js-button.pseudo-class--hover {
	...
}
```

With Sass:
```sass
.js-button {
	@include pseudo-class(hover) {
		...
	}
}
```

### Pseudo-class scope
In CSS, when you click on a child component, you clicked too on the parent. It can be undesired in some situations.

**Prevent the events propagation** on parents with `pseudo-class-scope`.
If no pseudo-classes are given, all supported pseudo-classes are stopped.

```html
<div class = "parent" pseudo-class-ctrl = "active">
	<a class = "child" pseudo-class-scope = "active"> I'm free ! </a>
	<!-- OR        ... pseudo-class-scope = "active hover" ... -->
	<!-- OR        ... pseudo-class-scope ... -->
</div>
```

For exemple, to color the background in grey or the link in red when you click on them.
```css
.parent.pseudo-class--active {
	background: grey;
}

.child.pseudo-class--active {
	color: red;
}
```

With Sass:
```sass
.parent {
	@include pseudo-class(active) {
		background: grey;
	}
}

.child {
	@include pseudo-class(active) {
		color: red;
	}
}
```


## Licence
This module is under the Apache 2.0 Licence.
Please refer to the LICENCE file for more details.

*Made with :heart: in Paris*
