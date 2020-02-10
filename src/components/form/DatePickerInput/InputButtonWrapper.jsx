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
          role="button"
          tabIndex="0"
          aria-label="Open Date Picker"
          onKeyDown={onOpenMenu}
          onClick={(e) => {
            const { keyCode } = e;
            if ([13, 32, 40].indexOf(keyCode) >= 0) {
              e.preventDefault();
              onOpenMenu();
            }
          }}
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
