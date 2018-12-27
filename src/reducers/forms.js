const initialStateForm = {
  values: {}
};

const initialStateLocation = {
  values: {}
};

const formPlugin = {
  userForm: (state = initialStateForm) => {
    return state;
  },
  userLocation: (state = initialStateLocation) => {
    return state;
  }
};

export default formPlugin;
