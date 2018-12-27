import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { Form } from './Form';

const styles = theme => ({
  root: {
    margin: '16px 0px 150px 0px'
  },

  container: {
    margin: '0 auto',
    width: 310
  },

  subTitle: {
    marginBottom: 40,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }
});

const UserForm = ({ classes }) => (
  <section className={classes.root}>
    <div className={classes.container}>
      <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
        1. Введите имя и e-mail.
      </Typography>
      <Form/>
    </div>
  </section>
);

export default withStyles(styles)(UserForm);
