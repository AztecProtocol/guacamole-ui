import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'react-styleguidist/lib/client/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import {
  colorMap,
} from '../../src/config/colors';

const xsmall = '@media (max-width: 600px)';
const headerHeight = 64;
const footerHeight = 80;
const sidebarWidth = 240;

const styles = ({
  base,
  light,
  baseBackground,
  space,
  mq,
}) => ({
  root: {
    color: base,
    backgroundColor: baseBackground,
  },
  header: {
    position: 'fixed',
    zIndex: 9,
    width: '100%',
    padding: [[0, space[4]]],
    backgroundColor: colorMap.primary,
    color: colorMap.white,
  },
  headerContent: {
    display: 'flex',
    height: headerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: [space[1], 0],
      height: 'auto',
    },
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]],
    },
  },
  headerLink: {
    '&, &:link, &:visited': {
      marginLeft: '0.5em',
      marginRight: '0.5em',
      color: '#efefef',
    },
    '&:hover, &:active': {
      color: '#fff',
      cursor: 'pointer',
    },
  },
  contentWrapper: {
    paddingTop: headerHeight,
  },
  sidebar: {
    position: 'fixed',
    top: headerHeight,
    left: 0,
    width: sidebarWidth,
    height: `calc(100vh - ${headerHeight}px)`,
    padding: space[2],
    background: colorMap['grey-lightest'],
    overflowY: 'scroll',
  },
  content: {
    width: '100%',
    height: `calc(100vh - ${headerHeight}px)`,
    padding: [[0, space[4]]],
    overflow: 'auto',
    [mq.small]: {
      padding: 16,
    },
  },
  'content-with-sidebar': {
    marginLeft: sidebarWidth,
    width: `calc(100vw - ${sidebarWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
    padding: [[0, space[4], 0, space[6]]],
    overflow: 'auto',
    [mq.small]: {
      padding: 16,
    },
  },
  senctions: {
    padding: [[space[6], 0]],
    minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: footerHeight,
    footerText: {
      color: light,
      fontSize: 12,
    },
  },
});

export const StyleGuideRenderer = ({
  classes,
  title,
  homepageUrl,
  toc,
  hasSidebar,
  children,
}) => (
  <div className={classes.root}>
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <Logo>{title}</Logo>
        <nav className={classes.nav}>
          <a
            className={classes.headerLink}
            href="https://github.com/styleguidist/react-styleguidist"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
    <div className={classes.contentWrapper}>
      {hasSidebar && <div className={classes.sidebar}>{toc}</div>}
      <main className={classes[!hasSidebar ? 'content' : 'content-with-sidebar']}>
        <div className={classes.senctions}>
          {children}
        </div>
        <footer className={classes.footer}>
          <Markdown
            className={classes.footerText}
            text={`Created with [React Styleguidist](${homepageUrl})`}
          />
        </footer>
      </main>
    </div>
  </div>
);

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool.isRequired,
};

export default Styled(styles)(StyleGuideRenderer);
