import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './datepicker.scss';

function InputButtonWrapper({
  className,
  children,
  showMenu,
  mobileMode,
  editable,
  onOpenMenu,
}) {
  return (
    <div
      className={classnames(
        className,
        styles['input-button'],
        {
          [styles.focused]: showMenu,
          [styles.editable]: editable,
        },
      )}
    >
      {children}
      {mobileMode && (
        <div
          className={styles['input-button-mask']}
          onClick={onOpenMenu}
        />
      )}
    </div>
  );
}

InputButtonWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  showMenu: PropTypes.bool.isRequired,
  mobileMode: PropTypes.bool,
  editable: PropTypes.bool,
  onOpenMenu: PropTypes.func.isRequired,
};

InputButtonWrapper.defaultProps = {
  className: '',
  mobileMode: false,
  editable: false,
};

export default InputButtonWrapper;
