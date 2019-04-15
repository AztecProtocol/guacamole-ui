#### Basic Usage

```jsx static
<TableRow>
  <TableCell width="15%">1</TableCell>
  <TableCell width="30%">2</TableCell>
  <TableCell width="25%">3</TableCell>
  <TableCell width="30%">4</TableCell>
</TableRow>
<TableRow>
  <TableCell width="15%">5</TableCell>
  <TableCell width="30%">6</TableCell>
  <TableCell width="25%">7</TableCell>
  <TableCell width="30%">8</TableCell>
</TableRow>
```

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="15%">1</TableCell>
    <TableCell width="30%">2</TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%">4</TableCell>
  </TableRow>
  <TableRow>
    <TableCell width="15%">5</TableCell>
    <TableCell width="30%">6</TableCell>
    <TableCell width="25%">7</TableCell>
    <TableCell width="30%">8</TableCell>
  </TableRow>
</div>
```

#### Highlighted Row

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="15%">1</TableCell>
    <TableCell width="30%">2</TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%">4</TableCell>
  </TableRow>
  <TableRow highlight>
    <TableCell width="15%">5</TableCell>
    <TableCell width="30%">6</TableCell>
    <TableCell width="25%">7</TableCell>
    <TableCell width="30%">8</TableCell>
  </TableRow>
  <TableRow>
    <TableCell width="15%">9</TableCell>
    <TableCell width="30%">10</TableCell>
    <TableCell width="25%">11</TableCell>
    <TableCell width="30%">12</TableCell>
  </TableRow>
</div>
```

#### Align Entire Content In A Row

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow textAlign="left">
    <TableCell width="30%">textAlign="left"</TableCell>
    <TableCell width="15%">2</TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%">4</TableCell>
  </TableRow>
  <TableRow textAlign="center">
    <TableCell width="30%">textAlign="center"</TableCell>
    <TableCell width="15%">6</TableCell>
    <TableCell width="25%">7</TableCell>
    <TableCell width="30%">8</TableCell>
  </TableRow>
  <TableRow textAlign="right" highlight>
    <TableCell width="30%">textAlign="right"</TableCell>
    <TableCell width="15%">10</TableCell>
    <TableCell width="25%">11</TableCell>
    <TableCell width="30%">12</TableCell>
  </TableRow>
</div>
```

#### Align Content In A Cell

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="15%">1</TableCell>
    <TableCell width="30%">2</TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%" align="left">align="left"</TableCell>
  </TableRow>
  <TableRow>
    <TableCell width="15%">5</TableCell>
    <TableCell width="30%">6</TableCell>
    <TableCell width="25%">7</TableCell>
    <TableCell width="30%" align="center">align="center"</TableCell>
  </TableRow>
  <TableRow highlight>
    <TableCell width="15%">9</TableCell>
    <TableCell width="30%">10</TableCell>
    <TableCell width="25%">11</TableCell>
    <TableCell width="30%" align="right">align="right"</TableCell>
  </TableRow>
</div>
```

#### Vertical Alignment

```js
import Block from '../../layout/Block';
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow valign="flex-start">
    <TableCell width="15%">1</TableCell>
    <TableCell width="30%">
      <div style={{ height: '60px' }}>
        <Block background="grey-lighter" stretch />
      </div>
    </TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%" align="right">4</TableCell>
  </TableRow>
  <TableRow valign="flex-end">
    <TableCell width="15%">5</TableCell>
    <TableCell width="30%">
      <div style={{ height: '60px' }}>
        <Block background="grey-lighter" stretch />
      </div>
    </TableCell>
    <TableCell width="25%">7</TableCell>
    <TableCell width="30%" align="right">8</TableCell>
  </TableRow>
  <TableRow valign="center" highlight>
    <TableCell width="15%">9</TableCell>
    <TableCell width="30%">
      <div style={{ height: '60px' }}>
        <Block background="grey-lighter" stretch />
      </div>
    </TableCell>
    <TableCell width="25%">11</TableCell>
    <TableCell width="30%" align="right">12</TableCell>
  </TableRow>
</div>
```

#### Horizontal Alignment

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="15%">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TableCell>
    <TableCell width="25%">
      Nulla eu sapien vitae eros semper tincidunt ac at tellus.
    </TableCell>
  </TableRow>
  <TableRow align="flex-start">
    <TableCell width="15%">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TableCell>
    <TableCell width="25%">
      Nulla eu sapien vitae eros semper tincidunt ac at tellus.
    </TableCell>
  </TableRow>
  <TableRow align="space-around" highlight>
    <TableCell width="15%">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TableCell>
    <TableCell width="25%">
      Nulla eu sapien vitae eros semper tincidunt ac at tellus.
    </TableCell>
  </TableRow>
</div>
```

#### Wrap & Nowrap

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="50%">{'nowrap={false}'}</TableCell>
    <TableCell width="30%">2</TableCell>
    <TableCell width="30%">3</TableCell>
    <TableCell width="50%">4</TableCell>
  </TableRow>
  <TableRow nowrap>
    <TableCell width="50%">{'nowrap={true}'}</TableCell>
    <TableCell width="30%">6</TableCell>
    <TableCell width="30%">7</TableCell>
    <TableCell width="50%">8</TableCell>
  </TableRow>
</div>
```

#### Loading

```js
import TableRow from './TableRow';
import TableCell from './TableCell';
<div>
  <TableRow>
    <TableCell width="15%">1</TableCell>
    <TableCell width="30%">2</TableCell>
    <TableCell width="25%">3</TableCell>
    <TableCell width="30%">4</TableCell>
  </TableRow>
  <TableRow>
    <TableCell width="15%" isLoading>5</TableCell>
    <TableCell width="30%" isLoading>6</TableCell>
    <TableCell width="25%" isLoading>7</TableCell>
    <TableCell width="30%" isLoading>8</TableCell>
  </TableRow>
  <TableRow highlight>
    <TableCell width="15%" isLoading>9</TableCell>
    <TableCell width="30%" isLoading>10</TableCell>
    <TableCell width="25%" isLoading>11</TableCell>
    <TableCell width="30%" isLoading>12</TableCell>
  </TableRow>
</div>
```
