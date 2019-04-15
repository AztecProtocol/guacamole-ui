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

There are currently 4 breakpoints in our design system:

 - xs: 767px
 - s: 960px
 - m: 1248px
 - l: 2000px

Those pixel values are the upperbounds of their corresponding breakpoint keys. That is, when you define a value for key *xs*, the value should apply to width 767 and below.

In the example below, the Block will have padding size *s* when device width is more than 1248px; size *xs* when device width is between 961px and 1248px; size *m* when device width is between 768px and 960px; and size *l* when device width is less than or equal to 767px.

```jsx static
<Block
  padding={{
    l: 's',
    m: 'xs',
    s: 'm',
    xs: 'l',
  }}
/>
```
