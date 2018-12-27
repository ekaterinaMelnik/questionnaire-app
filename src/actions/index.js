export const SET_PATHS = 'SET_PATHS';

export const setPath = pathname => ({
  type: SET_PATHS,
  pathname
});

export const CHANGE_LINK_STATUS = 'CHANGE_LINK_STATUS';

export const changeLinkStatus = (index) => ({
  type: CHANGE_LINK_STATUS,
  index
});
