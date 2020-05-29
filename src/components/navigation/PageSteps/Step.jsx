import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Clickable from '../../utils/Clickable';
import styles from './steps.scss';

const PageSteps = ({
  title,
  active,
  href,
  onClick,
  Link,
}) => {
  if (href || onClick) {
    return (
      <Clickable
        className={classnames(
          styles.step,
          styles.button,
          {
            [styles.active]: active,
          },
        )}
        onClick={onClick}
        href={href}
        Link={Link}
      >
        {title}
      </Clickable>
    );
  }

  return (
    <div
      className={classnames(
        styles.step,
        {
          [styles.active]: active,
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
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

PageSteps.defaultProps = {
  active: false,
  href: '',
  onClick: null,
  Link: 'a',
};

export default PageSteps;
