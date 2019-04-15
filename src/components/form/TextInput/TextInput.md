#### Basic Usage

```jsx static
<TextInput />
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput />
  </Col>
</Row>
```

#### Placeholders

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      placeholder="Type something here"
    />
  </Col>
</Row>
```

#### Default Values

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      defaultValue="Hello"
    />
  </Col>
</Row>
```

#### Sizes

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      placeholder={'size="xs"'}
      size="xs"
    />
  </Col>
  <Col column={3}>
    <TextInput
      placeholder={'size="s"'}
      size="s"
    />
  </Col>
  <Col column={3}>
    <TextInput
      placeholder={'size="m"'}
      size="m"
    />
  </Col>
  <Col column={3}>
    <TextInput
      placeholder={'size="l"'}
      size="l"
    />
  </Col>
</Row>
```

#### Textarea

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      type="textarea"
      placeholder={'type="textarea"'}
      size="xs"
      rows={2}
    />
  </Col>
  <Col column={3}>
    <TextInput
      type="textarea"
      placeholder={'type="textarea"'}
      size="s"
      rows={2}
    />
  </Col>
  <Col column={3}>
    <TextInput
      type="textarea"
      placeholder={'type="textarea"'}
      size="m"
      rows={2}
    />
  </Col>
  <Col column={3}>
    <TextInput
      type="textarea"
      placeholder={'type="textarea"'}
      size="l"
      rows={2}
    />
  </Col>
</Row>
```

#### Inline

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      theme="inline"
      placeholder={'theme="inline"'}
      size="xs"
    />
  </Col>
  <Col column={3}>
    <TextInput
      theme="inline"
      placeholder={'theme="inline"'}
      size="s"
    />
  </Col>
  <Col column={3}>
    <TextInput
      theme="inline"
      placeholder={'theme="inline"'}
      size="m"
    />
  </Col>
  <Col column={3}>
    <TextInput
      theme="inline"
      placeholder={'theme="inline"'}
      size="l"
    />
  </Col>
</Row>
```

#### Disabled

```js
import DemoItems from '../../demo/DemoItems';
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
<DemoItems>
  <Row>
    <Col column={3}>
      <TextInput
        disabled
      />
    </Col>
    <Col column={3}>
      <TextInput
        placeholder={'disabled={true}'}
        disabled
      />
    </Col>
    <Col column={3}>
      <TextInput
        value="disabled"
        disabled
      />
    </Col>
  </Row>
  <Row>
    <Col column={3}>
      <TextInput
        theme="inline"
        disabled
      />
    </Col>
    <Col column={3}>
      <TextInput
        theme="inline"
        placeholder={'disabled={true}'}
        disabled
      />
    </Col>
    <Col column={3}>
      <TextInput
        theme="inline"
        value="disabled"
        disabled
      />
    </Col>
  </Row>
</DemoItems>
```

#### Status

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      status="error"
      placeholder={'status="error"'}
    />
  </Col>
  <Col column={3}>
    <TextInput
      status="focus"
      placeholder={'status="focus"'}
    />
  </Col>
</Row>
```

#### Validate

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      validate={(v) => {
        if (+v > 100) {
          return {
            success: false,
            error: '',
          };
        }
        return {
          success: true,
          error: '',
        };
      }}
    />
  </Col>
  <Col column={3}>
    <TextInput
      validate={(value) => {
        if (Number.isNaN(+value) || +value > 100) {
          return {
            success: false,
            error: 'Please enter a value less than or equal to 100',
          };
        }
        return {
          success: true,
          error: '',
        };
      }}
    />
  </Col>
</Row>
```

#### With Shake Effect

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      validate={(value) => {
        if (Number.isNaN(+value) || +value > 100) {
          return {
            success: false,
            error: 'Please enter a value less than or equal to 100',
          };
        }
        return {
          success: true,
          error: '',
        };
      }}
      withErrorShakeEffect
    />
  </Col>
</Row>
```

#### Controlled Error

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
initialState = { value: '', error: '' };

<Row>
  <Col column={3}>
    <TextInput
      value={state.value}
      error={state.error}
      onChange={(value) => {
        let error = '';
        if (Number.isNaN(+value) || +value > 100) {
          error = 'Please enter a value less than or equal to 100';
        }
        setState({
          value,
          error,
        });  
      }}
    />
  </Col>
  <Col column={3}>
    <TextInput
      value="101"
      error="Please enter a value less than or equal to 100"
    />
  </Col>
</Row>
```

#### With Icons

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <TextInput
      placeholder="Type something here"
      icon={{
        name: 'send',
      }}
      onClickIcon={() => alert('sent!')}
    />
  </Col>
  <Col column={3}>
    <TextInput
      defaultValue="10000"
      icon={{
        name: 'check',
        color: 'green',
        size: 'l',
      }}
    />
  </Col>
</Row>
```
