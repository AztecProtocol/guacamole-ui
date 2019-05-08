#### Spacing Sizes

In our design system, there are 7 pre-defined spacing sizes:

 - xxs: 2px
 - xs: 4px
 - s: 8px
 - m: 12px
 - l: 16px
 - xl: 24px
 - xxl: 36px

Specifing spacing sizes through components instead of defining them in CSS will let people reading your code have a clearer idea of how the layout looks like. And it will be easier to change the size corresponding to a key in the future.

 ```jsx static
 <Block
   padding="s"
 />
 ```

See the following components for more usages:

- [Block](/#/Layout/Block)

- [Col](/#/Layout/Col)
