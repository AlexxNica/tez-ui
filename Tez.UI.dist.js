/*!
 * Tez.UI v0.0.0-development
 * UI add-on for amazing Tez.js library
 * 2016, @dalisoft. Licensed under Apache-2.0 license
 * https://github.com/dalisoft/tez-ui, https://github.com/dalisoft/tez
 */

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['tez.js', 'dom-parser'], factory);
	} else if (typeof module !== "undefined" && module.exports) {
		module.exports = factory(require('tez.js'), require('dom-parser'));
	} else if (typeof window !== "undefined" && window.document) {
		window.UI = factory(window.Tez, DOMParser);
	}
}(function (tez, DOMParser_constructor) {
	return class UI {
		static createHTMLString({
			tag,
			attrs,
			content
		}) {
			return `<${tag} ${attrs}>${content}</${tag}>`;
		}
		static ui2node({
			input,
			type = `text/html`
		}) {
		if (Array.isArray(input)) {
			return input;
		} else {
			let node = new DOMParser_constructor().parseFromString(typeof(input) === "string" ? input : typeof(input) === "object" ? UI.createHTMLString(input) : `<div/>`, type);
			return Array.from(node.getElementsByTagName('body')[0].childNodes);
		}
		}
		static node2apply({
			input,
			parent
		}) {
			let appl = input && input.nodeType ? input : typeof(input) === "string" || typeof(input) === "object" ? UI.ui2node({input}) : [];
			if (parent !== undefined) {
				let getChildNodes = Array.from(appl),
					child;
				while (child = getChildNodes.shift()) {
					parent.appendChild(child);
				}
				return parent;
			}
			return null;
		}
		static createUIElement({
			param,
			context
		}) {
			let doneRes = UI.node2apply(param, context);
			return doneRes;
		}
		static get UIElements () {
			return {
				Button: UI.ui2node({
					input: {
					tag: `button`,
					attrs: `class="btn btn-primary"`,
					content: `Button`
					}
				})
			}
		}

	}
}));