import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Field, reduxForm } from 'redux-form';
import { CustomInput as Input } from '../CustomInput/CustomInput';
import { CustomCheckbox as Checkbox } from '../CustomCheckbox/CustomCheckbox';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { validateUserAccounts } from '../../../core/validate';

const styles = theme => ({
  textFieldContainer: {
    position: 'relative'
  },

  formContainer: {

    [theme.breakpoints.up('md')]: {
      display: 'inline-flex',
      height: 45
    }
  }
});

class FormControlCheckbox extends React.Component {
  state = {
    checked: false
  };

  componentDidMount() {
    const { name, initialValues } = this.props;
    const checked = initialValues[`checkbox_${name}`];

    this.setState({ checked });
  }

  onChange = (value) => {
    const checked = value !== 'true';

    this.setState({ checked });
  };

  render() {
    const { classes, name, label } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.textFieldContainer}>
        <form className={classes.formContainer}>
          <Field
            name={`checkbox_${name}`}
            component={Checkbox}
            type="checkbox"
            label={label}
            onChangeValue={this.onChange}
          />
          {checked &&
          <Field
            name={name}
            type="text"
            placeholder={`Ваша страница в ${label}`}
            component={Input}
            smallInput={true}
          />
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.form.userAccounts.values
});

const FormRedux = reduxForm({
  form: 'userAccounts',
  destroyOnUnmount: false,
  onSubmit: validateUserAccounts
})(FormControlCheckbox);

const FormConnect = withRouter(withStyles(styles)(connect(mapStateToProps)(FormRedux)));

export { FormConnect as FormControlCheckbox };
