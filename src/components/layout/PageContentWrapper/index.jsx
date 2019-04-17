import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveShape from 'src/helpers/generateResponsiveShape';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
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
    className={className}
    styleName={classnames(
      'wrapper',
      {
        scrollable,
      },
    )}
    background={background}
    stretch={stretch || scrollable}
  >
    <div
      styleName={classnames(
        'content',
        (alignCenter
          && generateResponsiveStyleNames('align-center', alignCenter))
          || '',
        (expand
          && generateResponsiveStyleNames('expand', expand))
          || '',
        {
          stretch,
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

export default CSSModules(PageContentWrapper, styles, {
  allowMultiple: true,
});
