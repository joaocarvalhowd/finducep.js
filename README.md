# finducep.js
🕵  The easy way to find the info about your CEP.

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install finducep.js --save
```

Then add the `<script>` to your `index.html`:

```html
<script src="/node_modules/finducep.js/dist/finducep.min.js"></script>
```

### bower

```shell
bower install finducep.js
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/finducep.js/dist/finducep.min.js"></script>
```

## Example

```js

const cep = 05022001;
const finducep = new FindUCep();

finducep.find(cep)
	.then(response => console.log(response))
	.catch(error => console.log(error))
	
```

