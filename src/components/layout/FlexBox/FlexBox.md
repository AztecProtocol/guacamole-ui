#### Basic Usage

```jsx static
<FlexBox align="space-between">
  <div>Item 1</div>
  <div>Item 2</div>
</FlexBox>
```

```js
<FlexBox
  align="space-between"
>
  <div>Item 1</div>
  <div>Item 2</div>
</FlexBox>
```

#### Horizontal Alignments

```js
import DemoItems from '../../demo/DemoItems';
import Block from '../Block';
<DemoItems>
  <FlexBox align="flex-start">
    <Block background="grey-light">
      {'align="flex-start"'}
    </Block>
    <Block background="secondary">
      {'align="flex-start"'}
    </Block>
  </FlexBox>
  <FlexBox align="flex-end">
    <Block background="grey-light">
      {'align="flex-end"'}
    </Block>
    <Block background="secondary">
      {'align="flex-end"'}
    </Block>
  </FlexBox>
  <FlexBox align="center">
    <Block background="grey-light">
      {'align="center"'}
    </Block>
    <Block background="secondary">
      {'align="center"'}
    </Block>
  </FlexBox>
  <FlexBox align="space-around">
    <Block background="grey-light">
      {'align="space-around"'}
    </Block>
    <Block background="secondary">
      {'align="space-around"'}
    </Block>
  </FlexBox>
  <FlexBox align="space-between">
    <Block background="grey-light">
      {'align="space-between"'}
    </Block>
    <Block background="secondary">
      {'align="space-between"'}
    </Block>
  </FlexBox>
</DemoItems>
```

#### Vertical Alignments

```js
import DemoItems from '../../demo/DemoItems';
import Block from '../Block';
<DemoItems>
  <FlexBox valign="flex-start">
    <Block background="grey-light">
      {'valign="flex-start"'}
    </Block>
    <Block background="secondary" style={{ height: '50px' }}>
      {'valign="flex-start"'}
    </Block>
  </FlexBox>
  <FlexBox valign="flex-end">
    <Block background="grey-light">
      {'valign="flex-end"'}
    </Block>
    <Block background="secondary" style={{ height: '50px' }}>
      {'valign="flex-end"'}
    </Block>
  </FlexBox>
  <FlexBox valign="center">
    <Block background="grey-light">
      {'valign="center"'}
    </Block>
    <Block background="secondary" style={{ height: '50px' }}>
      {'valign="center"'}
    </Block>
  </FlexBox>
  <FlexBox valign="baseline">
    <Block background="grey-light">
      {'valign="baseline"'}
    </Block>
    <Block background="secondary" style={{ height: '50px', fontSize: '30px' }}>
      {'valign="baseline"'}
    </Block>
  </FlexBox>
  <div style={{ height: '50px' }}>
    <FlexBox valign="stretch" stretch>
      <Block background="grey-light">
        {'valign="stretch"'}
      </Block>
      <Block background="secondary">
        {'valign="stretch"'}
      </Block>
    </FlexBox>
  </div>
</DemoItems>
```

#### Directions

```js
import Col from '../Col';
import Block from '../Block';
<FlexBox direction="column">
  <Col column={2}>
    <Block background="grey-light">
      {'direction="column"'}
    </Block>
  </Col>
  <Col column={3}>
    <Block background="secondary">
      {'direction="column"'}
    </Block>
  </Col>
</FlexBox>
```
