import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import connect from 'react-redux/es/connect/connect';
import { submit } from 'redux-form';

const styles = theme => ({
  root: {
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
    textTransform: 'none'
  },

  textLink: {
    marginTop: 5,
    marginBottom: 4
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
    path: routes[prevIndex].path,
    title: 'Предыдущий'
  };
  const nextPage = {
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

  onClick = (event, dispatch) => {
    dispatch(submit('userInfoValidation'));
  };

  render() {
    const { classes, location, dispatch } = this.props;
    const { previousPage, nextPage } = this.state;
    return (
      <React.Fragment>
        {
          location.pathname !== '/info' ?
            <section className={classes.root}>
              <Button component={NavLink} className={classes.defaultLink} exact to={previousPage.path}>
                <div className={classes.container}>
                  <ChevronLeft className={classes.icon}/>
                  <span className={classes.textLink}>{previousPage.title}</span>
                </div>
              </Button>
              <Button
                onClick={(event) => this.onClick(event, dispatch)}
                className={classes.defaultLink}>
                <div className={classes.containerLink}>
                  <span className={classes.textLink}>{nextPage.title}</span>
                  <ChevronRight className={classes.icon}/>
                </div>
              </Button>
            </section> :
            <section className={classes.root}>
              <Button component={NavLink} className={classes.finishLink} exact to="/">
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
  form: state.form
});

const BottomNavigationStyles = withStyles(styles)(BottomNavigation);

const BottomNavigationConnect = withRouter(connect(mapStateToProps)(BottomNavigationStyles));

export { BottomNavigationConnect as BottomNavigation };
