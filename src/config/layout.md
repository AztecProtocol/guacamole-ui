#### Device width breakpoints

There are currently 7 breakpoints in our design system:

 - xxs: 0
 - xs: 480px
 - s: 768px
 - m: 960px
 - l: 1248px
 - xl: 1690px
 - xxl: 2000px

Those pixel values are the lowerbounds of their corresponding breakpoint keys. That is, when you define a value for key *xs*, the value should apply to width above 480.

Some components have special props that could be an object with breakpoints as keys.

In the example below, the Block will have padding size *xs* when device width is more than or equal to 1248px; size *m* when device width is between 480px and 1247px; size *l* when device width is less than 480px.

```jsx static
<Block
  padding={{
    l: 'xs',
    s: 'm',
    xxs: 'l',
  }}
/>
```

&nbsp;
&nbsp;

#### Grid System

Grid system is the most common way for structuring responsive layout.

```jsx static
import {
  Row,
  Col,
} from '@aztec/guacamole-ui';

<Row>
  <Col column={{ m: 6, xxs: 12 }}>
    Column 1
  </Col>
  <Col column={{ m: 6, xxs: 12 }}>
    Column 2
  </Col>
</Row>
```

See [Col](/#/Layout/Col) for more details.

&nbsp;
&nbsp;

#### More complicated config

You can also use DeviceWidthListener to wrap other components for responsive design. It accepts a function as child component, which takes two arguments: *gt* (greater than) and *lt* (less than). It also requires an array of breakpoint keys that you want the child component to respond to. For example, if you register m, children will be re-rendered when change of device width affects its comparison with m. That is, from greater than m to less than m, and vice versa.

```jsx static
<DeviceWidthListener breakpoints={['m', 's', 'xs']}>
  {({
    gt,
    gte,
    lt,
    lte,
  }) => {
    let textGt = '';
    let textLt = '';

    if (gt.m) {
      textGt = 'Greater than m (>= 1248px)';
    } else if (gt.xs) {
      textGt = 'Greater than xs (>= 768px)';
    } else if (gte.xs) {
      textGt = 'Greater than and equal to xs (>= 480px)';
    }

    if (lt.s) {
      textLt = 'Less than s (< 768px)';
    } else if (lte.m) {
      textLt = 'Less than and equal to m (< 1248px)';
    }

    return (
      <div>
        <Text text={textGt} /><br/>
        <Text text={textLt} />
      </div>
    );
  }}
</DeviceWidthListener>
```

&nbsp;
&nbsp;

Change the width of your browser window to see the text below changes.

```js
import DeviceWidthListener from '../components/utils/DeviceWidthListener';
import Text from '../components/general/Text';

<DeviceWidthListener breakpoints={['m', 's', 'xs']}>
  {({
    gt,
    gte,
    lt,
    lte,
  }) => {
    let textGt = '';
    let textLt = '';

    if (gt.m) {
      textGt = 'Greater than m (>= 1248px)';
    } else if (gt.xs) {
      textGt = 'Greater than xs (>= 768px)';
    } else if (gte.xs) {
      textGt = 'Greater than and equal to xs (>= 480px)';
    }

    if (lt.s) {
      textLt = 'Less than s (< 768px)';
    } else if (lte.m) {
      textLt = 'Less than and equal to m (< 1248px)';
    }

    return (
      <div>
        <Text text={textGt} /><br/>
        <Text text={textLt} />
      </div>
    );
  }}
</DeviceWidthListener>
```

&nbsp;
&nbsp;

#### CSS decorators

There are some css class names in guacamole-ui.css for hiding content larger than or less than device breakpoints.

```jsx static
<div className="hide-gte-s">
  This will be hidden when device width >= 768px
</div>
<div className="hide-lte-s">
  This will be hidden when device width < 960px
</div>
<div className="hide-gt-s">
  This will be hidden when device width >= 960px
</div>
<div className="hide-lt-s">
  This will be hidden when device width < 768px
</div>
```

Try changing device width to see what texts are hidden in the following example:

```js
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';

<Row>
  <Col column={3} className="hide-gte-xxs">
    hide-gte-xxs
  </Col>
  <Col column={3} className="hide-gte-xs">
    hide-gte-xs
  </Col>
  <Col column={3} className="hide-gte-s">
    hide-gte-s
  </Col>
  <Col column={3} className="hide-gte-m">
    hide-gte-m
  </Col>
  <Col column={3} className="hide-gte-l">
    hide-gte-l
  </Col>
  <Col column={3} className="hide-gte-xl">
    hide-gte-xl
  </Col>
  <Col column={3} className="hide-gte-xxl">
    hide-gte-xxl
  </Col>
  <Col column={3} className="hide-lte-xxs">
    hide-lte-xxs
  </Col>
  <Col column={3} className="hide-lte-xs">
    hide-lte-xs
  </Col>
  <Col column={3} className="hide-lte-s">
    hide-lte-s
  </Col>
  <Col column={3} className="hide-lte-m">
    hide-lte-m
  </Col>
  <Col column={3} className="hide-lte-l">
    hide-lte-l
  </Col>
  <Col column={3} className="hide-lte-xl">
    hide-lte-xl
  </Col>
  <Col column={3} className="hide-lte-xxl">
    hide-lte-xxl
  </Col>
</Row>
```
