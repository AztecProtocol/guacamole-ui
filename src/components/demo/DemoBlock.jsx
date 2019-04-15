import React from 'react';
import PropTypes from 'prop-types';
import Block from '../layout/Block';
import Text from '../general/Text';

const DemoBlock = ({
  title,
  description,
  children,
}) => {
  const childNodes = !children
    ? null
    : !Array.isArray(children)
      ? [children]
      : children;

  return (
    <Block padding="xxl 0">
      {!!title && (
        <Block padding="m 0">
          <Text
            text={title}
            size="m"
            weight="normal"
          />
        </Block>
      )}
      {!!description && (
        <Block padding="m 0">
          <Text
            text={description}
            size="s"
          />
        </Block>
      )}
      {childNodes && (
        <Block padding="m 0">
          {childNodes.map((node, i) => (
            <Block
              key={+i}
              padding="m 0"
            >
              {node}
            </Block>
          ))}
        </Block>
      )}
    </Block>
  );
};

DemoBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

DemoBlock.defaultProps = {
  title: '',
  description: '',
  children: null,
};

export default DemoBlock;
