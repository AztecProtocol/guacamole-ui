#### Basic Usage

```jsx static
<ProgressBar
  value={40}
/>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={6}>
    <ProgressBar
      value={40}
    />
  </Col>
</Row>
```

#### Colors

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={6}>
    <Block bottom="m">
      <ProgressBar
        value={40}
        activeColor="red"
      />
    </Block>
    <DemoItems dark>
      <ProgressBar
        value={40}
        baseColor="white"
        activeColor="green"
      />
    </DemoItems>
  </Col>
</Row>
```

#### Sizes

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={6}>
    <DemoItems>
      <ProgressBar
        size="xxs"
        value={40}
      />
      <ProgressBar
        size="xs"
        value={40}
      />
      <ProgressBar
        size="s"
        value={40}
      />
      <ProgressBar
        size="m"
        value={40}
      />
      <ProgressBar
        size="l"
        value={40}
      />
    </DemoItems>
  </Col>
</Row>
```

#### Rounded

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={6}>
    <DemoItems>
      <ProgressBar
        size="xxs"
        value={40}
        rounded
      />
      <ProgressBar
        size="xs"
        value={40}
        rounded
      />
      <ProgressBar
        size="s"
        value={40}
        rounded
      />
      <ProgressBar
        size="m"
        value={40}
        rounded
      />
      <ProgressBar
        size="l"
        value={40}
        rounded
      />
    </DemoItems>
  </Col>
</Row>
```

#### With Label

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={6}>
    <DemoItems>
      <ProgressBar
        value={40}
        showLabel
      />
      <ProgressBar
        value={40}
        labelSize="xxs"
        labelColor="red"
        labelWeight="bold"
        showLabel
      />
    </DemoItems>
  </Col>
</Row>
```

#### Custom Label

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={6}>
    <ProgressBar
      value={40}
      formatLabel={(value, base) => `${value}/${base}`}
      showLabel
    />
  </Col>
</Row>
```
