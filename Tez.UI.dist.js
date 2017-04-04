export default class UIComponents {
	static Button({
		attrs = '',
		value = 'Button',
		className = '',
		size = 'tui-default-size',
		theme = 'tui-default-theme'
	}) {
		return class ButtonComponent {
			static code() {
				return `
		<div 
		class="
		tui-button 
		${ className }
		${ size } 
		${ theme } 
		${ attrs }">
		${ value }
		</div>`
			}
			static js() {
				return {
					on: {
						hover() {
							// Hover action here
						}
					}
				}
			}
		}
	}
	static Checkbox({
		attrs = '',
		id = 'checkbox_01',
		className = '',
		size = 'tui-default-size',
		theme = 'tui-default-theme',
		checked = 'checked'
	}) {
		return class ButtonComponent {
			static code() {
				return `
		<label 
		for="
		${ id }" 
		class="
		tui-checkbox 
		${ className }
		${ size } 
		${ theme } 
		${ attrs }">
		${ value }
		</label>
		<input type="checkbox" ${attrs} id="${ id }" ${checked}/>`
			}
			static js() {
				return {
					on: {
						change() {
							// Change action here
						}
					}
				}
			}
		}
	}
}
