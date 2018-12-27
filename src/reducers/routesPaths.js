import { CHANGE_LINK_STATUS } from '../actions';

const initialState = [
  {
    path: '/',
    title: '1',
    visible: true,
    status: 'active'
  },
  {
    path: '/location',
    title: '2',
    visible: true,
    status: 'disable'
  },
  {
    path: '/accounts',
    title: '3',
    visible: true,
    status: 'disable'
  },
  {
    path: '/verification',
    title: '4',
    visible: true,
    status: 'disable'
  },
  {
    path: '/info',
    title: '5',
    visible: false,
    status: 'disable'
  }
];

const routesPaths = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LINK_STATUS:
      return state.map((page, index) =>
        action.index === index ?
          {
            ...page,
            status: 'able'
          }
          :
          action.index + 1 === index ?
            {
              ...page,
              status: 'active'
            }
            : page
      );
    default:
      return state;
  }
};

export default routesPaths;
