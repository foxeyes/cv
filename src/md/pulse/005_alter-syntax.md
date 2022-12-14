```json
{
  "date": "08-07-2022",
  "title": "Symbiote.js v1.9.0 is released",
  "summary": "Now it supports additional (alternative) syntax for the template bindings. Documentation and examples will be updated ASAP.",
  "image": "https://ucarecdn.com/658b8efe-be77-4574-992f-3179b9219822/-/resize/200x200/-/format/auto/",
  "link": ""
}
```
# Symbiote.js v1.9.0 is released

Now it supports additional (alternative) syntax for the template bindings. 

Documentation and examples will be updated ASAP.
### Template example:
```html
<div set 
  -onclick="click"
  -inner_html="html"
  -style.background-color="cssBgColor"
  -style.color="cssColor">
</div>
<div set -text-content="text"></div>
```

### And the component code:
```js
import { BaseComponent } from '../../core/BaseComponent.js';
import TEMPLATE from './template.html'; // using webpack HTML loader

class MyApp extends BaseComponent {

  init$= {
    text: 'TEXT',
    cssColor: '#f00',
    cssBgColor: '#ff0',
    html: /*html*/ `<h2>TEST</h2>`,
    click: () => {
      console.log(this);
    },
  }

}

MyApp.template = TEMPLATE;
MyApp.reg('my-app');
```