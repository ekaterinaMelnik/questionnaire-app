export const CHANGE_LINK_STATUS_FORWARD = 'CHANGE_LINK_STATUS_FORWARD';

export const changeLinkStatusForward = (index) => ({
  type: CHANGE_LINK_STATUS_FORWARD,
  index
});

export const CHANGE_LINK_STATUS_BACK = 'CHANGE_LINK_STATUS_BACK';

export const changeLinkStatusBack = (currentPageIndex, nextPageIndex, errors) => ({
  type: CHANGE_LINK_STATUS_BACK,
  currentPageIndex,
  nextPageIndex,
  errors
});

export const CHANGE_LINK_STATUS_BACK_ERRORS = 'CHANGE_LINK_STATUS_BACK_ERRORS';

export const changeLinkStatusBackErrors = (currentPageIndex, nextPageIndex) => ({
  type: CHANGE_LINK_STATUS_BACK_ERRORS,
  currentPageIndex,
  nextPageIndex
});

export const CHECK_IMG = 'CHECK_IMG';

export const checkImg = (checkedImage) => ({
  type: CHECK_IMG,
  checkedImage
});

export const VALIDATE_IMG = 'VALIDATE_IMG';

export const validateImg = (imgType) => ({
  type: VALIDATE_IMG,
  imgType
});

export const CLEAR_USER_IMAGE = 'CLEAR_USER_IMAGE';

export const clearUserImage = () => ({
  type: CLEAR_USER_IMAGE
});

export const CLEAR_ROUTES_PATHS = 'CLEAR_ROUTES_PATHS';

export const clearRoutesPaths = () => ({
  type: CLEAR_ROUTES_PATHS
});

export const SAVE_NEXT_PAGE = 'SAVE_NEXT_PAGE';

export const saveNextPage = (nextPage) => ({
  type: SAVE_NEXT_PAGE,
  nextPage
});
