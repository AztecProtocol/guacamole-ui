#### Basic Usage

```jsx static
<Icon name="favorite" />
```

```js
<Icon name="favorite" />
```

#### Names

Currently, google's material icons is our only icon source. Refer to [their website](https://material.io/icons/) for available icon names.

```js
<Icon name="sentiment_dissatisfied" />
<Icon name="sentiment_satisfied" />
<Icon name="mood" />
```

#### Colors

```js
<Icon
  name="sentiment_dissatisfied"
  color="red"
/>
<Icon
  name="sentiment_satisfied"
  color="blue"
/>
<Icon
  name="mood"
  color="green"
/>
```

#### Sizes

```js
<Icon
  name="mood"
  size="xxs"
/>
<Icon
  name="mood"
  size="xs"
/>
<Icon
  name="mood"
  size="s"
/>
<Icon
  name="mood"
  size="m"
/>
<Icon
  name="mood"
  size="l"
/>
<Icon
  name="mood"
  size="xl"
/>
<Icon
  name="mood"
  size="xxl"
  />
```

#### Responsive sizes

```js
<Icon
  name="mood"
  size={{ m: 'xl', s: 'xs', xs: 'l' }}
/>
```

#### Rotate Degrees

```js
<Icon
  name="mood"
  rotate={0}
/>
<Icon
  name="mood"
  rotate={90}
/>
<Icon
  name="mood"
  rotate={180}
/>
<Icon
  name="mood"
  rotate={270}
/>
```

#### Flip

```js
<Icon
  name="plus_one"
  size="l"
/>
<Icon
  name="plus_one"
  size="l"
  flipHorizontal
/>
<Icon
  name="plus_one"
  size="l"
  flipVertical
/>
```

#### Spin

```js
<Icon
  name="mood"
  spin
/>
```
