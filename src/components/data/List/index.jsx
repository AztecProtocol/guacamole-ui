import React from 'react'; import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from '../ListItem';
import styles from './list.scss';

export const List = ({
  size,
  items,
}) => items.map((item, i) => (
  <div
    key={+i}
    className={classnames(
      styles.item,
      styles[`size-${size}`],
      {
        [styles['with-description']]: item.description,
      },
    )}
  >
    <ListItem
      size={size}
      {...item}
    />
  </div>
));

List.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  items: PropTypes.arrayOf(PropTypes.shape({
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  })),
};

List.defaultProps = {
  size: 's',
  items: [],
};

export default List;
