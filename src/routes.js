import { UserInfo } from './components/UserInfo/UserInfo';
import { UserLocation } from './components/UserLocation/UserLocation';

const routes = [
  {
    path: '/',
    exact: true,
    component: UserInfo
  },
  {
    path: '/location',
    component: UserLocation
  },
  {
    path: '/accounts',
    exact: true,
    component: UserInfo
  },
  {
    path: '/verification',
    component: UserLocation
  }
];

export default routes;
