#### Basic Usage

```jsx static
<Tag
  text="Tag"
/>
```

```js
<Tag
  text="Tag"
/>
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Tag
    text={'size="xxs"'}
    size="xxs"
  />
  <Tag
    text={'size="xs"'}
    size="xs"
  />
  <Tag
    text={'size="s"'}
    size="s"
  />
  <Tag
    text={'size="m"'}
    size="m"
  />
  <Tag
    text={'size="l"'}
    size="l"
  />
  <Tag
    text={'size="xl"'}
    size="xl"
  />
  <Tag
    text={'size="xxl"'}
    size="xxl"
  />
</DemoItems>
```

#### Rounded

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Tag
    text="rounded={true}"
    size="xxs"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="xs"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="s"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="m"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="l"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="xl"
    rounded
  />
  <Tag
    text="rounded={true}"
    size="xxl"
    rounded
  />
</DemoItems>
```

#### Colors

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Tag
    text={'color="primary"'}
    color="primary"
  />
  <Tag
    text={'color="green"'}
    color="green"
  />
  <Tag
    text={'color="red"'}
    color="red"
  />
</DemoItems>
```

#### Outlined

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Tag
    text={'outlined={true}'}
    color="primary"
    outlined
  />
  <Tag
    text={'outlined={true}'}
    color="green"
    outlined
  />
  <Tag
    text={'outlined={true}'}
    color="red"
    outlined
  />
</DemoItems>
```

#### With Icons

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Tag
    text="Locked"
    size="s"
    iconName="lock"
  />
  <Tag
    text="Favorite"
    size="m"
    iconName="favorite"
  />
  <Tag
    text="Copyright"
    size="l"
    iconName="copyright"
    alignIcon="left"
  />
</DemoItems>
```

#### Clickable

```js
<Tag
  text="Click Me"
  onClick={() => alert('Clicked!')}
/>
```
