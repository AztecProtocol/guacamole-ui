#### Basic Usage

```jsx static
<AutoComplete
  itemGroupsSource={itemGroups}
/>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <AutoComplete
      itemGroupsSource={[
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
            },
            {
              value: '4',
              size: 'xs',
              title: 'Alpaca',
              avatar: {
                src: 'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              },
            },
            {
              value: '5',
              size: 'xs',
              title: 'Kangaroo',
              avatar: {
                src: 'https://images.unsplash.com/photo-1519101279298-f92c1daf1abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=419&q=80',
              },
            },
            {
              value: '6',
              size: 'xs',
              title: 'Deer',
              avatar: {
                src: 'https://images.unsplash.com/photo-1534336056548-d8c5e081884b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80',
              },
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```

#### Maximum Results

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <AutoComplete
      maxVisibleItems={3}
      itemGroupsSource={[
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
            },
            {
              value: '4',
              size: 'xs',
              title: 'Alpaca',
              avatar: {
                src: 'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              },
            },
            {
              value: '5',
              size: 'xs',
              title: 'Kangaroo',
              avatar: {
                src: 'https://images.unsplash.com/photo-1519101279298-f92c1daf1abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=419&q=80',
              },
            },
            {
              value: '6',
              size: 'xs',
              title: 'Deer',
              avatar: {
                src: 'https://images.unsplash.com/photo-1534336056548-d8c5e081884b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80',
              },
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```

#### Empty Message

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <AutoComplete
      noResultsMessage="No results found."
      itemGroupsSource={[
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
            },
            {
              value: '4',
              size: 'xs',
              title: 'Alpaca',
              avatar: {
                src: 'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
              },
            },
            {
              value: '5',
              size: 'xs',
              title: 'Kangaroo',
              avatar: {
                src: 'https://images.unsplash.com/photo-1519101279298-f92c1daf1abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=419&q=80',
              },
            },
            {
              value: '6',
              size: 'xs',
              title: 'Deer',
              avatar: {
                src: 'https://images.unsplash.com/photo-1534336056548-d8c5e081884b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80',
              },
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```
