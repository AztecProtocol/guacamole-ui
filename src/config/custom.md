Guacamole-UI allows you to easily change its pre-defined colors, font sizes, spacings, etc.

&nbsp;
&nbsp;

#### Add config file

First, create a file called `guacamole.config.js` in your project's root folder. And define your preferred theme:

```js static
module.exports = {
  theme: {
    colorMap: {
      primary: '#7174FF',
    },
    fontSizeMap: {
      m: '18px',
    },
  },
};
```

&nbsp;
&nbsp;

#### Generate files

Add the following command to your *package.json*:

```js static
{
  "scripts": {
    "generateStyles": "guacamole generateStyles"
  },
}
```

In your terminal, run:

```bash static
yarn generateStyles
```

That's it! A CSS file with your custom theme and a Sass variables file will be generated.

```bash static
MyProject
├── package.json
├── guacamole.config.js
├── guacamole
│   ├── guacamole.css
│   ├── guacamole-vars.scss
```

&nbsp;
&nbsp;

#### Change output path

You can also change the output files' folder and names by adding the following to your *guacamole.config.js*:

```js static
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, './testOutput'),
    filename: 'styles.css',
    variablesFilename: 'variables.scss',
  },
};
```

&nbsp;
&nbsp;

#### Configurable styles

```js static
module.exports = {
  theme: {
    // colors
    colorMap: {
      primary: 'rgb(18,38,63)',
      'primary-light': 'rgba(18,38,63, 0.8)',
      'primary-lighter': 'rgba(18,38,63, 0.5)',
      'primary-lightest': 'rgba(18,38,63, 0.1)',
      black: '#000000',
      'grey-darker': 'rgba(0, 0, 0, 0.85)',
      'grey-dark': 'rgba(0, 0, 0, 0.7)',
      grey: 'rgba(0, 0, 0, 0.45)',
      'grey-light': 'rgba(0, 0, 0, 0.2)',
      'grey-lighter': 'rgba(0, 0, 0, 0.1)',
      'grey-lightest': '#F9fbfd',
      white: '#FFFFFF',
      'white-light': 'rgba(255, 255, 255, 0.85)',
      'white-lighter': 'rgba(255, 255, 255, 0.5)',
      'white-lightest': 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgb(74,144,226)',
      'secondary-light': 'rgba(74, 144, 226, 0.7)',
      'secondary-lighter': 'rgba(74,144,226, 0.3)',
      'secondary-lightest': 'rgba(74,144,226, 0.1)',
      red: '#F23A5B',
      green: '#1BD1A6',
      blue: '#1766F0',
      yellow: '#fff5cc',
    },

    // typography
    fontSizeMap: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      m: '20px',
      l: '24px',
      xl: '32px',
      xxl: '48px',
    },
  },
};
```
