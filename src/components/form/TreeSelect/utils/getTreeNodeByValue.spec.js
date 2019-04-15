import getTreeNodeByValue from './getTreeNodeByValue';

describe('getTreeNodeByValue', () => {
  const data = [
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
  ];

  it('return null if no match node is found', () => {
    expect(getTreeNodeByValue(null, '')).toBe(null);
    expect(getTreeNodeByValue(data, 'some-value')).toBe(null);
  });

  it('return node data', () => {
    expect(getTreeNodeByValue(data, 'f3-3')).toEqual({
      value: 'f3-3',
      icon: {
        name: 'attachment',
        color: 'grey-light',
      },
      title: 'File 3 3',
      selectable: true,
    });
  });
});
