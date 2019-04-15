#### Basic Usage

Blocks are the foundation of a website's layout. Avoid writing customized CSS for an element's paddings and background. Use Block with pre-defined props to wrap content whenever possible.

```jsx static
<Block
  padding="m"
  background="secondary"
>
  Content
</Block>
```

```js
<Block
  padding="m"
  background="secondary"
>
  Content
</Block>
```

#### Background Colors

All system colors can be used as a Block's background color.

One benefit of defining background through Block is that default text color will be automatically adjusted and applied to children inside it. See how text colors become white with darker backgrounds in the following demonstration.

```js
<Block
  background="grey-lightest"
  padding="s"
>
  background="grey-lightest"
</Block>
<Block
  background="grey-lighter"
  padding="s"
>
  background="grey-lighter"
</Block>
<Block
  background="grey-light"
  padding="s"
>
  background="grey-light"
</Block>
<Block
  background="secondary-light"
  padding="s"
>
  background="secondary-light"
</Block>
<Block
  background="secondary"
  padding="s"
>
  background="secondary"
</Block>
<Block
  background="primary-lighter"
  padding="s"
>
  background="primary-lighter"
</Block>
<Block
  background="primary-light"
  padding="s"
>
  background="primary-light"
</Block>
<Block
  background="primary"
  padding="s"
>
  background="primary"
</Block>
```

#### Paddings

```js
<Block
  padding="xxs"
  background="grey-lighter"
>
  padding="xxs"
</Block>
<Block
  padding="xs"
  background="grey-light"
>
  padding="xs"
</Block>
<Block
  padding="s"
  background="grey"
>
  padding="s"
</Block>
<Block
  padding="m"
  background="grey-dark"
>
  padding="m"
</Block>
<Block
  padding="l"
  background="grey"
>
  padding="l"
</Block>
<Block
  padding="xl"
  background="grey-light"
>
  padding="xl"
</Block>
<Block
  padding="xxl"
  background="grey-lighter"
>
  padding="xxl"
</Block>
```

#### Asymmetric Padding Sizes

You can define Block's paddings like the way you define paddings in css.

```jsx static
<Block
  padding="xxl l s"
/>
```

is equivalent to

```jsx static
<Block
  top="xxl"
  right="l"
  bottom="s"
  left="l"
/>
```

```js
<Block
  padding="xxl l s"
  background="grey-light"
>
  padding="xxl l s"
</Block>
```


#### Responsive Padding Sizes

```js
<Block
  padding={{ m: 'l', s: 'xs', xs: 'xl' }}
  background="grey-light"
>
  {"padding={{ m: 'l', s: 'xs', xs: 'xl' }}"}
</Block>
```

```js
<Block
  padding={{ m: 'xl 0', s: '0 xxl', xs: 'xl s m' }}
  background="grey-light"
>
  {"padding={{ m: 'xl 0', s: '0 xxl', xs: 'xl s m' }}"}
</Block>
```

#### Borders

```js
import Row from '../Row';
import Col from '../Col';
<Row>
  <Col column={3}>
    <Block
      padding="m"
      hasBorder
    >
      {'hasBorder={true}'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      padding="m"
      borderColor="green"
      hasBorder
    >
      {'hasBorder={true}'}<br/>
      {'borderColor="green"'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      padding="m"
      hasBorderTop
    >
      {'hasBorderTop'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      padding="m"
      borderColor="red"
      hasBorderLeft
      hasBorderRight
    >
      {'hasBorderLeft={true}'}<br/>
      {'hasBorderRight={true}'}<br/>
      {'borderColor="red"'}
    </Block>
  </Col>
</Row>
```


#### Rounded Corners

```js
import DemoItems from '../../demo/DemoItems';
import Icon from '../../general/Icon';
import Row from '../Row';
import Col from '../Col';
<DemoItems>
  <Block
    padding="m"
    background="grey-light"
    borderRadius="xxs"
    inline
  >
    {'borderRadius="xxs"'}
  </Block>
  <Block
    padding="m"
    background="grey-light"
    borderRadius="xs"
    inline
  >
    {'borderRadius="xs"'}
  </Block>
  <Block
    padding="m"
    background="grey-light"
    borderRadius="s"
    inline
  >
    {'borderRadius="s"'}
  </Block>
  <Block
    padding="m"
    background="grey-light"
    borderRadius="m"
    inline
  >
    {'borderRadius="m"'}
  </Block>
  <Block
    padding="m"
    background="grey-light"
    borderRadius="l"
    inline
  >
    {'borderRadius="l"'}
  </Block>
  <Block
    className="lh0"
    padding="m"
    background="grey-light"
    borderRadius="circular"
    inline
  >
    <Icon name="search" />
  </Block>
</DemoItems>
```

#### Layers

```js
import Row from '../Row';
import Col from '../Col';
<Row>
  <Col column={3}>
    <Block
      background="white"
      padding="m"
      layer={0}
    >
      {'layer={0}'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      background="white"
      padding="m"
      layer={1}
    >
      {'layer={1}'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      background="white"
      padding="m"
      layer={2}
    >
      {'layer={2}'}
    </Block>
  </Col>
  <Col column={3}>
    <Block
      background="white"
      padding="m"
      layer={3}
    >
      {'layer={3}'}
    </Block>
  </Col>
</Row>
```

#### Inline block

```js
<Block
  padding="m"
  background="grey-light"
  inline
>
  {'inline={true}'}
</Block>
```

#### Content Alignments

```js
import Row from '../Row';
import Col from '../Col';
<Row>
  <Col column={4}>
    <Block
      padding="m"
      background="grey-light"
      align="left"
    >
      {'align="left"'}
    </Block>
  </Col>
  <Col column={4}>
    <Block
      padding="m"
      background="grey-light"
      align="center"
    >
      {'align="center"'}
    </Block>
  </Col>
  <Col column={4}>
    <Block
      padding="m"
      background="grey-light"
      align="right"
    >
      {'align="right"'}
    </Block>
  </Col>
</Row>
```

#### Responsive Alignments

```js
import Row from '../Row';
import Col from '../Col';
<Row>
  <Col column={6}>
    <Block
      padding="m"
      background="grey-light"
      align={{ m: 'center', s: 'right', xs: 'left' }}
    >
      {`align={{ m: 'center', s: 'right', xs: 'left' }}`}
    </Block>
  </Col>
</Row>
```
