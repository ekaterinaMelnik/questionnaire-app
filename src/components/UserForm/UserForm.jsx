import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Field, reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import submitUserInfo from '../../core/submitionError';
import { CustomInput as Input } from '../Common/CustomInput/CustomInput';
import BottomNavLinks from '../Common/BottomNavLinks/BottomNavLinks';
import { loadUser } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

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
  },

  textField: {
    width: '100%',
    height: 50
  },
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

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = '— заполните поле';
  } else if (values.username.length > 14) {
    errors.username = '— имя должно быть меньше 15 символов';
  }
  if (!values.email) {
    errors.email = '— заполните поле';
  } else if (values.email.indexOf('@') === -1) {
    errors.email = '— в адресе должен быть симвoл «@»';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '— неверный e-mail';
  }

  return errors;
};

class UserForm extends React.Component {
  state = {
    user: {
      username: '',
      email: ''
    },
    errors: {}
  };

  onChangeInput = (event, value) => {
    const { user, errors } = this.state;
    const emptyErrors = this.deleteErrors(errors, value);

    this.setState({
      user: {
        ...user,
        [value]: event.target.value
      },
      errors: emptyErrors
    });
  };

  onClickNextPage = event => {
    const { user } = this.state;
    const errors = this.validateInput(user);

    this.setState({ errors });

    if (this.validateForm(errors)) {
      event.preventDefault();
    }
  };

  validateInput = values => {
    const errors = {};

    if (!values.username) {
      errors.username = '— заполните поле';
    } else if (values.username.length > 14) {
      errors.username = '— имя должно быть меньше 15 символов';
    }
    if (!values.email) {
      errors.email = '— заполните поле';
    } else if (values.email.indexOf('@') === -1) {
      errors.email = '— в адресе должен быть симвoл «@»';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = '— неверный e-mail';
    }

    return errors;
  };

  validateForm = values => {
    for (let error in values) {
      if (values[error]) {
        return true;
      }
    }

    return false;
  };

  deleteErrors = (values, key) => {
    const errors = {
      ...values,
      [key]: ''
    };

    return errors;
  };

  handleSubmit = (values, dispatch) => {
    console.log('submit1', values);
    console.log(dispatch);
    // dispatch(loadUser(values));
  };

  render() {
    const { classes, dispatch } = this.props;
    let { user, errors } = this.state;

    return (
      <section className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
            1. Введите имя и e-mail.
          </Typography>
          <Form />
          {/*<Input*/}
          {/*id="name"*/}
          {/*name="name"*/}
          {/*placeholder="Имя"*/}
          {/*value={user.username}*/}
          {/*onChange={(event) => this.onChangeInput(event, 'username')}*/}
          {/*type="text"*/}
          {/*disableUnderline={true}*/}
          {/*// style={errors.username ? { border: '2px solid #ff0000' } : null}*/}
          {/*classes={{*/}
          {/*root: classes.customInputRoot,*/}
          {/*input: classes.customInput*/}
          {/*}}*/}
          {/*/>*/}
          {/*<span className={classes.errorText}>{errors.username}</span>*/}
          {/*</div>*/}
          {/*<div className={classes.textFieldContainer}>*/}
          {/*<Input*/}
          {/*id="email"*/}
          {/*name="email"*/}
          {/*placeholder="Email"*/}
          {/*value={user.email}*/}
          {/*onChange={(event) => this.onChangeInput(event, 'email')}*/}
          {/*type="email"*/}
          {/*disableUnderline={true}*/}
          {/*autoComplete="email"*/}
          {/*// style={errors.email ? { border: '2px solid #ff0000' } : null}*/}
          {/*classes={{*/}
          {/*root: classes.customInputRoot,*/}
          {/*input: classes.customInput*/}
          {/*}}*/}
          {/*/>*/}
          {/*<span className={classes.errorText}>{errors.email}</span>*/}
          {/*</div>*/}
          {/*<BottomNavLinks*/}
          {/*onClickNextPage={this.onClickNextPage}*/}
          {/*nextPath="/location" nextTitle="Следующий"*/}
          {/*prevPath="/" prevTitle="Предыдущий"/>*/}
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(UserForm);
