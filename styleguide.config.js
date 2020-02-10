require('@babel/register');
const path = require('path');
const webpackConfig = require('./webpack.config').default;
const {
  defaultFontFamily,
  fontSizeMap,
} = require('./src/config/typography');
const {
  defaultTextColor,
  defaultLabelColor,
  defaultLinkColor,
  defaultBorderColor,
  colorMap,
} = require('./src/config/colors');

module.exports = {
  title: 'Guacamole UI',
  require: [
    path.resolve(__dirname, './src/styles/reset.scss'),
  ],
  template: {
    head: {
      links: [
        {
          rel: 'canonical',
          href: 'https://ui.aztecprotocol.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: defaultFontFamily,
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 12,
      h1: fontSizeMap.xxl,
      h2: fontSizeMap.xl,
      h3: fontSizeMap.l,
      h4: fontSizeMap.m,
      h5: fontSizeMap.s,
      h6: fontSizeMap.xs,
    },
    color: {
      base: defaultTextColor,
      light: defaultLabelColor,
      lightest: colorMap['grey-lightest'],
      link: defaultLinkColor,
      linkHover: '#1b5dab',
      border: defaultBorderColor,
      sidebarBackground: colorMap['grey-lightest'],
      codeBackground: colorMap['grey-lightest'],
      codeBase: '#333',

      name: colorMap.green,
      type: colorMap.purple,

      codeComment: '#6d6d6d',
      codePunctuation: '#999',
      codeProperty: colorMap.orange,
      codeDeleted: colorMap.red,
      codeString: colorMap.green,
      codeInserted: colorMap.purple,
      codeOperator: '#9a6e3a',
      codeKeyword: colorMap.blue,
      codeFunction: colorMap.purple,
      codeVariable: colorMap.orange,
    },
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer'),
    ComponentsListRenderer: path.join(__dirname, 'styleguide/components/ComponentsListRenderer'),
    SectionHeadingRenderer: path.join(__dirname, 'styleguide/components/SectionHeadingRenderer'),
    HeadingRenderer: path.join(__dirname, 'styleguide/components/HeadingRenderer'),
    ReactComponentRenderer: path.join(__dirname, 'styleguide/components/ReactComponentRenderer'),
    PlaygroundRenderer: path.join(__dirname, 'styleguide/components/PlaygroundRenderer'),
    ParaRenderer: path.join(__dirname, 'styleguide/components/ParaRenderer'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'styleguide/categories/Introduction.md',
      sections: [
        {
          name: 'Custom Styles',
          content: 'src/config/custom.md',
          exampleMode: 'hide',
        },
      ],
      sectionDepth: 1,
    },
    {
      name: 'Basics',
      content: 'styleguide/categories/Basics.md',
      sections: [
        {
          name: 'Colors',
          content: 'src/config/colors.md',
          exampleMode: 'hide',
        },
        {
          name: 'Spacings',
          content: 'src/config/spacings.md',
          exampleMode: 'hide',
        },
        {
          name: 'Responsive Design',
          content: 'src/config/layout.md',
        },
      ],
      sectionDepth: 2,
    },
    {
      name: 'Layout',
      content: 'styleguide/categories/Layout.md',
      components: [
        'src/components/layout/Block/index.jsx',
        'src/components/layout/Col/index.jsx',
        'src/components/layout/FlexBox/index.jsx',
      ],
      sectionDepth: 3,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'General',
      content: 'styleguide/categories/General.md',
      components: [
        'src/components/general/Text/index.jsx',
        'src/components/general/TextButton/index.jsx',
        'src/components/general/Button/index.jsx',
        'src/components/general/ButtonGroup/index.jsx',
        'src/components/general/Tag/index.jsx',
        'src/components/general/Image/index.jsx',
        'src/components/general/Image/ImagePlaceholder.jsx',
        'src/components/general/Icon/index.jsx',
        'src/components/general/SVG/index.jsx',
      ],
      sectionDepth: 9,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'Form',
      content: 'styleguide/categories/Form.md',
      components: [
        'src/components/form/TextInput/index.jsx',
        'src/components/form/MaskedNumberInput/index.jsx',
        'src/components/form/AutoComplete/index.jsx',
        'src/components/form/SelectInput/index.jsx',
        'src/components/form/TreeSelect/index.jsx',
        'src/components/form/Checkbox/index.jsx',
        'src/components/form/SlideInput/index.jsx',
        'src/components/form/SwitchInput/index.jsx',
        'src/components/form/DatePicker/index.jsx',
        'src/components/form/DatePickerInput/index.jsx',
      ],
      sectionDepth: 10,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'Data',
      content: 'styleguide/categories/Data.md',
      components: [
        'src/components/data/Accordion/index.jsx',
        'src/components/data/Avatar/index.jsx',
        'src/components/data/AvatarGroup/index.jsx',
        'src/components/data/Badge/index.jsx',
        'src/components/data/List/index.jsx',
        'src/components/data/ListItem/index.jsx',
        'src/components/data/SelectMenu/index.jsx',
        'src/components/data/FlexTable/index.jsx',
        'src/components/data/Tree/index.jsx',
        'src/components/data/ProgressBar/index.jsx',
        'src/components/data/Calendar/index.jsx',
      ],
      sectionDepth: 12,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'Chart',
      content: 'styleguide/categories/Chart.md',
      components: [
        'src/components/charts/Pie/index.jsx',
        'src/components/charts/ConcentricPies/index.jsx',
      ],
      sectionDepth: 2,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'Feedback',
      content: 'styleguide/categories/Feedback.md',
      components: [
        'src/components/feedback/Modal/index.jsx',
        'src/components/feedback/Loader/index.jsx',
      ],
      sectionDepth: 2,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
    {
      name: 'Navigation',
      content: 'styleguide/categories/Navigation.md',
      components: [
        'src/components/navigation/Steps/index.jsx',
        'src/components/navigation/PageSteps/index.jsx',
        'src/components/navigation/Progress/index.jsx',
      ],
      sectionDepth: 2,
      usageMode: 'expand',
      exampleMode: 'collapse',
    },
  ],
  webpackConfig: webpackConfig('development'),
  pagePerSection: true,
};
