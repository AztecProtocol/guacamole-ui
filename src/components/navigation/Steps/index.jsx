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
import styles from './steps.scss';

export const Steps = ({
  className,
  size,
  totalSteps,
  currentStep,
  currentId,
  steps,
  allowToGoBack,
  onChange,
}) => {
  const stepArr = steps || Array(totalSteps).fill(0)
    .map((_, id) => ({
      id,
    }));
  const currentIndex = Math.max(
    currentStep - 1,
    stepArr.findIndex(({
      id,
    }) => id === currentId),
  );
  const withDotContent = stepArr.some(({
    title, description,
  }) => title || description);
  const numberOfSteps = stepArr.length;

  return (
    <FlexBox
      className={className}
      styleName={classnames(
        'steps',
        `size-${size}`,
        {
          'with-dot-content': withDotContent,
        },
      )}
    >
      {stepArr.map(({
        id, title, icon,
      }, i) => {
        const isClickable = i < currentIndex && allowToGoBack;
        const DotWrapper = isClickable ? Clickable : 'div';

        return (
          <div
            key={id}
            className={i === numberOfSteps - 1 ? 'flex-fixed' : 'flex-free-expand'}
            styleName={classnames(
              'step',
              {
                finished: i < currentIndex,
                current: i === currentIndex,
                waiting: i > currentIndex,
              },
            )}
          >
            <DotWrapper
              styleName={classnames('dot', {
                static: !isClickable,
              })}
              onClick={isClickable ? () => onChange(i + 1) : undefined}
            >
              {!!icon && <Icon {...icon} />}
              {!icon && (
                <Text
                  text={`${i + 1}`}
                />
              )}
            </DotWrapper>
            {i < numberOfSteps - 1 && <div styleName="line" />}
            {!!title && (
              <Text
                text={title}
              />
            )}
          </div>
        );
      })}
    </FlexBox>
  );
};

Steps.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(inputSizeKeys),
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number,
  currentId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: iconShape,
  })),
  allowToGoBack: PropTypes.bool,
  onChange: PropTypes.func,
};

Steps.defaultProps = {
  className: '',
  size: 's',
  currentStep: 0,
  currentId: '',
  steps: null,
  allowToGoBack: false,
  onChange() {},
};

export default CSSModules(Steps, styles, {
  allowMultiple: true,
});
