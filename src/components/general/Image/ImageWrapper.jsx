import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Block from '../../layout/Block';
import styles from './image.scss';

const ImageWrapper = ({
  testId,
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
      testId={testId}
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
  testId: PropTypes.string,
  className: PropTypes.string,
  ratio: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.node,
};

ImageWrapper.defaultProps = {
  testId: undefined,
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
};

export default ImageWrapper;
