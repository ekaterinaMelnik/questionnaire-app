import { SubmissionError } from 'redux-form';
import { changeLinkStatus } from '../actions';

export const validateUserForm = (values, dispatch, props) => {
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
    errors.email = '— некорректный e-mail';
  }

  if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserForm submit failed!'
    });
  } else {
    dispatch(changeLinkStatus(0));
    props.history.push('/location');
  }
};

export const validateUserLocation = (values, dispatch, props) => {
  const errors = {};

  if (!values.country) {
    errors.country = '— заполните поле';
  }
  if (!values.city) {
    errors.city = '— заполните поле';
  }

  if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserLocation submit failed!'
    });
  } else {
    dispatch(changeLinkStatus(1));
    props.history.push('/accounts');
  }
};

export const validateUserAccounts = (values, dispatch, props) => {
  const errors = {};
  const accounts = ['facebook', 'vkontakte', 'twitter', 'odnoklassniki'];

  accounts.map((account) => {
    if (values[`checkbox_${account}`] && !values[account]) {
      errors[account] = '— заполните поле';
    }
  });

  if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserAccounts submit failed!'
    });
  } else {
    dispatch(changeLinkStatus(2));
    props.history.push('/verification');
  }
};
