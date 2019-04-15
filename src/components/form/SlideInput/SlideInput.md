#### Basic Usage

```jsx static
<SlideInput
  hint="Slide to unlock"
  message="Unlocked!"
/>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <SlideInput
      hint="Slide to unlock"
      message="Unlocked!"
    />
  </Col>
</Row>
```

#### Sizes

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={3}>
    <DemoItems>
      <SlideInput
        size="xs"
        hint="Slide to unlock"
        message="Unlocked!"
      />
      <SlideInput
        size="s"
        hint="Slide to unlock"
        message="Unlocked!"
      />
      <SlideInput
        size="m"
        hint="Slide to unlock"
        message="Unlocked!"
      />
      <SlideInput
        size="l"
        hint="Slide to unlock"
        message="Unlocked!"
      />
    </DemoItems>
  </Col>
</Row>
```

#### Loading

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <SlideInput
      hint="Unlocking"
      value
      isLoading
    />
  </Col>
</Row>
```
