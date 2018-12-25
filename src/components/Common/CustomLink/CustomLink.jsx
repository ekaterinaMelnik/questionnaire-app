import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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
    color: 'black'
  },

  doneLink: {
    marginRight: 8,
    minWidth: 34,
    minHeight: 34,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#ff9800',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600'
  }
});

const CustomLink = ({ classes, path, title }) => (
  <Button component={NavLink} className={classes.defaultLink} exact to={path} activeClassName={classes.activeLink}>
    {title}
  </Button>
);

export default withStyles(styles)(CustomLink);
