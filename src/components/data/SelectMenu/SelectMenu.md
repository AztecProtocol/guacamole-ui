#### Basic Usage

```jsx static
<SelectMenu
  itemGroups={[
    {
      items: [
        {
          value: '1',
          size: 'xs',
          title: 'Giraffe',
          avatar: {
            src: 'https://images.com/demo.png',
          },
        },
        ...otherItems,
      ],
    },
  ]}
/>
```

```js
<SelectMenu
  itemGroups={[
    {
      items: [
        {
          value: '1',
          size: 'xs',
          title: 'Giraffe',
          avatar: {
            src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
          },
        },
        {
          value: '2',
          size: 'xs',
          title: 'Cat',
          avatar: {
            src: 'https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=500&q=80',
          },
        },
        {
          value: '3',
          size: 'xs',
          title: 'Rabbit',
          avatar: {
            src: 'https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cde2672b8b988a6f9a9b457f6ff5ac5&auto=format&fit=crop&w=751&q=80',
          },
          href: '#',
        },
      ],
    },
  ]}
/>
```

#### With Border Around Menu

Props that could be used to decorate a [Block](/#/Layout/Block), such as *layer*, *borderRadius*, *background*, can also be applied to SelectMenu's menu.

```js
<SelectMenu
  hasBorder
  itemGroups={[
    {
      items: [
        {
          value: '1',
          size: 'xs',
          title: 'Giraffe',
          avatar: {
            src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
          },
        },
        {
          value: '2',
          size: 'xs',
          title: 'Cat',
          avatar: {
            src: 'https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=500&q=80',
          },
        },
        {
          value: '3',
          size: 'xs',
          title: 'Rabbit',
          avatar: {
            src: 'https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cde2672b8b988a6f9a9b457f6ff5ac5&auto=format&fit=crop&w=751&q=80',
          },
          href: '#',
        },
      ],
    },
  ]}
/>
```

#### With Dividers Between Items

```js
<SelectMenu
  hasDivider
  itemGroups={[
    {
      items: [
        {
          value: '1',
          size: 'xs',
          title: 'Giraffe',
          avatar: {
            src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
          },
        },
        {
          value: '2',
          size: 'xs',
          title: 'Cat',
          avatar: {
            src: 'https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=500&q=80',
          },
        },
        {
          value: '3',
          size: 'xs',
          title: 'Rabbit',
          avatar: {
            src: 'https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cde2672b8b988a6f9a9b457f6ff5ac5&auto=format&fit=crop&w=751&q=80',
          },
          href: '#',
        },
      ],
    },
  ]}
/>
```

#### Multiple Item Groups

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <SelectMenu
      borderRadius="default"
      layer={1}
      itemGroups={[
        {
          caption: {
            title: 'Group A',
          },
          toggleable: true,
          items: [
            {
              value: '1',
              size: 'xs',
              title: 'Giraffe',
              avatar: {
                src: 'https://images.unsplash.com/photo-1528140359459-3331965652c2?ixlib=rb-0.3.5&s=8aa80496aff04a3287f0f2172dd1b5aa&auto=format&fit=crop&w=750&q=80',
              },
            },
            {
              value: '2',
              size: 'xs',
              title: 'Cat',
              avatar: {
                src: 'https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=500&q=80',
              },
            },
          ],
        },
        {
          caption: {
            title: 'Group B',
          },
          toggleable: true,
          items: [
            {
              value: '3',
              size: 'xs',
              title: 'Rabbit',
              avatar: {
                src: 'https://images.unsplash.com/photo-1533993962330-7e4e1e64b2e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cde2672b8b988a6f9a9b457f6ff5ac5&auto=format&fit=crop&w=751&q=80',
              },
              href: '#',
            },
            {
              value: '4',
              size: 'xs',
              title: 'Jellyfish',
              avatar: {
                src: 'https://images.unsplash.com/photo-1518981670153-45f4078610fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1be84e7064aa93c95a2b000981136783&auto=format&fit=crop&w=750&q=80',
              },
              href: '#',
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```
