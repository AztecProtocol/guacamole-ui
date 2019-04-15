#### Basic Usage

```jsx static
<Button
  text="Click Me"
  onClick={() => alert('clicked!')}
/>
```

```js
<Button
  text="Click Me"
  onClick={() => alert('clicked!')}
/>
```

#### Themes

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <Button
      theme="primary"
      text="Primary Button"
    />
    <Button
      theme="secondary"
      text="Secondary Button"
    />
  </DemoItems>
  <DemoItems dark>
    <Button
      theme="white"
      text="White Button"
    />
  </DemoItems>
</div>
```

#### Outlined

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <Button
      theme="primary"
      text="Primary Button"
      outlined
    />
    <Button
      theme="secondary"
      text="Secondary Button"
      outlined
    />
  </DemoItems>
  <DemoItems dark>
    <Button
      theme="white"
      text="White Button"
      outlined
    />
  </DemoItems>
</div>
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Button
    text={'size="xs"'}
    size="xs"
  />
  <Button
    text={'size="s"'}
    size="s"
  />
  <Button
    text={'size="m"'}
    size="m"
  />
  <Button
    text={'size="l"'}
    size="l"
  />
</DemoItems>
```

#### Rounded

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Button
    text="Extra Small Button"
    size="xs"
    rounded
  />
  <Button
    text="Small Button"
    size="s"
    rounded
  />
  <Button
    text="Medium Button"
    size="m"
    rounded
  />
  <Button
    text="Large Button"
    size="l"
    rounded
  />
</DemoItems>
```

#### Expand

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Button
    text={'expand={false}'}
  />
  <Button
    text={'expand={true}'}
    expand
  />
</DemoItems>
```

#### Responsive button

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Button
    text="Responsive Button"
    size={{ m: 'm', s: 'l' }}
    expand={{ m: false, s: true }}
  />
</DemoItems>
```

#### With Icons

```js
import DemoItems from '../../demo/DemoItems';
import Icon from '../Icon';
<DemoItems>
  <Button
    text="Invite"
    icon={<Icon name="send" />}
  />
  <Button
    text="Add"
    icon={<Icon name="add_circle" />}
    alignIcon="left"
  />
</DemoItems>
```

#### Loading

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <Button
      theme="primary"
      text="Primary Button"
      isLoading
    />
    <Button
      theme="secondary"
      text="Secondary Button"
      isLoading
    />
    <Button
      theme="primary"
      text="Outlined Primary Button"
      outlined
      isLoading
    />
  </DemoItems>
  <DemoItems dark>
    <Button
      theme="white"
      text="Outlined White Button"
      outlined
      isLoading
    />
  </DemoItems>
</div>
```

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Button
    text="Extra Small Button"
    size="xs"
    isLoading
  />
  <Button
    text="Small Button"
    size="s"
    isLoading
  />
  <Button
    text="Medium Button"
    size="m"
    isLoading
  />
  <Button
    text="Large Button"
    size="l"
    isLoading
  />
</DemoItems>
```

#### Disabled

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems>
    <Button
      theme="primary"
      text="Primary Button"
      disabled
    />
    <Button
      theme="secondary"
      text="Secondary Button"
      disabled
    />
    <Button
      theme="primary"
      text="Outlined Primary Button"
      outlined
      disabled
    />
  </DemoItems>
  <DemoItems dark>
    <Button
      theme="white"
      text="Outlined White Button"
      outlined
      disabled
    />
  </DemoItems>
</div>
```
