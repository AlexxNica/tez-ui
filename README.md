# tez-ui
UI add-on for amazing Tez.js library

# Example
```javascript
import * as Components from 'tez-ui';
import domClass from 'tez';

const { Button, Checkbox } = Components;

class ButtonChrome {
	Render: () {
		return Button().code()
	}
}

let newConst = new domClass('<div/>');

	newConst.setView(ButtonChrome);

```