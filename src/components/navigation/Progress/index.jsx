import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import iconShape from 'src/shapes/iconShape';
import {
  inputSizeKeys,
} from 'src/config/inputs';
import Clickable from '../../utils/Clickable';
import FlexBox from '../../layout/FlexBox';
import Icon from '../../general/Icon';
import Text from '../../general/Text';
import styles from './progress.scss';

export const Progress = ({
  className,
  size,
  totalSteps,
  currentStep,
  steps,
  allowToGoBack,
  onChange,
  theme,
}) => {
  const stepArr
    = steps
    || Array(totalSteps)
      .fill(0)
      .map((_, id) => ({
        id,
      }));
  const currentIndex = currentStep - 1;

  return (
    <FlexBox
      className={className}
      styleName={classnames(
        'progress',
        `size-${size}`,
        {
          [`theme-${theme}`]: theme,
        },
      )}
    >
      {stepArr.map(({
        title,
        node,
        icon,
      }, i) => {
        const isClickable = i < currentIndex && allowToGoBack;
        const DotWrapper = isClickable ? Clickable : 'div';
        let contentNode = node;
        if (!contentNode) {
          contentNode = [
            (icon
              && (
                <Icon
                  key="icon"
                  styleName="icon"
                  {...icon}
                />
              ))
              || null,
            ((title || !icon)
              && (
                <Text
                  key="title"
                  styleName="title"
                  text={title || (icon ? '' : `${i + 1}`)}
                />
              ))
              || null,
          ];
        }

        return (
          <DotWrapper
            key={`step-${+i}`}
            styleName={classnames('step', {
              finished: i < currentIndex,
              clickable: isClickable,
            })}
            onClick={isClickable
              ? () => onChange(i + 1)
              : null}
          >
            {i > 0 && (
              <div
                styleName="step-tail"
              />
            )}
            <div styleName="step-content">
              {contentNode}
            </div>
          </DotWrapper>
        );
      })}
    </FlexBox>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.oneOf(inputSizeKeys),
  totalSteps: PropTypes.number,
  currentStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    node: PropTypes.node,
    icon: iconShape,
  })),
  allowToGoBack: PropTypes.bool,
  onChange: PropTypes.func,
};

Progress.defaultProps = {
  className: '',
  theme: 'primary',
  size: 's',
  totalSteps: 0,
  currentStep: 0,
  steps: null,
  allowToGoBack: false,
  onChange() {},
};

export default CSSModules(Progress, styles, {
  allowMultiple: true,
});
