import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  sizeKeys,
  colorNames,
  backgroundNames,
  shadowLayerKeys,
  roundedCornerKeys,
} from 'src/config/styleConstants';
import {
  inputMenuDefaultBackground,
  inputMenuBorderColor,
  inputMenuBorderRadius,
  inputMenuOffsetTop,
  inputMenuLayer,
} from 'src/config/inputs';
import Block from '../../layout/Block';
import ClickOutsideHandler from '../../utils/ClickOutsideHandler';
import FlexPopupMenu from './FlexPopupMenu';
import styles from './popup.scss';

const PopupMenu = ({
  testId,
  className,
  background,
  borderColor,
  borderRadius,
  layer,
  offsetTop,
  children,
  hide,
  onClickOutside,
  disabledClickOutside,
  stopPropagation,
  flexWidth,
}) => (
  <ClickOutsideHandler
    testId={testId}
    className={className}
    onClickOutside={onClickOutside}
    disabled={hide || disabledClickOutside}
    stopPropagation={stopPropagation}
  >
    {flexWidth && (
      <FlexPopupMenu
        background={background}
        borderColor={borderColor}
        borderRadius={borderRadius}
        layer={layer}
        offsetTop={offsetTop}
        hide={hide}
      >
        {children}
      </FlexPopupMenu>
    )}
    {!flexWidth && (
      <Block
        className={classnames(
          styles['popup-menu'],
          {
            [styles.hide]: hide,
            [styles[`top-${offsetTop}`]]: offsetTop,
          },
        )}
        background={background}
        borderColor={borderColor}
        borderRadius={borderRadius}
        layer={layer}
      >
        {children}
      </Block>
    )}
  </ClickOutsideHandler>
);

PopupMenu.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.oneOf(backgroundNames),
  borderColor: PropTypes.oneOf(['', ...colorNames]),
  borderRadius: PropTypes.oneOf(roundedCornerKeys),
  layer: PropTypes.oneOf(shadowLayerKeys),
  offsetTop: PropTypes.oneOf(['', ...sizeKeys]),
  children: PropTypes.node.isRequired,
  onClickOutside: PropTypes.func,
  hide: PropTypes.bool,
  disabledClickOutside: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  flexWidth: PropTypes.bool,
};

PopupMenu.defaultProps = {
  testId: undefined,
  className: '',
  background: inputMenuDefaultBackground,
  borderColor: inputMenuBorderColor,
  borderRadius: inputMenuBorderRadius,
  layer: inputMenuLayer,
  offsetTop: inputMenuOffsetTop,
  onClickOutside() {},
  hide: false,
  disabledClickOutside: false,
  stopPropagation: false,
  flexWidth: false,
};

export default PopupMenu;
