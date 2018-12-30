import * as React from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import { Form } from './VerificationForm';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '16px 0px 75px 0px'
  },

  container: {
    margin: '0 auto',
    maxWidth: 310
  },

  subTitle: {
    marginBottom: 40,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }
};

const UserVerification = ({ classes }) => (
  <section className={classes.root}>
    <div className={classes.container}>
      <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
        4. Выберите любимого котика.
      </Typography>
    </div>
    <Form/>
  </section>
);

export default withStyles(styles)(UserVerification);
