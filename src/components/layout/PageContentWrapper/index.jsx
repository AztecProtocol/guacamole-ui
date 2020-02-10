import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import Block from '../Block';
import styles from './wrapper.scss';

const PageContentWrapper = ({
  className,
  background,
  children,
  alignCenter,
  expand,
  stretch,
  scrollable,
}) => (
  <Block
    className={classnames(
      className,
      styles.wrapper,
      {
        [styles.scrollable]: scrollable,
      },
    )}
    background={background}
    stretch={stretch || scrollable}
  >
    <div
      className={classnames(
        styles.content,
        (alignCenter
          && generateResponsiveStyleNames('align-center', alignCenter).map((n) => styles[n]))
          || '',
        (expand
          && generateResponsiveStyleNames('expand', expand).map((n) => styles[n]))
          || '',
        {
          [styles.stretch]: stretch,
        },
      )}
    >
      {children}
    </div>
  </Block>
);

PageContentWrapper.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node,
  alignCenter: generateResponsiveShape([true, false]),
  expand: generateResponsiveShape([true, false]),
  stretch: PropTypes.bool,
  scrollable: PropTypes.bool,
};

PageContentWrapper.defaultProps = {
  className: '',
  background: '',
  children: null,
  alignCenter: false,
  expand: false,
  stretch: false,
  scrollable: false,
};

export default PageContentWrapper;
