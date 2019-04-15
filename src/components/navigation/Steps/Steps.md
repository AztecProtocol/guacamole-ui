#### Basic Usage

```jsx static
<Steps
  totalSteps={4}
  currentStep={3}
/>
```

```js
<Steps
  totalSteps={4}
  currentStep={3}
/>
```

#### Sizes

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import DemoItems from '../../demo/DemoItems';
<Row>
  <Col column={6}>
    <DemoItems>
      <Steps
        size="xs"
        totalSteps={4}
        currentStep={3}
      />
      <Steps
        size="s"
        totalSteps={4}
        currentStep={3}
      />
      <Steps
        size="m"
        totalSteps={4}
        currentStep={3}
      />
      <Steps
        size="l"
        totalSteps={4}
        currentStep={3}
      />
    </DemoItems>
  </Col>
</Row>
```

#### Allow To Click On Previous Steps

```js
import Block from '../../layout/Block';
import TextButton from '../../general/TextButton';
initialState = { currentStep: 3 };
<div>
  <Steps
    totalSteps={4}
    currentStep={state.currentStep}
    onChange={currentStep => setState({ currentStep })}
    allowToGoBack
  />
  <Block top="m" align="right">
    <TextButton
      text="Next"
      onClick={() => setState({ currentStep: state.currentStep + 1 })}
      disabled={state.currentStep === 4}
    />
  </Block>
</div>
```
