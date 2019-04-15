#### Basic Usage

```jsx static
<Accordion
  title={(
    <Text
      size="m"
      text="Title"
      weight="bold"
    />
  )}
  content={(
    <Text
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sodales odio."
    />
  )}
/>
```

```js
import Text from '../../general/Text';
<Accordion
  title={(
    <Text
      size="m"
      text="Title"
      weight="bold"
    />
  )}
  content={(
    <Text
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sodales odio."
    />
  )}
/>
```

#### Controlled value

```js
import Text from '../../general/Text';
import TextButton from '../../general/TextButton';
import Block from '../../layout/Block';
initialState = { isOpen: true };

<div>
  <Block bottom="m">
    <TextButton
      text={`${state.isOpen ? 'Hide' : 'Show'} content`}
      onClick={() => setState({ isOpen: !state.isOpen })}
    />
  </Block>
  <Accordion
    isOpen={state.isOpen}
    title={(
      <Text
        size="m"
        text="Title"
        weight="bold"
      />
    )}
    content={(
      <Block
        padding="m"
        background="grey-lightest"
      >
        <Text
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed sodales odio."
        />
      </Block>
    )}
    onChange={isOpen => setState({ isOpen })}
  />
</div>
```
