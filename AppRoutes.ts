import BottomTabNavigator from '~/layout/Navigators/BottomTabNavigator/BottomTabNavigator';
import {Private, Public} from '~/pages';
export type AppRoute = {
  name: string;
  component: any;
};
export const AppRoutes: AppRoute[] = [
  {
    name: 'SplashScreen',
    component: Public.SplashScreen,
  },
  {
    name: 'Login',
    component: Public.Login,
  },
  {
    name: 'Signup',
    component: Public.Signup,
  },
  {
    name: 'Homepage',
    component: Private.Homepage,
  },
  {
    name: 'RootPage',
    component: BottomTabNavigator,
  },
  {
    name: 'QBank',
    component: Private.QBank,
  },
  {
    name: 'BasicTrafficRules',
    component: Private.BasicTrafficRules,
  },
  {
    name: 'RoadSignAndSignals',
    component: Private.RoadSignAndSignals,
  },
  {
    name: 'RoadSigns',
    component: Private.RoadSigns,
  },
  {
    name: 'Exam',
    component: Private.Exam,
  },
  {
    name: 'ExamTaker',
    component: Private.ExamTaker,
  },
];
