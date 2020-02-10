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
import styles from './progress.scss';

const Progress = ({
  className,
  size,
  totalSteps,
  currentStep,
  steps,
  allowToGoBack,
  onChange,
  theme,
}) => {
  const stepArr = steps
    || Array(totalSteps)
      .fill(0)
      .map((_, id) => ({
        id,
      }));
  const currentIndex = currentStep - 1;

  return (
    <FlexBox
      className={classnames(
        className,
        styles.progress,
        styles[`size-${size}`],
        {
          [styles[`theme-${theme}`]]: theme,
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
                  className={styles.icon}
                  {...icon}
                />
              ))
              || null,
            ((title || !icon)
              && (
                <Text
                  key="title"
                  className={styles.title}
                  text={title || (icon ? '' : `${i + 1}`)}
                />
              ))
              || null,
          ];
        }

        return (
          <DotWrapper
            key={`step-${+i}`}
            className={classnames(
              styles.step,
              {
                [styles.finished]: i < currentIndex,
                [styles.clickable]: isClickable,
              },
            )}
            onClick={isClickable
              ? () => onChange(i + 1)
              : null}
          >
            {i > 0 && (
              <div
                className={styles['step-tail']}
              />
            )}
            <div className={styles['step-content']}>
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

export default Progress;
