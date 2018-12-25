import { LOAD_USER } from '../actions';

const initialState = {
  username: 'Katty',
  email: 'melnykkatia@gmail.com'
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export default userInfo;
