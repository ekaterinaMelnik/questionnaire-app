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
  }
});

const TopNavigation = ({ classes, routes, location }) => (
  <React.Fragment>
    {
      location.pathname !== '/info' &&
      <section className={classes.root}>
        {routes.map((item, index) => (
          item.visible &&
          <CustomLink key={index} title={item.title} path={item.path} status={item.status}/>
        ))}
      </section>
    }
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  routes: state.routesPaths
});

const TopNavigationStyles = withStyles(styles)(TopNavigation);

const TopNavigationConnect = withRouter(connect(mapStateToProps)(TopNavigationStyles));

export { TopNavigationConnect as TopNavigation };
