import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ClickOutsideHandler from '../../utils/ClickOutsideHandler';
import FlexPopupMenu from './FlexPopupMenu';
import styles from './popup.scss';

const PopupMenu = ({
  className,
  children,
  hide,
  onClickOutside,
  disabledClickOutside,
  stopPropagation,
  flexWidth,
}) => (
  <ClickOutsideHandler
    className={className}
    onClickOutside={onClickOutside}
    disabled={hide || disabledClickOutside}
    stopPropagation={stopPropagation}
  >
    {flexWidth && (
      <FlexPopupMenu
        hide={hide}
      >
        {children}
      </FlexPopupMenu>
    )}
    {!flexWidth && (
      <div
        className={classnames(
          styles['popup-menu'],
          {
            [styles.hide]: hide,
          },
        )}
      >
        {children}
      </div>
    )}
  </ClickOutsideHandler>
);

PopupMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickOutside: PropTypes.func,
  hide: PropTypes.bool,
  disabledClickOutside: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  flexWidth: PropTypes.bool,
};

PopupMenu.defaultProps = {
  className: '',
  onClickOutside() {},
  hide: false,
  disabledClickOutside: false,
  stopPropagation: false,
  flexWidth: false,
};

export default PopupMenu;
