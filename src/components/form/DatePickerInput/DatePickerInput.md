#### Basic Usage

```jsx static
<DatePickerInput />
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <DatePickerInput />
  </Col>
</Row>
```

#### Select Multiple Days

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={6}>
    <DatePickerInput
      numberOfDays={2}
    />
  </Col>
</Row>
```

#### Change Date Format

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <DatePickerInput
      inputDateFormat="Do MMM"
    />
  </Col>
</Row>
```

#### Change Entire Displayed Text

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';

const refineInputValue = ([day1, day2]) => {
  const date1 = day1 ? day1.format('M/D') : '____';
  const date2 = day2 ? day2.format('M/D') : '____';

  return `from ${date1} to ${date2}`;
}

<Row>
  <Col column={4}>
    <DatePickerInput
      label="Select day range"
      numberOfDays={2}
      refineInputValue={refineInputValue}
      singleInput
    />
  </Col>
</Row>
```
