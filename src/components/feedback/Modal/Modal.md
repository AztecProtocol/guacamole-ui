#### Basic Usage

```jsx static
<Modal>
  <Block padding="l">
    Content
  </Block>
</Modal>
```

```js
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '200px',
  }}
>
  <Modal>
    <Block padding="l">
      Content
    </Block>
  </Modal>
</div>
```

#### Custom Header And Footer

```js
import Button from '../../general/Button';
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '300px',
  }}
>
  <Modal
    headerIcon={{ name: 'create' }}
    header="Edit Profile"
    footer={(
      <Button
        theme="primary"
        text="Submit"
      />
    )}
  >
    <Block padding="l">
      Content
    </Block>
  </Modal>
</div>
```

#### With Long Content

```js
import Button from '../../general/Button';
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '300px',
  }}
>
  <Modal
    footer={(
      <Button
        theme="primary"
        text="Submit"
      />
    )}
  >
    <Block padding="l">
      Content<br />
      Content<br />
      Content<br />
      Content<br />
      Content<br />
      Content<br />
      Content<br />
      Content<br />
    </Block>
  </Modal>
</div>
```

#### Vertical Alignment

```js
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '240px',
  }}
>
  <Modal valign="center">
    <Block padding="l">
      {'valign="center"'}
    </Block>
  </Modal>
</div>
```

```js
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '240px',
  }}
>
  <Modal valign="bottom">
    <Block padding="l">
      {'valign="bottom"'}
    </Block>
  </Modal>
</div>
```

#### Auto Width

```js
import Block from '../../layout/Block';
<div
  style={{
    position: 'relative',
    height: '240px',
  }}
>
  <Modal
    valign="center"
    autoWidth
  >
    <Block padding="l" style={{ maxWidth: '280px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Block>
  </Modal>
</div>
```

#### Close Modal

The following example allow user to press esc or click overlay to close the modal.

```js
import Button from '../../general/Button';
import Block from '../../layout/Block';
initialState = { hide: false };
<div
  style={{
    position: 'relative',
    height: '200px',
  }}
>
  <Button
    text="Open Modal"
    onClick={() => setState({ hide: false })}
    outlined
  />
  <Modal
    hide={state.hide}
    onClose={() => setState({ hide: true })}
    clickOverlayToClose
    pressEscToClose
  >
    <Block padding="l">
      Content
    </Block>
  </Modal>
</div>
```
