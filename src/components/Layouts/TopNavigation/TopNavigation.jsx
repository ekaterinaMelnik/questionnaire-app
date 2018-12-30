import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomLink from '../../Common/CustomLink/CustomLink';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '0 auto',
    width: 310,

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },

  defaultLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#bbbbbb',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600'
  },

  activeLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: 'black'
  },

  ableLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#ff9800',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600'
  }
});

const TopNavigation = ({ classes, routes, location, checkedImage }) => (
  <React.Fragment>
    {location.pathname !== '/info' &&
    <section className={classes.root}>
      {routes.map((item, index) => (
        item.visible &&
        <CustomLink
          path={item.path}
          status={item.status}
          key={index}
          index={index}
          title={item.title}
          routes={routes}
          checkedImage={checkedImage}
        />
      ))}
    </section>
    }
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  routes: state.routesPaths.routes,
  nextPage: state.routesPaths.nextPage,
  checkedImage: state.imagesPaths.checkedImage
});

const TopNavigationStyles = withStyles(styles)(TopNavigation);

const TopNavigationConnect = withRouter(connect(mapStateToProps)(TopNavigationStyles));

export { TopNavigationConnect as TopNavigation };
