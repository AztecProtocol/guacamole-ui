#### Basic Usage

```jsx static
<AvatarGroup
  avatars={[
    {
      iconName: 'person',
    },
    {
      iconName: 'tag_faces',
    },
    {
      iconName: 'local_florist',
    },
    {
      iconName: 'adb',
    },
  ]}
/>
```

```js
<AvatarGroup
  avatars={[
    {
      iconName: 'person',
    },
    {
      iconName: 'tag_faces',
    },
    {
      iconName: 'local_florist',
    },
    {
      iconName: 'adb',
    },
  ]}
/>
```

#### Tooltip

```js
<AvatarGroup
  avatars={[
    {
      iconName: 'person',
      tooltip: 'Person',
    },
    {
      iconName: 'tag_faces',
      tooltip: 'Tag Faces',
    },
    {
      iconName: 'local_florist',
      tooltip: 'Local Florist',
    },
    {
      iconName: 'adb',
      tooltip: 'Android',
    },
  ]}
/>
```

#### onClick

```js
<AvatarGroup
  avatars={[
    {
      iconName: 'person',
      onClick: () => alert('0'),
    },
    {
      iconName: 'tag_faces',
      onClick: () => alert('1'),
    },
    {
      iconName: 'local_florist',
      onClick: () => alert('2'),
    },
    {
      iconName: 'adb',
      onClick: () => alert('3'),
    },
    {
      alt: '+4',
      onClick: () => alert('clicked!'),
    },
  ]}
/>
```

#### Inactive

```js
<AvatarGroup
  avatars={[
    {
      src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
      tooltip: 'Giraffe',
      tooltipBackground: 'green',
    },
    {
      src: 'https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=500&q=80',
      tooltip: 'Cat',
      tooltipBackground: 'green',
    },
    {
      src: 'https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cde2672b8b988a6f9a9b457f6ff5ac5&auto=format&fit=crop&w=751&q=80',
      tooltip: 'Rabbit',
      inactive: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1518981670153-45f4078610fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1be84e7064aa93c95a2b000981136783&auto=format&fit=crop&w=750&q=80',
      tooltip: 'Jellyfish',
      inactive: true,
    },
    {
      alt: '+24',
      background: 'secondary-lightest',
    },
  ]}
/>
```
