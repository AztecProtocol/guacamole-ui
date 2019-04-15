#### Basic Usage

See [SelectMenu](/#/Data/SelectMenu) for instruction on how to define *itemGroups*.

```jsx static
<SelectInput
  itemGroups={itemGroups}
/>
```

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <SelectInput
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
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```

#### Clear Selected Item

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={4}>
    <SelectInput
      enableClearSelected
      itemGroups={[
        {
          items: [
            {
              value: '1',
              size: 'xs',
              title: 'Giraffe',
            },
            {
              value: '2',
              size: 'xs',
              title: 'Cat',
            },
            {
              value: '3',
              size: 'xs',
              title: 'Rabbit',
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```

#### Editable SelectInput

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
initialState = { value: '' };
<Row>
  <Col column={4}>
    <SelectInput
      value={state.value}
      onChange={value => setState({ value })}
      onSelect={(value, item) => setState({ value: `${item.title} (${value})` })}
      editable
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
            },
          ],
        },
      ]}
    />
  </Col>
</Row>
```
