import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomLink from '../../Common/CustomLink/CustomLink';
import { withStyles } from '@material-ui/core/styles';
import { hasSubmitFailed, hasSubmitSucceeded, submit } from 'redux-form';
import Button from '@material-ui/core/Button/Button';
import { saveNextPage } from '../../../actions';

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

class TopNavigation extends React.Component {
  state = {
    userFormSucceeded: false,
    userFormFailed: false
  };

  // static getDerivedStateFromProps(props) {
  //   const { submitUserFormSucceeded, submitUserFormFailed, submitUserLocationSucceeded, submitUserAccountsSucceeded, nextPage } = props;
  //
  //   console.log('submitUserFormSucceeded props', submitUserFormSucceeded);
  //   console.log('submitUserFormFailed props', submitUserFormFailed);
  //
  //   console.log('nextPage', nextPage);
  //   console.log('props', props);
  //
  //   if (props.location.pathname === '/' && submitUserFormSucceeded && nextPage) {
  //     props.history.push(nextPage);
  //     props.dispatch(saveNextPage(''));
  //   }
  //   // else if (props.location.pathname === '/' && submitUserFormFailed && nextPage) {
  //   //   props.history.push(nextPage);
  //   //   props.dispatch(saveNextPage(''));
  //   // }
  //
  //   if (props.location.pathname === '/location' && submitUserLocationSucceeded && nextPage) {
  //     props.history.push(nextPage);
  //     props.dispatch(saveNextPage(''));
  //   }
  //
  //   if (props.location.pathname === '/accounts' && submitUserAccountsSucceeded && nextPage) {
  //     props.history.push(nextPage);
  //     props.dispatch(saveNextPage(''));
  //   }
  //
  //   return null;
  // }

  render() {
    const { classes, routes, location, checkedImage } = this.props;

    return (
      <React.Fragment>
        {
          location.pathname !== '/info' &&
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
  }
}

const mapStateToProps = (state) => ({
  routes: state.routesPaths.routes,
  nextPage: state.routesPaths.nextPage,

  checkedImage: state.imagesPaths.checkedImage,

  submitUserFormSucceeded: hasSubmitSucceeded('userForm')(state),
  submitUserFormFailed: hasSubmitFailed('userForm')(state),

  submitUserLocationSucceeded: hasSubmitSucceeded('userLocation')(state),

  submitUserAccountsSucceeded: hasSubmitSucceeded('userAccounts')(state)

});

const TopNavigationStyles = withStyles(styles)(TopNavigation);

const TopNavigationConnect = withRouter(connect(mapStateToProps)(TopNavigationStyles));

export { TopNavigationConnect as TopNavigation };
