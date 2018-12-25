import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';

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

const BottomNavLinks = ({ classes, prevPath, prevTitle, nextPath, nextTitle, onClickNextPage }) => (
  <React.Fragment>
    {
      nextPath !== '/info' ?
        <section className={classes.root}>
          <Button component={NavLink} className={classes.defaultLink} exact to={prevPath}>
            <div className={classes.container}>
              <ChevronLeft className={classes.icon}/>
              <span className={classes.textLink}>{prevTitle}</span>
            </div>
          </Button>
          <Button onClick={onClickNextPage} component={NavLink} className={classes.defaultLink} exact to={nextPath}>
            <div className={classes.containerLink}>
              <span className={classes.textLink}>{nextTitle}</span>
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

export default withStyles(styles)(BottomNavLinks);
