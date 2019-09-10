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
    path: path.resolve(__dirname, './src/styles'),
    filename: 'styles.css',
    variablesFilename: 'variables.scss',
  },
};
```

&nbsp;
&nbsp;

#### Configurable styles

You can change the values of the style attributes listed below. If a value is an object, you can change only some keys in it, and the other key-value pairs will remain the same. But if a value is an array, your custom value will overwrite the default value instead of pushing the values into the default array.


```js static
module.exports = {
  theme: {
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
      pink: '#F7B2D1',
      red: '#F23A5B',
      purple: '#49098A',
      blue: '#2772CE',
      green: '#41BA00',
      yellow: '#FACB00',
      orange: '#E57300',
      brown: '#49311A',
    },

    /*
     * [colorName]
     *  using these colors as background will set content's font color as white by default
     */
    darkBackgroundColors: [
      'primary',
      'primary-light',
      'primary-lighter',
      'secondary',
      'secondary-light',
      'black',
      'grey-darker',
      'grey-dark',
      'grey',
      'red',
      'purple',
      'blue',
      'green',
      'orange',
      'brown',
      'white-lightest',
    ],

    defaultShadowColor: colorMap['grey-lighter'],

    defaultBorderColor: colorMap['grey-lighter'],

    defaultHoverBackgroundColor: colorMap['grey-lighter'],

    defaultTextColor: colorMap['grey-darker'],

    defaultLabelColor: colorMap.grey,

    defaultLinkColor: colorMap.secondary,

    defaultFontFamily: '\'Cerebri Sans\', sans-serif',

    fontSizeMap: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      m: '20px',
      l: '24px',
      xl: '32px',
      xxl: '48px',
    },

    lineHeightMap: {
      xxs: '18px',
      xs: '20px',
      s: '24px',
      m: '28px',
      l: '36px',
      xl: '48px',
      xxl: '64px',
    },

    fontWeightMap: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    /*
     * { spacingKey: pixel }
     */
    spacingMap: {
      xxs: '2px',
      xs: '4px',
      s: '8px',
      m: '12px',
      l: '16px',
      xl: '24px',
      xxl: '36px',
    },

    /*
     * { deviceBreakpointKey: minDeviceWidth }
     */
    deviceBreakpointMap: {
      xxl: '2000px',
      xl: '1690px',
      l: '1248px',
      m: '960px',
      s: '768px',
      xs: '480px',
      xxs: '0',
    },

    /*
     * { deviceBreakpointKey: spacingKey }
     * horizontal margin of each page's content
     * these values will apply automatically if use PageContentWrapper to wrap the child components
     */
    pageSpacingKeyMap: {
      xxl: 'xxl',
      xl: 'xl',
      l: 'l',
      m: 'l',
      s: 'l',
      xs: 'l',
      xxs: 'l',
    },

    /*
     * { deviceBreakpointKey: spacingKey }
     * default spacing sizes under different device widths
     */
    defaultSpacingKeyMap: {
      xxl: 'xl',
      xl: 'xl',
      l: 'l',
      m: 'l',
      s: 'l',
      xs: 'm',
      xxs: 'm',
    },

    iconSizeMap: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      m: '18px',
      l: '24px',
      xl: '36px',
      xxl: '48px',
    },

    /*
     * { buttonThemeName: colorName }
     */
    buttonThemeMap: {
      primary: 'secondary',
      secondary: 'primary-lighter',
      white: 'white',
    },

    /*
     * { sizeKey: buttonHeightInPixel }
     */
    buttonSizeMap: {
      xxs: '20px',
      xs: '24px',
      s: '28px',
      m: '32px',
      l: '40px',
      xl: '48px',
      xxl: '56px',
    },

    /*
     * { sizeKey: fontSizeKey }
     */
    buttonTextSizeMap: {
      xxs: 'xxs',
      xs: 'xxs',
      s: 'xs',
      m: 'xs',
      l: 's',
      xl: 'm',
      xxl: 'm',
    },

    /*
     * { sizeKey: spacingKey }
     */
    buttonSpacingHSizeMap: {
      xxs: 'm',
      xs: 'm',
      s: 'l',
      m: 'xl',
      l: 'xl',
      xl: 'xl',
      xxl: 'xl',
    },

    buttonBorderWidth: '1px',

    outlinedButtonBorderWidth: '2px',

    /*
     * { inputSizeKey: inputBoxHeight }
     */
    inputSizeMap: {
      xs: '24px',
      s: '28px',
      m: '32px',
      l: '40px',
    },

    /*
     * { inputSizeKey: fontSizeKey }
     */
    inputFontSizeKeyMap: {
      xs: 'xxs',
      s: 'xxs',
      m: 'xs',
      l: 's',
    },

    inputStatusColorMap: {
      error: colorMap.red,
      focus: colorMap['secondary-light'],
    },

    inputBorderWidth: '1px',

    defaultInputBgColor: colorMap.white,
    defaultInputOutlineColor: colorMap['grey-light'],
    defaultInputActiveBgColor: colorMap.white,
    defaultInputActiveOutlineColor: colorMap['secondary-light'],
    defaultInputValueColor: colorMap['grey-dark'],
    defaultInputPlaceholderColor: colorMap['grey-light'];

    darkInputBgColor: 'rgba(255,255,255,0)',
    darkInputOutlineColor: colorMap['white-light'],
    darkInputActiveBgColor: 'rgba(255,255,255,0)',
    darkInputActiveOutlineColor: colorMap.white,
    darkInputValueColor: colorMap.white,
    darkInputPlaceholderColor: colorMap['white-lighter'],

    inlineInputBgColor: colorMap['grey-lightest'],
    inlineInputActiveBgColor: colorMap['grey-lightest'],
    inlineInputActiveOutlineColor: colorMap['secondary-light'],
    inlineInputValueColor: colorMap['grey-dark'],
    inlineInputPlaceholderColor: colorMap['grey-dark'],

    roundedCornerMap: {
      none: '0',
      xxs: '2px',
      xs: '4px',
      s: '6px',
      m: '8px',
      l: '12px',
      circular: '100%',
    },

    avatarSizesMap: {
      xxs: '20px',
      xs: '24px',
      s: '32px',
      m: '40px',
      l: '48px',
      xl: '56px',
      xxl: '72px',
    },

    avatarTextSizeMap: {
      xxs: 'xxs',
      xs: 'xxs',
      s: 'xxs',
      m: 'xs',
      l: 'm',
      xl: 'l',
      xxl: 'xl',
    },

    badgeSizeMap: {
      xxs: '16px',
      xs: '20px',
      s: '24px',
      m: '28px',
      l: '32px',
      xl: '36px',
      xxl: '48px',
    },

    listItemIconSizeMap: {
      xxs: 'xxs',
      xs: 'xs',
      s: 's',
      m: 'm',
      l: 'l',
      xl: 'xl',
      xxl: 'xl',
    },

    listItemAvatarTextSizeMap: {
      xxs: 'xs',
      xs: 's',
      s: 'm',
      m: 'l',
      l: 'xl',
      xl: 'xxl',
      xxl: 'xxl',
    },

    overlayThemeBgMap: {
      primary: 'primary-lightest',
      secondary: 'secondary-lightest',
      white: 'white-lighter',
    },

    svgProgressThemeBgMap: {
      primary: 'primary-lightest',
      secondary: 'secondary-lightest',
      white: 'white-lighter',
    },
  },
};
```
