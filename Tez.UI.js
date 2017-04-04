(function() {
	'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIComponents = function () {
	function UIComponents() {
		_classCallCheck(this, UIComponents);
	}

	_createClass(UIComponents, null, [{
		key: 'Button',
		value: function Button(_ref) {
			var _ref$attrs = _ref.attrs,
			    attrs = _ref$attrs === undefined ? '' : _ref$attrs,
			    _ref$value = _ref.value,
			    value = _ref$value === undefined ? 'Button' : _ref$value,
			    _ref$className = _ref.className,
			    className = _ref$className === undefined ? '' : _ref$className,
			    _ref$size = _ref.size,
			    size = _ref$size === undefined ? 'tui-default-size' : _ref$size,
			    _ref$theme = _ref.theme,
			    theme = _ref$theme === undefined ? 'tui-default-theme' : _ref$theme;

			return function () {
				function ButtonComponent() {
					_classCallCheck(this, ButtonComponent);
				}

				_createClass(ButtonComponent, null, [{
					key: 'code',
					value: function code() {
						return '\n\t\t<div \n\t\tclass="\n\t\ttui-button \n\t\t' + className + '\n\t\t' + size + ' \n\t\t' + theme + ' \n\t\t' + attrs + '">\n\t\t' + value + '\n\t\t</div>';
					}
				}, {
					key: 'js',
					value: function js() {
						return {
							on: {
								hover: function hover() {
									// Hover action here
								}
							}
						};
					}
				}]);

				return ButtonComponent;
			}();
		}
	}, {
		key: 'Checkbox',
		value: function Checkbox(_ref2) {
			var _ref2$attrs = _ref2.attrs,
			    attrs = _ref2$attrs === undefined ? '' : _ref2$attrs,
			    _ref2$id = _ref2.id,
			    id = _ref2$id === undefined ? 'checkbox_01' : _ref2$id,
			    _ref2$className = _ref2.className,
			    className = _ref2$className === undefined ? '' : _ref2$className,
			    _ref2$size = _ref2.size,
			    size = _ref2$size === undefined ? 'tui-default-size' : _ref2$size,
			    _ref2$theme = _ref2.theme,
			    theme = _ref2$theme === undefined ? 'tui-default-theme' : _ref2$theme,
			    _ref2$checked = _ref2.checked,
			    checked = _ref2$checked === undefined ? 'checked' : _ref2$checked;

			return function () {
				function ButtonComponent() {
					_classCallCheck(this, ButtonComponent);
				}

				_createClass(ButtonComponent, null, [{
					key: 'code',
					value: function code() {
						return '\n\t\t<label \n\t\tfor="\n\t\t' + id + '" \n\t\tclass="\n\t\ttui-checkbox \n\t\t' + className + '\n\t\t' + size + ' \n\t\t' + theme + ' \n\t\t' + attrs + '">\n\t\t' + value + '\n\t\t</label>\n\t\t<input type="checkbox" ' + attrs + ' id="' + id + '" ' + checked + '/>';
					}
				}, {
					key: 'js',
					value: function js() {
						return {
							on: {
								change: function change() {
									// Change action here
								}
							}
						};
					}
				}]);

				return ButtonComponent;
			}();
		}
	}]);

	return UIComponents;
}();

this.UIComponents = UIComponents;

}());