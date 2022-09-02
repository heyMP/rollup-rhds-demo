# Red Hat Design System Demo

[Preview](https://rollup-rhds-demo.vercel.app/)

This repo serves as an example of how you can use [Rollup](https://rollupjs.org/guide/en/) to create a custom bundle for your components.

## Usage

```
npm run build
```

This will generate the following two files.

```bash
dist/bundle.js
dist/bundle.css
```

You can then import those files.

```html
<!DOCTYPE html>
<head>
	<link href="dist/bundle.css" rel="stylesheet" />
</head>
<body>

  <script type="module" src="./dist/bundle.js"></script>
</body>
</html>
```


## Updating Dependencies

Add dependency to `package.json`

package.json
```json
{
  ...
  "dependencies": {
    "@cpelements/pfe-navigation": "^1.0.106",
    "@patternfly/pfe-icon": "1.12.3",
    "@rhds/elements": "latest"
  }
}
```

Import your dependency to the bundle entrypoint, `bundle.js`.

bundle.js
```js
import '@rhds/elements/rh-footer/rh-footer.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@cpelements/pfe-navigation/dist/pfe-navigation.js';
import '@patternfly/pfe-icon';
```

If you have any lightdom CSS that you would like to include in the bundle add it to the `lightdom.css.js`.

lightdom.css.js
```js
import '@rhds/elements/rh-footer/rh-footer-lightdom.css'
import '@cpelements/pfe-navigation/dist/pfe-navigation--lightdom.css'
```
