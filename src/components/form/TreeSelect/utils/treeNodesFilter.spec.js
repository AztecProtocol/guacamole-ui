import treeNodesFilter from './treeNodesFilter';

describe('treeNodesFilter', () => {
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

  it('return a new array containing nodes mathing keyword', () => {
    expect(treeNodesFilter(data, 'folder')).toEqual([
      {
        value: 'd1',
        icon: {
          name: 'folder',
          color: 'label',
        },
        title: 'Folder 1',
        highlight: true,
      },
      {
        value: 'd2',
        icon: {
          name: 'folder',
          color: 'label',
        },
        title: 'Folder 2',
        highlight: true,
        data: [
          {
            value: 'd2-a',
            icon: {
              name: 'folder',
              color: 'label',
            },
            title: 'Folder 2A',
            highlight: true,
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
        highlight: true,
      },
    ]);
  });
});
