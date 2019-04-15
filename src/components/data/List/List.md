#### Basic Usage

See [ListItem](/#/Data/ListItem) for instructions of how to define a list item. 

```jsx static
<List
  items={listItems}
/>
```

```js
import TextButton from '../../general/TextButton';
<List
  items={[
    {
      iconName: 'add_circle',
      iconColor: 'green',
      title: 'File 1',
    },
    {
      iconName: 'add_circle',
      iconColor: 'green',
      title: 'File 2',
    },
    {
      iconName: 'add_circle',
      iconColor: 'green',
      title: (
        <TextButton
          text="File 3"
          onClick={() => alert('File 3')}
        />
      ),
    },
    {
      iconName: 'remove_circle',
      iconColor: 'red',
      title: 'File 4',
    },
    {
      iconName: 'remove_circle',
      iconColor: 'red',
      title: 'File 5',
    },
  ]}
/>
```
