#### Basic Usage

```jsx static
<MaskedNumberInput />
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput />
  </Col>
</Row>
```

#### Placeholders

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput
      placeholder="Enter Value"
    />
  </Col>
</Row>
```

#### Default value

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput
      defaultValue={1248000}
    />
  </Col>
</Row>
```

#### Allow Decimal Point

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput
      defaultValue={124800.12}
      allowDecimal
    />
  </Col>
</Row>
```

#### Allow Negative Value

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput
      defaultValue={-12480}
      allowNegative
    />
  </Col>
</Row>
```

#### Prefix and Suffix

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={3}>
    <MaskedNumberInput
      value={state.value}
      prefix="L + "
      suffix=" BPS"
    />
  </Col>
  <Col column={3}>
    <MaskedNumberInput
      value={state.value}
      placeholder="Enter Value"
      prefix="L + "
      suffix=" BPS"
      allowNegative
      allowDecimal
    />
  </Col>
</Row>
```

#### Controlled Value

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
import Text from '../../general/Text';
initialState = { value: '-12480.01' };

<Row>
  <Col column={3}>
    <MaskedNumberInput
      value={state.value}
      onChange={value => setState({ value })}
      allowDecimal
      allowNegative
    />
    <Block top="m">
      <Text
        text={state.value}
      />
    </Block>
  </Col>
</Row>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
import Text from '../../general/Text';
initialState = { value: '-12480.01' };

<Row>
  <Col column={3}>
    <MaskedNumberInput
      value={state.value}
      onChange={value => setState({ value })}
      prefix="£ "
      allowDecimal
      allowNegative
    />
    <Block top="m">
      <Text
        text={state.value}
      />
    </Block>
  </Col>
</Row>
```

#### Validate Value

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
import Text from '../../general/Text';
initialState = { value: '' };

<Row>
  <Col column={3}>
    <MaskedNumberInput
      value={state.value}
      onChange={value => setState({ value })}
      validate={(v) => {
        if (+v > 100) {
          return {
            success: false,
            error: 'Value should be less than or equal to 100',
          };
        }
        return {
          success: true,
          error: '',
        };
      }}
      prefix="£ "
      allowDecimal
    />
    <Block top="m">
      <Text
        text={state.value}
      />
    </Block>
  </Col>
</Row>
```

#### Allow Big Numbers

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';

initialState = { value: '1000000000000000000.001' };

<Row>
  <Col column={6}>
    <MaskedNumberInput
      value={state.value}
      onChange={value => setState({ value })}
      maxValue="1000000000000000000000000"
      minValue="0"
      allowDecimal
    />
  </Col>
</Row>
```
