import { CHECK_IMG, CLEAR_USER_IMAGE, VALIDATE_IMG } from '../actions';

const initialState = {
  images: [
    {
      id: '1',
      src: '../../images/cat1.jpg',
      type: 'cat'
    },
    {
      id: '2',
      src: '../../images/cat2.jpg',
      type: 'cat'
    },
    {
      id: '3',
      src: '../../images/cat3.jpg',
      type: 'cat'
    },
    {
      id: '4',
      src: '../../images/dog4.jpg',
      type: 'dog'
    }
  ],
  checkedImage: {},
  validationError: ''
};

const imagesPaths = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IMG:
      return {
        ...state,
        checkedImage: action.checkedImage,
        validationError: ''
      };
    case VALIDATE_IMG:
      return !action.imgType
        ? {
          ...state,
          validationError: 'Выберите картинку.'
        }
        : {
          ...state,
          validationError: 'Вы выбрали собачку. А надо котика.'
        };
    case CLEAR_USER_IMAGE:
      return {
        ...state,
        checkedImage: {},
        validationError: ''
      };
    default:
      return state;
  }
};

export default imagesPaths;
