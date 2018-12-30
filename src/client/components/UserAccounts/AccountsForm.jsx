import * as React from 'react';
import { withRouter } from 'react-router-dom';

import { FormControlCheckbox } from '../Common/FormControlCheckbox/FormControlCheckbox';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  textFieldContainer: {
    position: 'relative',
    marginBottom: 16
  },

  customInputRoot: {
    width: '100%',
    borderRadius: 2
  }
};

const AccountsForm = ({ classes }) => (
  <div className={classes.textFieldContainer}>
    <FormControlCheckbox name="facebook" label="Facebook"/>
    <FormControlCheckbox name="vkontakte" label="Вконтакте"/>
    <FormControlCheckbox name="twitter" label="Twitter"/>
    <FormControlCheckbox name="odnoklassniki" label="Одноклассники"/>
  </div>
);

const FormConnect = withRouter(withStyles(styles)(AccountsForm));

export { FormConnect as Form };
