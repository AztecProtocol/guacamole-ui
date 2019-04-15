#### Basic Usage

```jsx static
<PageSteps
  currentStep={2}
  steps={[
    {
      title: 'First',
    },
    {
      title: 'Second',
    },
    {
      title: 'Third',
    },
  ]}
/>
```

```js
<PageSteps
  currentStep={2}
  steps={[
    {
      title: 'First',
    },
    {
      title: 'Second',
    },
    {
      title: 'Third',
    },
  ]}
/>
```

#### Themes

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <PageSteps
      currentStep={2}
      steps={[
        {
          title: 'Primary Theme',
        },
        {
          title: 'Second',
        },
        {
          title: 'Third',
        },
      ]}
    />
  </DemoItems>
  <br />
  <br />
  <DemoItems dark>
    <PageSteps
      theme="white"
      currentStep={2}
      steps={[
        {
          title: 'White Theme',
        },
        {
          title: 'Second',
        },
        {
          title: 'Third',
        },
      ]}
    />
  </DemoItems>
</div>
```
