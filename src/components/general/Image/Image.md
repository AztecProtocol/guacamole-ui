#### Basic Usage

```jsx static
<Image
  src="https://example.com/image.jpg"
/>
```

```js
<Image
  src="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=240&q=80"
/>
```

#### Original Size

Images will appear in their actual sizes if no size-related props are defined. Always use *src* for real-sized image. If you define it through *backgroundUrl*, the container will not take up any space, thus displaying nothing at all.

```js
<Image
  src="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=240&q=80"
/>
```

#### Customized Sizes

You can define *width* and *height* with fixed values. When the assigned sizes result in different ratio as the original image, a real images will get distorted while a background image will be cropped.

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems direction="row">
  <Image
    width="100px"
    height="200px"
    src="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
  />
  <Image
    width="100px"
    height="200px"
    backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
  />
</DemoItems>
```

#### One Fixed Side

When value is assigned to only width or height, another side will adjust itself to meet the original ratio. This approach is available only by using *src*.

```js
import DemoItems from '../../demo/DemoItems';
<DemoItems>
  <Image
    height="100px"
    src="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
  />
  <Image
    width="100px"
    src="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
  />
</DemoItems>
```

#### Ratios

Ratios can apply to images defined through either *src* or *backgroundUrl*. An image with ratio will expand to the same width as its parent's if width is not defined. On the other hand, its height will always stretch correspondingly to width. The height prop will have no effect when ratio is defined.

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={2}>
    <Image
      ratio="square"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
  <Col column={2}>
    <Image
      ratio="classic"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
  <Col column={2}>
    <Image
      ratio="golden"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
      backgroundPosition="center"
    />
  </Col>
  <Col column={2}>
    <Image
      ratio="landscape"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
  <Col column={2}>
    <Image
      ratio="ultra"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
</Row>
```

#### Border Radius

All the border radius values available to [Block](/#/Layout/Block) are also available for Image.

```js
import Row from '../../layout/Row';
import Col from '../../layout/Col';
<Row>
  <Col column={2}>
    <Image
      ratio="square"
      borderRadius="l"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
  <Col column={2}>
    <Image
      ratio="square"
      borderRadius="circular"
      backgroundUrl="https://images.unsplash.com/photo-1537883113527-2cca0081faf1?ixlib=rb-0.3.5&s=668d048cc91aa7f49bda6cddf3ad13d5&auto=format&fit=crop&w=776&q=80"
    />
  </Col>
</Row>
```
