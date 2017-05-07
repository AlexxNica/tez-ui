import { createElement }, Tez from 'tez.js';

export class UIElement {
	constructor(view) {
		this.props = view.props || {};
	}
	render() {
		const {
			attrs = '',
			value = 'Button',
			className = '',
			size = 'tui-default-size',
			theme = 'tui-default-theme',
			tag = 'button'
		} = this.props;
		return `
		<div 
		class="
		tui-${ tag } 
		${ className }
		${ size } 
		${ theme } 
		${ attrs }">
		${ value }
		</div>`
	}
}
