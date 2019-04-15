#### Basic Usage

```jsx static
<Badge
  count={3}
/>
```

```js
<Badge
  count={3}
/>
```

#### Sizes

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Badge
    count={10}
    size="xxs"
  />
  <Badge
    count={10}
    size="xs"
  />
  <Badge
    count={10}
    size="s"
  />
  <Badge
    count={10}
    size="m"
  />
  <Badge
    count={10}
    size="l"
  />
  <Badge
    count={10}
    size="xl"
  />
  <Badge
    count={10}
    size="xxl"
  />
</DemoItems>
```

#### Large Counts

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Badge
    count={99}
  />
  <Badge
    count={999}
  />
  <Badge
    count={9999}
  />
  <Badge
    count={99999}
  />
</DemoItems>
```

#### Count Overflow

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Badge
    count={99}
    countOverflow={0}
  />
  <Badge
    count={99}
    countOverflow={10}
  />
  <Badge
    count={999}
    countOverflow={100}
  />
</DemoItems>
```

#### Dots

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Badge
    size="xxs"
    count={9}
    isDot
  />
  <Badge
    size="xs"
    count={9}
    isDot
  />
  <Badge
    size="s"
    count={9}
    isDot
  />
  <Badge
    size="m"
    count={9}
    isDot
  />
  <Badge
    size="l"
    count={9}
    isDot
  />
  <Badge
    size="xl"
    count={9}
    isDot
  />
  <Badge
    size="xxl"
    count={9}
    isDot
  />
</DemoItems>
```
