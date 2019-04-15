#### Basic Usage

```jsx static
<ButtonGroup>
  <Button
    text="1"
    onClick={() => alert('1')}
  />
  <Button
    text="2"
    onClick={() => alert('2')}
  />
  <Button
    text="3"
    onClick={() => alert('3')}
  />
</ButtonGroup>
```

```js
import Button from '../Button';
<ButtonGroup>
  <Button
    text="1"
    onClick={() => alert('1')}
  />
  <Button
    text="2"
    onClick={() => alert('2')}
  />
  <Button
    text="3"
    onClick={() => alert('3')}
  />
</ButtonGroup>
```

#### Outlined Buttons

```js
import DemoItems from '../../demo/DemoItems';
import Button from '../Button';
<div>
  <DemoItems>
    <ButtonGroup>
      <Button
        text="1"
        outlined
      />
      <Button
        text="2"
        outlined
      />
      <Button
        text="3"
        outlined
      />
      <Button
        text="4"
        outlined
      />
    </ButtonGroup>
    <ButtonGroup>
      <Button
        text="1"
        theme="secondary"
        outlined
      />
      <Button
        text="2"
        theme="secondary"
        outlined
      />
      <Button
        text="3"
        theme="secondary"
        outlined
      />
      <Button
        text="4"
        theme="secondary"
        outlined
      />
    </ButtonGroup>
  </DemoItems>
  <DemoItems dark>
    <ButtonGroup>
      <Button
        text="1"
        theme="white"
        outlined
      />
      <Button
        text="2"
        theme="white"
        outlined
      />
      <Button
        text="3"
        theme="white"
        outlined
      />
      <Button
        text="4"
        theme="white"
        outlined
      />
    </ButtonGroup>
  </DemoItems>
</div>
```

#### With Icons

```js
import Icon from '../Icon';
import Button from '../Button';
<ButtonGroup>
  <Button>
    <Icon name="edit" />
  </Button>
  <Button>
    <Icon name="delete" />
  </Button>
</ButtonGroup>
```
