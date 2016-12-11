# finducep.js
🕵 The easy way to find the info about your CEP.

## Install

You can get it on npm.

```
npm install finducep.js --save
```

Or bower, too.

```
bower install finducep.js --save
```

## Setup

First, include the script located on the `dist` folder.

```html
<script src="dist/finducep.min.js"></script>
```

Now, you need to instantiate it.

```js

const cep = 05022001;
const finducep = new FindUCep();

finducep.find(${cep})
	.then(response => {

	})
	.catch(error => console.log(error))
```


