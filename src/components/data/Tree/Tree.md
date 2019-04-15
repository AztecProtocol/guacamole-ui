#### Basic Usage

```jsx static
<Tree
  data={[
    {
      value: 'f1',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 1',
    },
    {
      value: 'f2',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 2',
      data: [
        {
          value: 'f2-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 2 1',
        },
        ...restFolder2Data,
      ],
    },
    ...restTreeData,
  ]}
/>
```

```js
<Tree
  data={[
    {
      value: 'd1',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 1',
    },
    {
      value: 'd2',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 2',
      data: [
        {
          value: 'f2-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 2 1',
        },
        {
          value: 'd2-a',
          icon: {
            name: 'folder',
            color: 'label',
          },
          title: 'Folder 2A',
          data: [
            {
              value: 'f2-a-1',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 1',
            },
            {
              value: 'f2-a-2',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 2',
            },
          ],
        },
      ],
    },
    {
      value: 'd3',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 3',
      data: [
        {
          value: 'f3-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 1',
        },
        {
          value: 'f3-2',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 2',
        },
        {
          value: 'f3-3',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 3',
        },
      ],
    },
  ]}
/>
```

#### Expand All

```js
<Tree
  data={[
    {
      value: 'd1',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 1',
    },
    {
      value: 'd2',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 2',
      data: [
        {
          value: 'f2-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 2 1',
        },
        {
          value: 'd2-a',
          icon: {
            name: 'folder',
            color: 'label',
          },
          title: 'Folder 2A',
          data: [
            {
              value: 'f2-a-1',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 1',
            },
            {
              value: 'f2-a-2',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 2',
            },
          ],
        },
      ],
    },
    {
      value: 'd3',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 3',
      data: [
        {
          value: 'f3-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 1',
        },
        {
          value: 'f3-2',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 2',
        },
        {
          value: 'f3-3',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 3',
        },
      ],
    },
  ]}
  defaultExpandAll
/>
```

#### Selectable Data

```js
<Tree
  data={[
    {
      value: 'd1',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 1',
    },
    {
      value: 'd2',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 2',
      data: [
        {
          value: 'f2-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 2 1',
          selectable: true,
        },
        {
          value: 'd2-a',
          icon: {
            name: 'folder',
            color: 'label',
          },
          title: 'Folder 2A',
          data: [
            {
              value: 'f2-a-1',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 1',
              selectable: true,
            },
            {
              value: 'f2-a-2',
              icon: {
                name: 'attachment',
                color: 'grey-light',
              },
              title: 'File 2A 2',
              selectable: true,
            },
          ],
        },
      ],
    },
    {
      value: 'd3',
      icon: {
        name: 'folder',
        color: 'label',
      },
      title: 'Folder 3',
      data: [
        {
          value: 'f3-1',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 1',
          selectable: true,
        },
        {
          value: 'f3-2',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 2',
          selectable: true,
        },
        {
          value: 'f3-3',
          icon: {
            name: 'attachment',
            color: 'grey-light',
          },
          title: 'File 3 3',
          selectable: true,
        },
      ],
    },
  ]}
/>
```
