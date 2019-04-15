#### Basic Usage

```jsx static
<Pie
  value={66}
  radius={80}
/>
```

```js
<Pie
  value={66}
  radius={80}
/>
```

#### Expand To Parent's Width

```js
import Block from '../../layout/Block';
<div style={{ width: '200px' }}>
  <Block
    stretch
    hasBorder
  >
    <Pie
      value={66}
    />
  </Block>
</div>
```

#### Starting Degree

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Pie
    value={36}
    startDeg={45}
    radius={80}
  />
  <Pie
    value={36}
    startDeg={90}
    radius={80}
  />
</DemoItems>
```

#### Stroke Width

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Pie
    value={66}
    radius={80}
    strokeWidth={12}
  />
  <Pie
    value={66}
    radius={80}
    strokeWidth={40}
  />
</DemoItems>
```

#### With Content

```js
import Text from '../../general/Text';
<Pie
  value={66}
  radius={80}
>
  <Text
    text="66%"
  />
</Pie>
```

#### Show track

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Pie
    value={66}
    radius={80}
    showTrack
  />
  <Pie
    value={66}
    radius={80}
    strokeColor="primary-lightest"
    showTrack
  />
</DemoItems>
```

#### Colors

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Pie
    value={66}
    radius={80}
    strokeColor="primary-lighter"
    fill="primary-lightest"
  />
  <Pie
    value={66}
    radius={80}
    strokeColor="green"
    showTrack
  />
</DemoItems>
```

#### Dynamic Value

```js
import TextInput from '../../form/TextInput';
initialState = { value: '0' };

<Pie
  value={state.value ? +state.value : 0}
  radius={80}
  fill="grey-lightest"
>
  <div style={{ width: '60px' }}>
    <TextInput
      value={state.value}
      onChange={value => setState({ value })}
      onKeyDown={({ keyCode }) => {
        switch (keyCode) {
          case 38:
            setState({ value: `${+state.value + 1}` });
            break;
          case 40:
            setState({ value: `${+state.value - 1}` });
            break;
          default:
        }
      }}
    />
  </div>
</Pie>
```

#### Show Value On Arc

```js
import TextInput from '../../form/TextInput';
initialState = { value: '30' };

<Pie
  value={state.value ? +state.value : 0}
  radius={80}
  fill="grey-lightest"
  showArcValue
>
  <div style={{ width: '60px' }}>
    <TextInput
      value={state.value}
      onChange={value => setState({ value })}
      onKeyDown={({ keyCode }) => {
        switch (keyCode) {
          case 38:
            setState({ value: `${+state.value + 1}` });
            break;
          case 40:
            setState({ value: `${+state.value - 1}` });
            break;
          default:
        }
      }}
    />
  </div>
</Pie>
```

Value will be outside of stroke when the width is too narrow

```js
import TextInput from '../../form/TextInput';
initialState = { value: '30' };

<Pie
  value={state.value ? +state.value : 0}
  radius={80}
  strokeWidth={10}
  fill="grey-lightest"
  showArcValue
>
  <div style={{ width: '60px' }}>
    <TextInput
      value={state.value}
      onChange={value => setState({ value })}
      onKeyDown={({ keyCode }) => {
        switch (keyCode) {
          case 38:
            setState({ value: `${+state.value + 1}` });
            break;
          case 40:
            setState({ value: `${+state.value - 1}` });
            break;
          default:
        }
      }}
    />
  </div>
</Pie>
```
