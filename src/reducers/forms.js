const initialStateForm = {
  values: {}
};

const initialStateLocation = {
  values: {}
};

const initialStateAccounts = {
  values: {}
};

const formPlugin = {
  userForm: (state = initialStateForm) => {
    return state;
  },
  userLocation: (state = initialStateLocation) => {
    return state;
  },
  userAccounts: (state = initialStateAccounts) => {
    return state;
  }
};

export default formPlugin;
