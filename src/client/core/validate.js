import { SubmissionError } from 'redux-form';
import { changeLinkStatusForward, changeLinkStatusBack } from '../actions/index';

const getRouteInfo = (currentPage) => {
  const routes = ['/', '/location', '/accounts', '/verification'];
  const nextPage = localStorage.getItem('nextPage');

  const currentPageIndex = routes.indexOf(currentPage);
  const nextPageIndex = routes.indexOf(nextPage);

  localStorage.clear();

  return {
    currentPageIndex,
    nextPageIndex,
    nextPage,
    direction: currentPageIndex - nextPageIndex
  };
};

export const validateUserForm = (values, dispatch, props) => {
  const errors = {};
  const routeInfo = getRouteInfo(props.location.pathname);

  if (!values.username) {
    errors.username = '— заполните поле';
  }

  if (!values.email) {
    errors.email = '— заполните поле';
  } else if (values.email.indexOf('@') === -1) {
    errors.email = '— в адресе должен быть симвoл «@»';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '— некорректный e-mail';
  }

  if (routeInfo.direction > 0) {
    if (Object.keys(errors).length) {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex, true));
    } else {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex));
    }
    props.history.push(routeInfo.nextPage);
  } else if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserForm submit failed!'
    });
  } else {
    props.history.push(routeInfo.nextPage);
    dispatch(changeLinkStatusForward(routeInfo.currentPageIndex));
  }
};

export const validateUserLocation = (values, dispatch, props) => {
  const errors = {};
  const routeInfo = getRouteInfo(props.location.pathname);

  if (!values.country) {
    errors.country = '— заполните поле';
  }
  if (!values.city) {
    errors.city = '— заполните поле';
  }

  if (routeInfo.direction > 0) {
    if (Object.keys(errors).length) {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex, true));
    } else {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex));
    }
    props.history.push(routeInfo.nextPage);
  } else if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserLocation submit failed!'
    });
  } else {
    props.history.push(routeInfo.nextPage);
    dispatch(changeLinkStatusForward(routeInfo.currentPageIndex));
  }
};

export const validateUserAccounts = (values, dispatch, props) => {
  const errors = {};
  const accounts = ['facebook', 'vkontakte', 'twitter', 'odnoklassniki'];
  const routeInfo = getRouteInfo(props.location.pathname);

  accounts.map((account) => {
    if (values[`checkbox_${account}`] && !values[account]) {
      errors[account] = '— заполните поле';
    }
  });

  if (routeInfo.direction > 0) {
    if (Object.keys(errors).length) {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex, true));
    } else {
      dispatch(changeLinkStatusBack(routeInfo.currentPageIndex, routeInfo.nextPageIndex));
    }
    props.history.push(routeInfo.nextPage);
  } else if (Object.keys(errors).length) {
    throw new SubmissionError({
      ...errors,
      _error: 'UserAccounts submit failed!'
    });
  } else {
    props.history.push(routeInfo.nextPage);
    dispatch(changeLinkStatusForward(routeInfo.currentPageIndex));
  }
};
