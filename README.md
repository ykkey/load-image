# load-image
 Image read judgment with vanilla javascript

Install

```
$ npm install load-image.js
```
or
```
$yarn add load-image.js
```

# Use

```javascript
import loadImage from 'load-image.js';

const PATH_IMG = "/assets/img/";
let callbackEvent = () => {
    // fadein event
}
new loadImage({
    targetImageUrl : [
        PATH_IMG + `mv/background.jpg`,
        PATH_IMG + `mv/title.png`,
        PATH_IMG + `mv/image.png`,
    ],
    callback: callbackEvent
});

```