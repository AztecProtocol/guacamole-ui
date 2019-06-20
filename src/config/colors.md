```js
import DemoBlock from '../components/demo/DemoBlock';
import DemoItems from '../components/demo/DemoItems';
import Block from '../components/layout/Block';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
<DemoBlock
  title="Primary Colors"
>
  <DemoItems>
    <Row>
      <Col column={12}>
        <Block padding="m" background="primary">
          <div style={{ textAlign: 'center' }}>
            primary
          </div>
        </Block>
      </Col>
    </Row>
    <Row>
      <Col column={4}>
        <Block padding="m" background="primary-light">
          <div style={{ textAlign: 'center' }}>
            primary-light
          </div>
        </Block>
      </Col>
      <Col column={4}>
        <Block padding="m" background="primary-lighter">
          <div style={{ textAlign: 'center' }}>
            primary-lighter
          </div>
        </Block>
      </Col>
      <Col column={4}>
        <Block padding="m" background="primary-lightest">
          <div style={{ textAlign: 'center' }}>
            primary-lightest
          </div>
        </Block>
      </Col>
    </Row>
  </DemoItems>
</DemoBlock>
```

```js
import DemoBlock from '../components/demo/DemoBlock';
import DemoItems from '../components/demo/DemoItems';
import Block from '../components/layout/Block';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
<DemoBlock
  title="Secondary Color"
>
  <DemoItems>
    <Row>
      <Col column={3}>
        <Block padding="m" background="secondary">
          <div style={{ textAlign: 'center' }}>
            secondary
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="secondary-light">
          <div style={{ textAlign: 'center' }}>
            secondary-light
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="secondary-lighter">
          <div style={{ textAlign: 'center' }}>
            secondary-lighter
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="secondary-lightest">
          <div style={{ textAlign: 'center' }}>
            secondary-lightest
          </div>
        </Block>
      </Col>
    </Row>
  </DemoItems>
</DemoBlock>
```

```js
import DemoBlock from '../components/demo/DemoBlock';
import DemoItems from '../components/demo/DemoItems';
import Block from '../components/layout/Block';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
<DemoBlock
  title="Tertiary Colors"
  description="These colors are used primarily for content-specific needs, such as alerts and illustrations. They should never overpower the primary or secondary colors."
>
  <DemoItems>
    <Row>
      <Col column={3}>
        <Block padding="m" background="pink">
          <div style={{ textAlign: 'center' }}>
            pink
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="red">
          <div style={{ textAlign: 'center' }}>
            red
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="purple">
          <div style={{ textAlign: 'center' }}>
            purple
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="blue">
          <div style={{ textAlign: 'center' }}>
            blue
          </div>
        </Block>
      </Col>
    </Row>
    <Row>
      <Col column={3}>
        <Block padding="m" background="green">
          <div style={{ textAlign: 'center' }}>
            green
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="yellow">
          <div style={{ textAlign: 'center' }}>
            yellow
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="orange">
          <div style={{ textAlign: 'center' }}>
            orange
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="brown">
          <div style={{ textAlign: 'center' }}>
            brown
          </div>
        </Block>
      </Col>
    </Row>
  </DemoItems>
</DemoBlock>
```

```js
import DemoBlock from '../components/demo/DemoBlock';
import DemoItems from '../components/demo/DemoItems';
import Block from '../components/layout/Block';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
<DemoBlock
  title="Grey Scale"
>
  <DemoItems>
    <Row>
      <Col column={2}>
        <Block padding="m" background="black">
          <div style={{ textAlign: 'center' }}>
            black
          </div>
        </Block>
      </Col>
    </Row>
    <Row>
      <Col column={2}>
        <Block padding="m" background="grey-darker">
          <div style={{ textAlign: 'center' }}>
            grey-darker
          </div>
        </Block>
      </Col>
      <Col column={2}>
        <Block padding="m" background="grey-dark">
          <div style={{ textAlign: 'center' }}>
            grey-dark
          </div>
        </Block>
      </Col>
      <Col column={2}>
        <Block padding="m" background="grey">
          <div style={{ textAlign: 'center' }}>
            grey
          </div>
        </Block>
      </Col>
      <Col column={2}>
        <Block padding="m" background="grey-light">
          <div style={{ textAlign: 'center' }}>
            grey-light
          </div>
        </Block>
      </Col>
      <Col column={2}>
        <Block padding="m" background="grey-lighter">
          <div style={{ textAlign: 'center' }}>
            grey-lighter
          </div>
        </Block>
      </Col>
      <Col column={2}>
        <Block padding="m" background="grey-lightest">
          <div style={{ textAlign: 'center' }}>
            grey-lightest
          </div>
        </Block>
      </Col>
    </Row>
  </DemoItems>
  <DemoItems dark>
    <Row>
      <Col column={3}>
        <Block padding="m" background="white">
          <div style={{ textAlign: 'center' }}>
            white
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="white-light">
          <div style={{ textAlign: 'center' }}>
            white-light
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="white-lighter">
          <div style={{ textAlign: 'center' }}>
            white-lighter
          </div>
        </Block>
      </Col>
      <Col column={3}>
        <Block padding="m" background="white-lightest">
          <div style={{ textAlign: 'center' }}>
            white-lightest
          </div>
        </Block>
      </Col>
    </Row>
  </DemoItems>
</DemoBlock>
```
