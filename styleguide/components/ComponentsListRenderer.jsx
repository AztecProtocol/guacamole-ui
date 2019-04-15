import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import Link from 'react-styleguidist/lib/client/rsg-components/Link';
import {
  getHash,
} from 'react-styleguidist/lib/client/utils/handleHash';
import {
  spacingMap,
} from '../../src/config/layout';

const styles = ({
  color,
}) => ({
  root: {
    padding: [[spacingMap.s, spacingMap.l]],
  },
  item: {
    padding: [[spacingMap.s, 0]],
  },
  heading: {},
  selected: {
    fontWeight: 500,
    color: `${color.base} !important`,
  },
  child: {},
});

export const ComponentsListRenderer = ({
  classes,
  items,
}) => {
  const visibleItems = items.filter(item => item.visibleName);

  if (!visibleItems.length) {
    return null;
  }

  const windowHash = getHash(window.location.hash);
  return (
    <div
      className={classes.root}
    >
      {visibleItems.map(({
        heading,
        href,
        visibleName,
        content,
        external,
      }) => {
        const isChild = !content || !content.props.items.length;
        const isItemSelected = `/#/${windowHash}` === href;
        return (
          <div
            key={href}
            className={classnames(
              classes.item,
              {
                [classes.heading]: heading,
                [classes.child]: isChild,
                [classes.selected]: isItemSelected,
              },
            )}
          >
            <Link
              className={classnames({
                [classes.selected]: isItemSelected,
              })}
              href={href}
              target={external ? '_blank' : undefined}
            >
              {visibleName}
            </Link>
            {content}
          </div>
        );
      })}
    </div>
  );
};

ComponentsListRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default Styled(styles)(ComponentsListRenderer);
