import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  overlayThemeNames,
} from 'src/config/styleConstants';
import iconShape from 'src/shapes/iconShape';
import Overlay from '../../layout/Overlay';
import PageContentWrapper from '../../layout/PageContentWrapper';
import FlexBox from '../../layout/FlexBox';
import Block from '../../layout/Block';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import styles from './modal.scss';

const valignMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

export class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClickOverlay = this.handleClickOverlay.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount() {
    const {
      pressEscToClose,
      hide,
    } = this.props;

    if (pressEscToClose && !hide) {
      this.bindKeypressEvent();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      pressEscToClose,
      hide,
    } = this.props;
    const {
      pressEscToClose: prevPressEscToClose,
      hide: prevHide,
    } = prevProps;

    if (!pressEscToClose) {
      if (prevPressEscToClose) {
        this.unbindKeypressEvent();
      }
      return;
    }

    if (hide !== prevHide || !prevPressEscToClose) {
      if (hide) {
        this.unbindKeypressEvent();
      } else {
        this.bindKeypressEvent();
      }
    }
  }

  componentWillUnmount() {
    this.unbindKeypressEvent();
  }

  handleClickOverlay() {
    const {
      clickOverlayToClose,
      onClose,
    } = this.props;

    if (clickOverlayToClose) {
      onClose();
    }
  }

  handleKeypress(e) {
    const {
      keyCode,
    } = e;
    if (keyCode !== 27) return;

    const {
      onClose,
    } = this.props;
    onClose();
  }

  bindKeypressEvent() {
    window.addEventListener('keydown', this.handleKeypress, false);
  }

  unbindKeypressEvent() {
    window.removeEventListener('keydown', this.handleKeypress, false);
  }

  renderHeader() {
    const {
      headerIcon,
      header,
      hasCloseIcon,
      onClose,
    } = this.props;

    const hasHeader = !!(headerIcon || header || hasCloseIcon);
    if (!hasHeader) {
      return null;
    }

    return (
      <ModalHeader
        styleName="header"
        icon={headerIcon}
        hasCloseIcon={hasCloseIcon}
        onClose={onClose}
      >
        {header}
      </ModalHeader>
    );
  }

  renderFooter() {
    const {
      footer,
    } = this.props;

    if (!footer) {
      return null;
    }

    return (
      <ModalFooter>
        {footer}
      </ModalFooter>
    );
  }

  render() {
    const {
      className,
      theme,
      children,
      valign,
      hide,
      hasBackground,
      autoWidth,
      stretch,
    } = this.props;

    return (
      <Overlay
        className={className}
        theme={hasBackground ? theme : ''}
        hide={hide}
        onClick={this.handleClickOverlay}
      >
        <PageContentWrapper
          styleName={classnames(
            'modal',
            {
              hide,
              'auto-width': autoWidth,
            },
          )}
          alignCenter
          stretch
        >
          <FlexBox
            styleName="wrapper"
            align="center"
            valign={valignMap[valign]}
          >
            <Block
              styleName="container"
              background="white"
              layer={2}
              borderRadius="default"
              onClick={e => e.stopPropagation()}
              stretch={stretch}
            >
              {this.renderHeader()}
              <div styleName="content">
                {!hide && children}
              </div>
              {this.renderFooter()}
            </Block>
          </FlexBox>
        </PageContentWrapper>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(overlayThemeNames),
  headerIcon: iconShape,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  footer: PropTypes.node,
  hide: PropTypes.bool,
  valign: PropTypes.oneOf(['top', 'center', 'bottom']),
  autoWidth: PropTypes.bool,
  stretch: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
  hasBackground: PropTypes.bool,
  clickOverlayToClose: PropTypes.bool,
  pressEscToClose: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  className: '',
  theme: 'primary',
  headerIcon: null,
  header: '',
  children: null,
  footer: null,
  hide: false,
  valign: 'top',
  autoWidth: false,
  stretch: false,
  hasCloseIcon: true,
  hasBackground: true,
  clickOverlayToClose: true,
  pressEscToClose: false,
  onClose() {},
};

export default CSSModules(Modal, styles, {
  allowMultiple: true,
});
