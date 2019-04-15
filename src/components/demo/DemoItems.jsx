import React from 'react';
import PropTypes from 'prop-types';
import Offset from '../layout/Offset';
import Block from '../layout/Block';

const DemoItems = ({
  direction,
  size,
  children,
  dark,
}) => {
  const isSingleChild = !Array.isArray(children);
  const contentNode = (
    isSingleChild
    && children)
    || children.map((node, i) => (
      <Block
        key={+i}
        padding={size}
        inline={direction === 'row'}
      >
        {node}
      </Block>
    ));

  if (!dark && isSingleChild) {
    return contentNode;
  }

  if (!dark) {
    return (
      <Offset margin={size}>
        {contentNode}
      </Offset>
    );
  }

  return (
    <Offset margin={size}>
      <Block padding={dark ? `${size} 0` : ''}>
        <Block
          padding={dark ? size : ''}
          background={dark ? 'grey-darker' : ''}
        >
          {contentNode}
        </Block>
      </Block>
    </Offset>
  );
};

DemoItems.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  dark: PropTypes.bool,
};

DemoItems.defaultProps = {
  direction: 'column',
  size: 'm',
  dark: false,
};

export default DemoItems;
