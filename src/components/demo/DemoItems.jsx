import React from 'react';
import PropTypes from 'prop-types';
import Offset from '../layout/Offset';
import Block from '../layout/Block';

const DemoItems = ({
  direction,
  size,
  children,
  dark,
  white,
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

  const background = (dark && 'grey-darker')
    || (white && 'white')
    || '';

  if (!background && isSingleChild) {
    return contentNode;
  }

  if (!background) {
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
          background={background}
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
  white: PropTypes.bool,
};

DemoItems.defaultProps = {
  direction: 'column',
  size: 'm',
  dark: false,
  white: false,
};

export default DemoItems;
