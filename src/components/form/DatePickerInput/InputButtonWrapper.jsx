import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
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
      className={className}
      styleName={classnames('input-button', {
        focused: showMenu,
        editable,
      })}
    >
      {children}
      {mobileMode && (
        <div
          styleName="input-button-mask"
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

export default CSSModules(InputButtonWrapper, styles, {
  allowMultiple: true,
});
