const initialState = {
  values: {
    username: '',
    email: ''
  }
};

const formPlugin = {
  userInfo: (state = initialState, action) => {
    return state;
  }
};

export default formPlugin;
