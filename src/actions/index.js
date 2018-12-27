export const CHANGE_LINK_STATUS = 'CHANGE_LINK_STATUS';

export const changeLinkStatus = (index) => ({
  type: CHANGE_LINK_STATUS,
  index
});

export const CHECK_IMG = 'CHECK_IMG';

export const checkImg = (checkedImage) => ({
  type: CHECK_IMG,
  checkedImage
});

export const VALIDATE_IMG = 'VALIDATE_IMG';

export const validateImg = () => ({
  type: VALIDATE_IMG
});
