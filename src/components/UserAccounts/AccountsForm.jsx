import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { FormControlCheckbox } from '../Common/FormControlCheckbox/FormControlCheckbox';

const styles = theme => ({
  textFieldContainer: {
    position: 'relative',
    marginBottom: 16
  },

  customInputRoot: {
    width: '100%',
    borderRadius: 2
  }
});

class AccountsForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.textFieldContainer}>
        <FormControlCheckbox name="facebook" label="Facebook"/>
        <FormControlCheckbox name="vkontakte" label="Вконтакте"/>
        <FormControlCheckbox name="twitter" label="Twitter"/>
        <FormControlCheckbox name="odnoklassniki" label="Одноклассники"/>
      </div>
    );
  }
}

const FormConnect = withRouter(withStyles(styles)(AccountsForm));

export { FormConnect as Form };
