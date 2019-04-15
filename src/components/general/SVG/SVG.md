#### Basic Usage

```jsx static
import glyph from './demo/demo.svg';

<SVG
  glyph={glyph}
  width="60"
  height="60"
/>
```

```js
const glyph = require('./demo/demo.svg').default;
<SVG
  glyph={glyph}
  width="60"
  height="60"
/>
```

#### Colors

```js
const glyph = require('./demo/demo.svg').default;
<SVG
  glyph={glyph}
  width="60"
  height="60"
  color="secondary"
/>
```

#### Custom Colors

```js
const glyph = require('./demo/demo.svg').default;
<SVG
  glyph={glyph}
  width="60"
  height="60"
  fill="#C36781"
/>
```

#### Sizes

```js
const glyph = require('./demo/demo.svg').default;
<SVG
  glyph={glyph}
  width="30"
  height="30"
/>
```

#### Strokes

```js
const glyph = require('./demo/demo2.svg').default;
<SVG
  glyph={glyph}
  strokeWidth={2}
  strokeColor="secondary"
  width="40"
  height="40"
/>
```
