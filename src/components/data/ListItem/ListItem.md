#### Basic Usage

```jsx static
<ListItem
  title="Item 1"
/>
<ListItem
  title="Item 2"
/>
```

```js
<ListItem
  title="Item 1"
/>
<ListItem
  title="Item 2"
/>
```

#### Description

```js
<ListItem
  title="Item 1"
/>
<ListItem
  title="Item 2"
  description="Description for item 2"
/>
<ListItem
  title="Item 3"
  description="Description for item 3"
/>
```

#### Icons

```js
<ListItem
  iconName="attachment"
  title="File A"
/>
<ListItem
  iconName="attachment"
  title="File B"
  description="last modified: 01 Sep"
/>
<ListItem
  iconName="folder_open"
  title="Folder C"
/>
```

#### Avatars

```js
<ListItem
  title="John Smith"
  avatar={{
    src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
  }}
/>
```


#### Sizes

```js
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="xxs"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="xs"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="s"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="m"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="l"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="xl"
/>
<ListItem
  iconName="star_rate"
  title="Star Rating"
  size="xxl"
/>
```

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="xxs"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="xs"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="s"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="m"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="l"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="xl"
  />
  <ListItem
    title="John Smith"
    avatar={{
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
    }}
    size="xxl"
  />
</DemoItems>
```

#### Line Break

```js
import DemoItems from '../../demo/DemoItems';
<div style={{ width: '160px', border: '1px solid' }}>
  <DemoItems>
    <ListItem
      iconName="star_rate"
      title="Very long item title with narrow container"
    />
    <ListItem
      iconName="star_rate"
      title="Very long item title with nowrap={true}"
      nowrap
    />
    <ListItem
      iconName="star_rate"
      title="Very long item title with nowrap={ture} and showEllipsis={true}"
      nowrap
      showEllipsis
    />
    <ListItem
      title="Very long item title with narrow container"
      avatar={{
        src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
      }}
    />
    <ListItem
      title="Very long item title with nowrap={true}"
      avatar={{
        src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
      }}
      nowrap
    />
    <ListItem
      title="Very long item title with nowrap={ture} and showEllipsis={true}"
      avatar={{
        src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
      }}
      nowrap
      showEllipsis
    />
  </DemoItems>
</div>
```

#### Align Center

```js
import DemoItems from '../../demo/DemoItems';
<div style={{ width: '160px', border: '1px solid' }}>
  <DemoItems>
    <ListItem
      title="A very long item title aligns center with its icon"
      iconName="star_rate"
      valign="center"
    />
    <ListItem
      title="A very long item title aligns center with its avatar"
      avatar={{
        src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
      }}
      valign="center"
    />
  </DemoItems>
</div>
```
