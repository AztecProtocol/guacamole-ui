#### Basic Usage

```jsx static
<Checkbox />
```

```js
<Checkbox />
```

#### Labels

```js
<Checkbox
  label="Pick me"
/>
```

#### Types

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Checkbox
    type="check"
    label={'type="check"'}
  />
  <Checkbox
    type="radio"
    label={'type="radio"'}
  />
</DemoItems>
```

#### Values

```js
import DemoItems from '../../demo/DemoItems';
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <DemoItems>
      <Checkbox
        type="check"
        label={'value={true}'}
        value={true}
      />
      <Checkbox
        type="check"
        label={'indeterminate={true}'}
        value={true}
        indeterminate
      />
      <Checkbox
        type="check"
        label={'value={false}'}
        value={false}
      />
    </DemoItems>
  </Col>
  <Col column={3}>
    <DemoItems>
      <Checkbox
        type="radio"
        label={'value={true}'}
        value={true}
      />
      <Checkbox
        type="radio"
        label={'indeterminate={true}'}
        value={true}
        indeterminate
      />
      <Checkbox
        type="radio"
        label={'value={false}'}
        value={false}
      />
    </DemoItems>
  </Col>
</Row>
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <DemoItems>
      <Checkbox
        size="xs"
        label="Pick me"
      />
      <Checkbox
        size="s"
        label="Pick me"
      />
      <Checkbox
        size="m"
        label="Pick me"
      />
      <Checkbox
        size="l"
        label="Pick me"
      />
    </DemoItems>
  </Col>
  <Col column={3}>
    <DemoItems>
      <Checkbox
        type="radio"
        size="xs"
        label="Pick me"
      />
      <Checkbox
        type="radio"
        size="s"
        label="Pick me"
      />
      <Checkbox
        type="radio"
        size="m"
        label="Pick me"
      />
      <Checkbox
        type="radio"
        size="l"
        label="Pick me"
      />
    </DemoItems>
  </Col>
</Row>
```

#### Disabled

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Checkbox
    label="Pick me"
    disabled
  />
  <Checkbox
    label="Pick me"
    defaultValue
    disabled
  />
  <Checkbox
    type="radio"
    label="Pick me"
    disabled
  />
  <Checkbox
    type="radio"
    label="Pick me"
    defaultValue
    disabled
  />
</DemoItems>
```

#### Dark Theme

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems dark>
  <Checkbox
    theme="dark"
    label="Pick me"
  />
  <Checkbox
    theme="dark"
    type="radio"
    label="Pick me"
  />
  <Checkbox
    theme="dark"
    label="Pick me"
    defaultValue
    disabled
  />
  <Checkbox
    theme="dark"
    type="radio"
    label="Pick me"
    defaultValue
    disabled
  />
</DemoItems>
```

#### Alignments

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Checkbox
    align="right"
  />
  <Checkbox
    label="Pick me"
    align="right"
  />
</DemoItems>
```
