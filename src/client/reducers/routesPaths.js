import { CHANGE_LINK_STATUS_FORWARD, CHANGE_LINK_STATUS_BACK, CLEAR_ROUTES_PATHS, SAVE_NEXT_PAGE } from '../actions/index';

const initialState = {
  routes: [
    {
      path: '/',
      title: '1',
      visible: true,
      status: 'able',
      verification: 'userForm'
    },
    {
      path: '/location',
      title: '2',
      visible: true,
      status: 'next',
      verification: 'userLocation'
    },
    {
      path: '/accounts',
      title: '3',
      visible: true,
      status: 'disable',
      verification: 'userAccounts'
    },
    {
      path: '/verification',
      title: '4',
      visible: true,
      status: 'disable',
      verification: ''
    },
    {
      path: '/info',
      title: '5',
      visible: false,
      status: 'disable',
      verification: ''
    }
  ],
  nextPage: ''
};

const routesPaths = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LINK_STATUS_FORWARD:
      return {
        ...state,
        routes: state.routes.map((page, index) =>
          action.index === index
            ? {
              ...page,
              status: 'able'
            } : action.index + 1 === index ? {
              ...page,
              status: 'able'
            } : action.index + 2 === index && page.status !== 'able' ? {
              ...page,
              status: 'next'
            } : page
        )
      };
    case CHANGE_LINK_STATUS_BACK:
      return {
        ...state,
        routes: state.routes.map((page, index) =>
          action.currentPageIndex < index && action.errors
            ? {
              ...page,
              status: 'disable'
            } : action.nextPageIndex === index ? {
              ...page,
              status: 'able'
            } : action.currentPageIndex === index && (action.errors || page.status !== 'able') ? {
              ...page,
              status: 'next'
            } : page
        )
      };
    case CLEAR_ROUTES_PATHS:
      return {
        ...state,
        routes: state.routes.map((page, index) =>
          index === 0
            ? {
              ...page,
              status: 'disable'
            } : index === 1 ? {
              ...page,
              status: 'next'
            } : {
              ...page,
              status: 'disable'
            }
        )
      };
    case SAVE_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.nextPage
      };
    default:
      return state;
  }
};

export default routesPaths;
