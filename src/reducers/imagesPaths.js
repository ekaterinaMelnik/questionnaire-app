import { CHECK_IMG, VALIDATE_IMG } from '../actions';

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
  validationError: false
};

const imagesPaths = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IMG:
      return {
        ...state,
        checkedImage: action.checkedImage,
        validationError: false
      };
    case VALIDATE_IMG:
      return {
        ...state,
        validationError: true
      };
    default:
      return state;
  }
};

export default imagesPaths;
