import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: 310
  }
});

const UserInfo = ({ classes }) => (
  <section className={classes.root}>
    <div>User Info</div>
  </section>
);

const UserInfoStyles = withStyles(styles)(UserInfo);

export { UserInfoStyles as UserInfo };
