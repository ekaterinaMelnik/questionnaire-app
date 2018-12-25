export const SET_PATHS = 'SET_PATHS';

export const setPath = pathname => ({
  type: SET_PATHS,
  pathname
});

export const LOAD_USER = 'LOAD_USER';

export const loadUser = data => ({
  type: LOAD_USER,
  data
});
