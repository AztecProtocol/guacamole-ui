import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconShape from 'src/shapes/iconShape';
import {
  inputSizeKeys,
} from 'src/config/styleConstants';
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
      className={classnames(
        className,
        styles.steps,
        styles[`size-${size}`],
        {
          [styles['with-dot-content']]: withDotContent,
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
            className={classnames(
              i === numberOfSteps - 1 ? 'flex-fixed' : 'flex-free-expand',
              styles.step,
              {
                [styles.finished]: i < currentIndex,
                [styles.current]: i === currentIndex,
                [styles.waiting]: i > currentIndex,
              },
            )}
          >
            <DotWrapper
              className={classnames(
                styles.dot,
                {
                  [styles.static]: !isClickable,
                },
              )}
              onClick={isClickable ? () => onChange(i + 1) : undefined}
            >
              {!!icon && <Icon {...icon} />}
              {!icon && (
                <Text
                  text={`${i + 1}`}
                />
              )}
            </DotWrapper>
            {i < numberOfSteps - 1 && <div className={styles.line} />}
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

export default Steps;
