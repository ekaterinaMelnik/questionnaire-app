import { SubmissionError } from 'redux-form';

const submitUserInfo = (values, dispatch, props) => {
  const errors = {};

  console.log('validation');

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

  if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserInfo submit failed!'
    });
  } else {
    props.history.push('/location');
  }
};

export default submitUserInfo;
