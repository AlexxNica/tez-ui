# tez-ui
UI add-on for amazing Tez.js library

# Example
```javascript
import Tez from 'tez.js';
import * as Components from 'tez-ui';

const { Button, Checkbox } = Components;

class ButtonChrome {
	Render: () {
		return Button().code()
	}
}

let newConst = new Tez('<div/>');

	newConst.setView(ButtonChrome);

```