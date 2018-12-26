import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomLink from '../../Common/CustomLink/CustomLink';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '0 auto',
    maxWidth: 310
  }
};

const TopNavigation = ({ classes, routes, location }) => (
  <React.Fragment>
    {
      location.pathname !== '/info' &&
      <section className={classes.root}>
        {routes.map((item, index) => (
          item.visible &&
          <CustomLink key={index} title={item.title} path={item.path}/>
        ))}
      </section>
    }
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  routes: state.routesPaths.routes
});

const TopNavigationStyles = withStyles(styles)(TopNavigation);

const TopNavigationConnect = withRouter(connect(mapStateToProps)(TopNavigationStyles));

export { TopNavigationConnect as TopNavigation };
