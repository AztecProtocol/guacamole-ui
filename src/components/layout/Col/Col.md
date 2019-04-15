#### Basic Usage

Use Col with Row as the grid system to help align page elements.

```jsx static
<Row>
  <Col column={4}>
    <div style={{ background: 'grey', height: '20px' }} />
  </Col>
  <Col column={8}>
    <div style={{ background: 'grey', height: '20px' }} />
  </Col>
</Row>
```

```js
import Row from '../Row';
<Row>
  <Col column={4}>
    <div style={{ background: 'grey', height: '20px' }} />
  </Col>
  <Col column={8}>
    <div style={{ background: 'grey', height: '10px' }} />
  </Col>
</Row>
```



#### Background Colors

```js
import Row from '../Row';
<Row>
  <Col background="primary">
    {'background="primary"'}
  </Col>
  <Col background="secondary">
    {'background="secondary"'}
  </Col>
  <Col background="grey">
    {'background="grey"'}
  </Col>
</Row>
```

#### Margin Sizes

```js
import DemoItems from '../../demo/DemoItems';
import Row from '../Row';
import Block from '../Block';
<DemoItems>
  <Row margin="xl">
    <Col margin="xl">
      <Block background="grey-light">
        {'margin="xl"'}
      </Block>
    </Col>
    <Col margin="xl">
      <Block background="grey-light">
        {'margin="xl"'}
      </Block>
    </Col>
    <Col margin="xl">
      <Block background="grey-light">
        {'margin="xl"'}
      </Block>
    </Col>
  </Row>
  <Row margin="m">
    <Col margin="m">
      <Block background="grey-light">
        {'margin="m"'}
      </Block>
    </Col>
    <Col margin="m">
      <Block background="grey-light">
        {'margin="m"'}
      </Block>
    </Col>
    <Col margin="m">
      <Block background="grey-light">
        {'margin="m"'}
      </Block>
    </Col>
  </Row>
</DemoItems>
```

#### Responsive Margin Sizes

```js
import Row from '../Row';
import Block from '../Block';
<Row margin={{ m: 'm', s: 'xl', xs: 'xs' }}>
  <Col margin={{ m: 'm', s: 'xl', xs: 'xs' }}>
    <Block background="grey-light">
      {"margin={{ m: 'm', s: 'xl', xs: 'xs' }}"}
    </Block>
  </Col>
  <Col margin={{ m: 'm', s: 'xl', xs: 'xs' }}>
    <Block background="grey-light">
      {"margin={{ m: 'm', s: 'xl', xs: 'xs' }}"}
    </Block>
  </Col>
</Row>
```

#### Column Sizes

```js
import Row from '../Row';
import Block from '../Block';
<Row>
  <Col column={3}>
    <Block background="grey-light">
      {"column={3}"}
    </Block>
  </Col>
  <Col column={4}>
    <Block background="grey-light">
      {"column={4}"}
    </Block>
  </Col>
  <Col column={5}>
    <Block background="grey-light">
      {"column={5}"}
    </Block>
  </Col>
</Row>
```

#### Shifted Columns

```js
import Row from '../Row';
import Block from '../Block';
<Row>
  <Col column={3}>
    <Block background="grey-light">
      {'column={3}'}
    </Block>
  </Col>
  <Col column={3} shift={6}>
    <Block background="grey-light">
      {'column={3}'}<br />
      {'shift={6}'}
    </Block>
  </Col>
  <Col column={6} shift={3}>
    <Block background="grey-light">
      {'column={6}'}<br />
      {'shift={3}'}
    </Block>
  </Col>
</Row>
```
