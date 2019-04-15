#### Basic Usage

By default, images will show placeholders before they are fully loaded. Under some circumstances, you can also use image's placeholder independently.

```jsx static
<ImagePlaceholder
  ratio="square"
/>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={2}>
    <ImagePlaceholder
      ratio="square"
    />
  </Col>
</Row>
```

#### Ratios

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={2}>
    <ImagePlaceholder
      ratio="square"
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="classic"
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="golden"
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="landscape"
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="ultra"
    />
  </Col>
</Row>
```

#### Loading

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={2}>
    <ImagePlaceholder
      ratio="square"
      isLoading
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="classic"
      isLoading
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="golden"
      isLoading
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="landscape"
      isLoading
    />
  </Col>
  <Col column={2}>
    <ImagePlaceholder
      ratio="ultra"
      isLoading
    />
  </Col>
</Row>
```
