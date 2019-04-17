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

&nbsp;
&nbsp;

#### Device width breakpoints

There are currently 7 breakpoints in our design system:

 - xxs: 0
 - xs: 480px
 - s: 767px
 - m: 960px
 - l: 1248px
 - xl: 1690px
 - xxl: 2000px

Those pixel values are the lowerbounds of their corresponding breakpoint keys. That is, when you define a value for key *xs*, the value should apply to width above 480.

In the example below, the Block will have padding size *xs* when device width is more than 1248px; size *m* when device width is between 481px and 1248px; size *l* when device width is less than or equal to 480px.

```jsx static
<Block
  padding={{
    l: 'xs',
    s: 'm',
    xxs: 'l',
  }}
/>
```
