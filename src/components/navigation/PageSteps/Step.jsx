import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Clickable from '../../utils/Clickable';
import styles from './steps.scss';

const PageSteps = ({
  title,
  active,
  href,
  onClick,
  isRouterLink,
}) => {
  if (href || onClick) {
    return (
      <Clickable
        styleName={classnames(
          'step',
          'button',
          {
            active,
          },
        )}
        onClick={onClick}
        href={href}
        isRouterLink={isRouterLink}
      >
        {title}
      </Clickable>
    );
  }

  return (
    <div
      styleName={classnames(
        'step',
        {
          active,
        },
      )}
    >
      {title}
    </div>
  );
};

PageSteps.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isRouterLink: PropTypes.bool,
};

PageSteps.defaultProps = {
  active: false,
  href: '',
  onClick: null,
  isRouterLink: false,
};

export default CSSModules(PageSteps, styles, {
  allowMultiple: true,
});
