import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FlexBox from '../../layout/FlexBox';
import Step from './Step';
import styles from './steps.scss';

const PageSteps = ({
  theme,
  steps,
  currentStep,
}) => (
  <div
    className={classnames(
      styles.steps,
      styles[`theme-${theme}`],
    )}
  >
    <FlexBox
      align="center"
    >
      {steps.map(({
        title,
        ...step
      }, i) => (
        <Step
          {...step}
          key={`${+i}`}
          title={`${i + 1}. ${title}`}
          active={i + 1 === currentStep}
        />
      ))}
    </FlexBox>
  </div>
);

PageSteps.propTypes = {
  theme: PropTypes.oneOf(['white', 'primary']),
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    Link: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
  })).isRequired,
  currentStep: PropTypes.number,
};

PageSteps.defaultProps = {
  theme: 'primary',
  currentStep: 0,
};

export default PageSteps;
