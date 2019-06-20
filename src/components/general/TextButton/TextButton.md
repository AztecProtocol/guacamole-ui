#### Basic Usage

```jsx static
<TextButton
  text="Link"
  onClick={() => alert('clicked!')}
/>
```

```js
<TextButton
  text="Link"
  onClick={() => alert('clicked!')}
/>
```

#### Themes

```js
<TextButton
  text={'theme="normal"'}
  theme="normal"
/>    
<br />
<br />
<TextButton
  text={'theme="implicit"'}
  theme="implicit"
/>    
<br />
<br />
<TextButton
  text={'theme="underline"'}
  theme="underline"
/>
<br />
<br />
<TextButton
  text={'theme="uppercase"'}
  theme="uppercase"
/>    
```

#### Colors

```js
import DemoItems from '../../demo/DemoItems';
<div>
  <DemoItems size="s">
    <TextButton
      text="Green Link"
      color="green"
    />
    <TextButton
      text="Red Link"
      color="red"
    />
    <TextButton
      text="Label Link"
      color="label"
      theme="underline"
    />
  </DemoItems>
  <DemoItems
    size="s"
    dark
  >
    <TextButton
      text="White Link"
      color="white"
      theme="underline"
    />
    <TextButton
      text="White Lighter Link"
      color="white-lighter"
      theme="underline"
    />
  </DemoItems>
</div>
```

#### onClick

```js
<TextButton
  text="Link"
  onClick={() => alert('Clicked!')}
/>
```

#### href

```js
<TextButton
  text="Home Page"
  href="/"
/>
```

#### onClick & href

If both *onClick* and *href* props are defined, left click the link will trigger onClick, while right click will open the url in new tab.

```js
<TextButton
  text="Home Page"
  href="/"
  onClick={() => alert('clicked!')}
/>
```
