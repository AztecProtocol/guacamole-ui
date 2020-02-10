import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Block from '../../layout/Block';
import styles from './image.scss';

const ImageWrapper = ({
  className,
  ratio,
  width,
  height,
  borderRadius,
  children,
}) => {
  const divStyle = {};
  if (width) {
    divStyle.width = width;
  }
  if (height) {
    divStyle.height = height;
  }

  return (
    <Block
      className={classnames(
        className,
        styles.wrapper,
        {
          [styles[`ratio-${ratio}`]]: ratio,
        },
      )}
      borderRadius={borderRadius}
      style={divStyle}
    >
      {children}
    </Block>
  );
};

ImageWrapper.propTypes = {
  className: PropTypes.string,
  ratio: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.node,
};

ImageWrapper.defaultProps = {
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
};

export default ImageWrapper;
