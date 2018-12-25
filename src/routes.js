import { UserInfo } from './components/UserInfo/UserInfo';
import { UserLocation } from './components/UserLocation/UserLocation';
import { UserAccounts } from './components/UserAccounts/UserAccounts';
import { UserVerification } from './components/UserVerification/UserVerification';
import UserForm from './components/UserForm/UserForm';

const routes = [
  {
    path: '/',
    exact: true,
    component: UserForm
  },
  {
    path: '/location',
    component: UserLocation
  },
  {
    path: '/accounts',
    component: UserAccounts
  },
  {
    path: '/verification',
    component: UserVerification
  },
  {
    path: '/info',
    component: UserInfo
  }
];

export default routes;
