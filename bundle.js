(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('tez.js')) :
	typeof define === 'function' && define.amd ? define(['tez.js'], factory) :
	(global.TezUI = factory(global.tez_js));
}(this, (function (tez_js) { 'use strict';

var tez_js__default = 'default' in tez_js ? tez_js['default'] : tez_js;

var UIElement = function UIElement(view) {
	this.props = view.props || {};
};
UIElement.prototype.render = function render () {
	var ref = this.props;
		var attrs = ref.attrs; if ( attrs === void 0 ) attrs = '';
		var value = ref.value; if ( value === void 0 ) value = 'Button';
		var className = ref.className; if ( className === void 0 ) className = '';
		var size = ref.size; if ( size === void 0 ) size = 'tui-default-size';
		var theme = ref.theme; if ( theme === void 0 ) theme = 'tui-default-theme';
		var tag = ref.tag; if ( tag === void 0 ) tag = 'button';
	return ("\n\t\t<div \n\t\tclass=\"\n\t\ttui-" + tag + " \n\t\t" + className + "\n\t\t" + size + " \n\t\t" + theme + " \n\t\t" + attrs + "\">\n\t\t" + value + "\n\t\t</div>")
};

return UIElement;

})));
