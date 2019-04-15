#### Basic Usage

```jsx static
<ConcentricPies
  pies={[
    {
      value: 50,
    },
    {
      value: 42,
    },
  ]}
/>
```

```js
<ConcentricPies
  pies={[
    {
      value: 50,
    },
    {
      value: 42,
    },
  ]}
/>
```

#### Custom Stroke Widths And Spacings

```js
import FlexBox from '../../layout/FlexBox';
import Text from '../../general/Text';

<ConcentricPies
  pies={[
    {
      value: 100,
      spacing: 32,
      strokeWidth: 16,
      strokeColor: 'grey-lighter',
      delay: 0,
    },
    {
      value: 75,
      spacing: 0,
      strokeWidth: 24,
      strokeColor: 'secondary',
    },
    {
      value: 42,
      spacing: 16,
      strokeWidth: 32,
      strokeColor: 'green',
      showArcValue: true,
    },
  ]}
  startDeg={20}
>
  <FlexBox
    direction="column"
    valign="center"
  >
    <Text
      text="$50m"
      size="xs"
      weight="semibold"
    />
    <Text
      text="75%"
      size="xxs"
      color="label"
      weight="bold"
    />
  </FlexBox>
</ConcentricPies>
```
