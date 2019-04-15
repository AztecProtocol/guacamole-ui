#### Basic Usage

```jsx static
<Progress
  totalSteps={4}
  currentStep={3}
/>
```

```js
<Progress
  totalSteps={4}
  currentStep={3}
/>
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Progress
    totalSteps={5}
    currentStep={3}
    size="xs"
  />
  <Progress
    totalSteps={5}
    currentStep={3}
    size="s"
  />
  <Progress
    totalSteps={5}
    currentStep={3}
    size="m"
  />
  <Progress
    totalSteps={5}
    currentStep={3}
    size="l"
  />
</DemoItems>
```

#### Themes & Clickable

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <Progress
      theme="primary"
      totalSteps={5}
      currentStep={3}
      onChange={i => alert(`clicked: step ${i}`)}
      allowToGoBack
    />
    <Progress
      theme="secondary"
      totalSteps={5}
      currentStep={3}
      onChange={i => alert(`clicked: step ${i}`)}
      allowToGoBack
    />
  </DemoItems>
  <DemoItems dark>
    <Progress
      theme="white"
      totalSteps={5}
      currentStep={3}
      onChange={i => alert(`clicked: step ${i}`)}
      allowToGoBack
    />
  </DemoItems>
</div>
```

#### With Icon

```js
<Progress
  currentStep={3}
  steps={[
    {
      title: 'One',
    },
    {
      title: 'Two',
    },
    {
      title: 'Three',
      icon: {
        name: 'grade',
        color: 'green',
      },
    },
    {
      title: 'Four',
    },
    {
      title: 'Five',
    },
  ]}
/>
```
