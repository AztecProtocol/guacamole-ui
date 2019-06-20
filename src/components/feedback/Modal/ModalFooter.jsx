import React from 'react';
import PropTypes from 'prop-types';
import Block from '../../layout/Block';

const ModalFooter = ({
  className, children,
}) => (
  <Block
    className={className}
    padding="l"
    background="grey-lightest"
    align="right"
    hasBorderTop
  >
    {children}
  </Block>
);

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalFooter.defaultProps = {
  className: '',
};

export default ModalFooter;
