#### Basic Usage

```jsx static
<Loader />
```

```js
<Loader />
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Loader size="xxs" />
  <Loader size="xs" />
  <Loader size="s" />
  <Loader size="m" />
  <Loader size="l" />
  <Loader size="xl" />
  <Loader size="xxl" />
</DemoItems>
```

#### Themes

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
<Row>
  <Col column={6} background="white">
    <Block bottom="m">
      <Loader theme="primary" />
    </Block>
    <Block bottom="m">
      <Loader theme="secondary" />
    </Block>
    <Block bottom="m">
      <Loader theme="white" />
    </Block>
  </Col>
  <Col column={6} background="grey-darker">
    <Block bottom="m">
      <Loader theme="primary" />
    </Block>
    <Block bottom="m">
      <Loader theme="secondary" />
    </Block>
    <Block bottom="m">
      <Loader theme="white" />
    </Block>
  </Col>
</Row>
```


#### With Background

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={6} background="white">
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="white"
        hasBackground
      />
    </div>
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="secondary"
        hasBackground
      />
    </div>
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="primary"
        hasBackground
      />
    </div>
  </Col>
  <Col column={6} background="grey-darker">
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="white"
        hasBackground
      />
    </div>
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="secondary"
        hasBackground
      />
    </div>
    <div
      style={{
        position: 'relative',
        height: '100px',
      }}
    >
      <Loader
        theme="primary"
        hasBackground
      />
    </div>
  </Col>
</Row>
```

#### Controlled Loading Effect

```js
import Button from '../../general/Button';
initialState = { hide: true };
<div>
  <Button
    size="xs"
    text={state.hide ? 'Show' : 'Hide'}
    onClick={() => setState({ hide: !state.hide })}
  />
  <div
    style={{
      position: 'relative',
      height: '100px',
    }}
  >
    <Loader
      theme="primary"
      hide={state.hide}
      hasBackground
    />
  </div>
</div>
```
