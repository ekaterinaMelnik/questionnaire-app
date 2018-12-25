const initialState = {
  routes: [
    {
      path: '/',
      title: '1',
      visible: true
    },
    {
      path: '/location',
      title: '2',
      visible: true
    },
    {
      path: '/accounts',
      title: '3',
      visible: true
    },
    {
      path: '/verification',
      title: '4',
      visible: true
    },
    {
      path: '/info',
      title: '5',
      visible: false
    }
  ]
};

const routesPaths = (state = initialState) => {
  return state;
};

export default routesPaths;
