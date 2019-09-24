#### Basic Usage

```jsx static
<Avatar />
```

```js
<Avatar />
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar size="xxs" />
  <Avatar size="xs" />
  <Avatar size="s" />
  <Avatar size="m" />
  <Avatar size="l" />
  <Avatar size="xl" />
  <Avatar size="xxl" />
</DemoItems>
```

#### Alt

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar size="xxs" alt="LW" />
  <Avatar size="xs" alt="LW" />
  <Avatar size="s" alt="LW" />
  <Avatar size="m" alt="LW" />
  <Avatar size="l" alt="LW" />
  <Avatar size="xl" alt="LW" />
  <Avatar size="xxl" alt="LW" />
</DemoItems>
```

#### Backgrounds

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar
    alt="AZ"
    background="primary"
    color="white"
  />
  <Avatar
    alt="AZ"
    background="primary"
    iconBackground="orange"
    color="white"
  />
  <Avatar
    alt="AZ"
    src="https://www.aztecprotocol.com/icons/icon-48x48.png"
    background="primary"
    iconBackground="orange"
    color="white"
  />
</DemoItems>
```

#### Images

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar
    size="xxs"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="xs"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="s"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="m"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="l"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="xl"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
  <Avatar
    size="xxl"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
  />
</DemoItems>
```

#### Shapes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar
    shape="square"
    size="xxs"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="xs"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="s"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="m"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="l"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="xl"
    alt="LW"
  />
  <Avatar
    shape="square"
    size="xxl"
    alt="LW"
  />
</DemoItems>
```

#### Layers

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <DemoItems direction="row">
    <Avatar
      shape="circular"
      layer={1}
    />
    <Avatar
      shape="square"
      layer={1}
    />
  </DemoItems>
  <DemoItems direction="row">
    <Avatar
      shape="circular"
      layer={2}
    />
    <Avatar
      shape="square"
      layer={2}
    />
  </DemoItems>
  <DemoItems direction="row">
    <Avatar
      shape="circular"
      layer={3}
    />
    <Avatar
      shape="square"
      layer={3}
    />
  </DemoItems>
</DemoItems>
```

#### Inactive

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar inactive />
  <Avatar
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
    inactive
  />
</DemoItems>
```

#### Status

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
    status="online"
  />
  <Avatar
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
    status="offline"
  />
  <Avatar
    shape="square"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
    status="online"
  />
  <Avatar
    shape="square"
    src="https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80"
    status="offline"
  />
</DemoItems>
```

#### Broken Image

An Avatar will show icon and iconBackground if its image src fails to load.

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Avatar
    shape="square"
    src="https://icon2.kisspng.com/20171220/ypq/instagram-png-icon-5a3aafc62af570.341760101513795526176.jpg"
    background="white"
    iconName="camera"
    iconBackground="secondary-light"
    color="white"
  />
  <Avatar
    shape="square"
    src="https://someicon.com/notfound.jpg"
    background="white"
    iconName="camera"
    iconBackground="secondary-light"
    color="white"
  />
</DemoItems>
```
