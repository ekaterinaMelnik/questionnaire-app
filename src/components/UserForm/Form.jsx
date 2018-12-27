import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Field, reduxForm } from 'redux-form';
import { validateUserForm } from '../../core/validate';
import { CustomInput as Input } from '../Common/CustomInput/CustomInput';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  textFieldContainer: {
    position: 'relative',
    marginBottom: 16
  },

  customInputRoot: {
    width: '100%',
    borderRadius: 2
  },

  customInput: {
    padding: '10px 18px',
    maxWidth: 310,
    height: 30,
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  errorText: {
    position: 'absolute',
    margin: '15px 0px 0px 10px',
    width: '100%',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: '#ff0000'
  }
});

class Form extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.textFieldContainer}>
        <form>
          <Field
            name="username"
            type="text"
            placeholder="Имя"
            component={Input}
          />
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component={Input}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.form.userForm.values
});

const FormRedux = reduxForm({
  form: 'userForm',
  destroyOnUnmount: false,
  onSubmit: validateUserForm
})(Form);

const FormConnect = withRouter(withStyles(styles)(connect(mapStateToProps)(FormRedux)));

export { FormConnect as Form };
