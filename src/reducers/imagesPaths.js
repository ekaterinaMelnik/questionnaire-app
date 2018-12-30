import { CHECK_IMG, CLEAR_USER_IMAGE, VALIDATE_IMG } from '../actions';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import dog4 from '../images/dog4.jpg';

const initialState = {
  images: [
    {
      id: '1',
      src: cat1,
      type: 'cat'
    },
    {
      id: '2',
      src: cat2,
      type: 'cat'
    },
    {
      id: '3',
      src: cat3,
      type: 'cat'
    },
    {
      id: '4',
      src: dog4,
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
