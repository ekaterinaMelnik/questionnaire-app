import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submit, reset } from 'redux-form';
import { changeLinkStatusBack, clearRoutesPaths, clearUserImage, validateImg } from '../../../actions';

import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: 310
  },

  defaultLink: {
    padding: 0,
    minWidth: 147,
    minHeight: 35,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#ff9800',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    textTransform: 'none',

    '&:first-child': {
      marginRight: 16
    },

    [theme.breakpoints.down('xs')]: {

      '&:first-child': {
        marginRight: 10
      }
    }
  },

  finishLink: {
    padding: 0,
    minWidth: 147,
    minHeight: 35,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: 'white',
    backgroundColor: '#ff9800',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    textTransform: 'none',
    marginTop: 50
  },

  textLink: {
    marginTop: 5,
    marginBottom: 4,
    letterSpacing: 0
  },

  verificationLink: {
    padding: 10,
    minWidth: 147,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: 'white',
    backgroundColor: '#ff9800',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    textTransform: 'none'
  },

  icon: {
    fontSize: 32
  },

  container: {
    display: 'flex',
    marginLeft: -16
  },

  containerLink: {
    display: 'flex',
    marginLeft: 16
  }
});

const changePath = (pathname, routes) => {
  const currentIndex = routes.map((item) => {
    return item.path;
  }).indexOf(pathname);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  const nextIndex = currentIndex >= routes.length - 1 ? routes.length - 1 : currentIndex + 1;

  const previousPage = {
    index: prevIndex,
    path: routes[prevIndex].path,
    title: 'Предыдущий'
  };
  const nextPage = {
    index: nextIndex,
    path: routes[nextIndex].path,
    title: nextIndex === routes.length - 1 ? 'Завершить' : 'Следующий'
  };

  return { previousPage, nextPage };
};

class BottomNavigation extends React.Component {
  state = {
    pathname: '/',
    previousPage: {
      path: '/',
      title: 'Предыдущий'
    },
    nextPage: {
      path: '/location',
      title: 'Следующий'
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { routes } = props;

    if (props.location.pathname !== state.pathname) {
      const newPath = changePath(props.location.pathname, routes);

      return {
        ...newPath,
        pathname: props.location.pathname
      };
    }

    return null;
  }

  onClickForward = (event, dispatch, location, history, checkedImage) => {
    const { nextPage } = this.state;
    localStorage.setItem('nextPage', nextPage.path);

    if (location.pathname === '/') {
      dispatch(submit('userForm'));
    }

    if (location.pathname === '/location') {
      dispatch(submit('userLocation'));
    }

    if (location.pathname === '/accounts') {
      dispatch(submit('userAccounts'));
    }

    if (location.pathname === '/verification') {
      if (checkedImage.type === 'cat') {
        history.push('/info');
      } else {
        dispatch(validateImg(checkedImage.type));
      }
      localStorage.clear();
    }
  };

  onClickBack = (event, dispatch, location, history, checkedImage) => {
    const { previousPage, nextPage } = this.state;
    const verificationError = checkedImage ? checkedImage.type !== 'cat' : '';

    localStorage.setItem('nextPage', previousPage.path);

    if (location.pathname === '/location') {
      dispatch(submit('userLocation'));
    }

    if (location.pathname === '/accounts') {
      dispatch(submit('userAccounts'));
    }

    if (location.pathname === '/verification') {
      dispatch(changeLinkStatusBack(previousPage.index, nextPage.index, verificationError));
      history.push(previousPage.path);
      localStorage.clear();
    }
  };

  passAgain = (dispatch) => {
    dispatch(clearRoutesPaths());
    dispatch(reset('userForm'));
    dispatch(reset('userLocation'));
    dispatch(reset('userAccounts'));
    dispatch(clearUserImage());
  };

  render() {
    const { classes, location, dispatch, checkedImage, history } = this.props;
    const { previousPage, nextPage } = this.state;
    const verificationPage = location.pathname === '/verification';
    return (
      <React.Fragment>
        {
          location.pathname !== '/info'
            ? <section className={classes.root}>
              <Button onClick={(event) => this.onClickBack(event, dispatch, location, history)} className={classes.defaultLink}>
                <div className={classes.container}>
                  <ChevronLeft className={classes.icon}/>
                  <span className={classes.textLink}>{previousPage.title}</span>
                </div>
              </Button>
              <Button
                onClick={(event) => this.onClickForward(event, dispatch, location, history, checkedImage)}
                className={classes.defaultLink}>
                <div className={verificationPage ? classes.verificationLink : classes.containerLink}>
                  <span className={classes.textLink}>{nextPage.title}</span>
                  {!verificationPage && <ChevronRight className={classes.icon}/>}
                </div>
              </Button>
            </section>
            : <section className={classes.root}>
              <Button onClick={() => this.passAgain(dispatch)} component={NavLink} className={classes.finishLink} exact to="/">
                Пройти заново
              </Button>
            </section>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routesPaths.routes,
  form: state.form,
  checkedImage: state.imagesPaths.checkedImage
});

const BottomNavigationStyles = withStyles(styles)(BottomNavigation);

const BottomNavigationConnect = withRouter(connect(mapStateToProps)(BottomNavigationStyles));

export { BottomNavigationConnect as BottomNavigation };
