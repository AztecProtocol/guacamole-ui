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
    "generate:styles": "guacamole generateStyles"
  },
}
```

In your terminal, run:

```bash static
yarn generate:styles
```

That's it! A CSS file with your custom theme and two variables files (.scss and .js) will be generated.

```bash static
MyProject
├── package.json
├── guacamole.config.js
├── guacamole
│   ├── guacamole.css
│   ├── guacamole-vars.scss
│   ├── guacamole-vars.js
```

Instead of importing css file from module ('@aztec/guacamole-ui/dist/styles/guacamole.css'), you can just import this *guacamole.css* into your app, which contains all the style rules with your custom values.

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
      transparent: 'rgba(255, 255, 255, 0)',
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

    defaultShadowColorName: 'grey-lighter',
    defaultShadowColor: 'rgba(0, 0, 0, 0.1)',

    defaultBorderColorName: 'grey-lighter',
    defaultBorderColor: 'rgba(0, 0, 0, 0.1)',

    defaultHoverBackgroundColorName: 'grey-lightest',
    defaultHoverBackgroundColor: '#F9fbfd',

    defaultTextColorName: 'grey-darker',
    defaultTextColor: 'rgba(0, 0, 0, 0.85)',

    defaultLabelColorName: 'grey',
    defaultLabelColor: 'rgba(0, 0, 0, 0.45)',

    defaultLinkColorName: 'secondary',
    defaultLinkColor: 'rgb(74,144,226)',

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

    inputBorderWidth: '1px',

    defaultInputBgColorName: 'white',
    defaultInputBgColor: '#FFFFFF',
    defaultInputOutlineColorName: 'grey-light',
    defaultInputOutlineColor: 'rgba(0, 0, 0, 0.2)',
    defaultInputActiveBgColorName: 'white',
    defaultInputActiveBgColor: '#FFFFFF',
    defaultInputActiveOutlineColorName: 'secondary-light',
    defaultInputActiveOutlineColor: 'rgba(74, 144, 226, 0.7)',
    defaultInputValueColorName: 'grey-dark',
    defaultInputValueColor: 'rgba(0, 0, 0, 0.7)',
    defaultInputPlaceholderColorName: 'grey-light',
    defaultInputPlaceholderColor: 'rgba(0, 0, 0, 0.2)',

    darkInputBgColorName: 'transparent',
    darkInputBgColor: 'rgba(255, 255, 255, 0)',
    darkInputOutlineColorName: 'white-light',
    darkInputOutlineColor: 'rgba(255, 255, 255, 0.85)',
    darkInputActiveBgColorName: 'transparent',
    darkInputActiveBgColor: 'rgba(255, 255, 255, 0)',
    darkInputActiveOutlineColorName: 'white',
    darkInputActiveOutlineColor: '#FFFFFF',
    darkInputValueColorName: 'white',
    darkInputValueColor: '#FFFFFF',
    darkInputPlaceholderColorName: 'white-lighter',
    darkInputPlaceholderColor: 'rgba(255, 255, 255, 0.5)',

    inlineInputBgColorName: 'grey-lightest',
    inlineInputBgColor: '#F9fbfd',
    inlineInputActiveBgColorName: 'grey-lightest',
    inlineInputActiveBgColor: '#F9fbfd',
    inlineInputActiveOutlineColorName: 'secondary-light',
    inlineInputActiveOutlineColor: 'rgba(74, 144, 226, 0.7)',
    inlineInputValueColorName: 'grey-dark',
    inlineInputValueColor: 'rgba(0, 0, 0, 0.7)',
    inlineInputPlaceholderColorName: 'grey-light',
    inlineInputPlaceholderColor: 'rgba(0, 0, 0, 0.2)',

    errorInputColorName: 'red',
    errorInputColor: '#F23A5B',

    focusInputColorName: 'secondary-light',
    focusInputColor: 'rgba(74, 144, 226, 0.7)',

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

    loaderThemeColorMap: {
      primary: 'primary-lightest',
      secondary: 'secondary-lightest',
      white: 'white',
    },

    loaderThemeInvertedColorMap: {
      primary: 'white',
      secondary: 'white',
      white: 'grey-lighter',
    },

    calendarBgName: 'white',
    calendarBg: '#FFFFFF',
    calendarMonthWidth: '319px',
    calendarMonthPaddingSizeKey: 'l',
    calendarMonthFontSizeKey: 'm',
    calendarWeekFontSizeKey: 'xs',
    calendarWeekColorName: 'grey',
    calendarWeekColor: 'rgba(0, 0, 0, 0.45)',
    calendarDayWidth: '41px',
    calendarDayHeight: '41px',
    calendarDayFontSizeKey: 's',
    calendarHoveredColorName: 'grey-darker',
    calendarHoveredColor: 'rgba(0, 0, 0, 0.85)',
    calendarHoveredBgName: 'secondary-lightest',
    calendarHoveredBg: 'rgba(74,144,226, 0.1)',
    calendarSelectedColorName: 'white',
    calendarSelectedColor: '#FFFFFF',
    calendarSelectedBgName: 'secondary',
    calendarSelectedBg: 'rgb(74,144,226)',
    calendarInRangeBgName: 'secondary-lightest',
    calendarInRangeBg: 'rgba(74,144,226, 0.1)',
    calendarOutsideColorName: 'grey',
    calendarOutsideColor: 'rgba(0, 0, 0, 0.45)',
  },
};
```

If an attribute has a color name and a color code, you can change its color by changing either one of them. For example, a variable is defined as following:

```js static
const defaultTextColorName = 'grey-darker';
const defaultTextColor = 'rgba(0, 0, 0, 0.85)';
```

You can change its color code directly in your config:

```js static
// guacamole.config.js
module.exports = {
  theme: {
    defaultTextColor: '#888',
  },
};
```

And all the texts will have a default color *#888*.

You can also change the color code:

```js static
// guacamole.config.js
module.exports = {
  theme: {
    defaultTextColorName: 'pink',
  },
};
```

And all the texts will have a default color *#F7B2D1*, which is defined in *colorMap*.

If the color is also changed in *colorMap*, all the attributes that are using that color will be changed, too.

```js static
// guacamole.config.js
module.exports = {
  theme: {
    defaultTextColorName: 'pink',
    colorMap: {
      pink: '#fa7db5',
    },
  },
};
```

All the texts will now have a default color *#fa7db5*.
