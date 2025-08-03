import React, {useEffect, useMemo, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {getFromStore} from '~/utils/AsyncStorage';
import {KeyConstants} from '~/utils/AsyncStorage/keys';
import {Private} from '~/pages';
import CustomTabBar from '../CustomTabBar/CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}: any) => {
  const initialRouteName = route.params?.screen || 'Home';
  const [tabScreens, setTabScreens] = useState([
    {
      name: 'Home',
      component: Private.Homepage,
    },
    {
      name: 'Q.Bank',
      component: Private.QBank,
    },
    {
      name: 'Exam',
      component: Private.Exam,
    },
    {
      name: 'Practice',
      component: Private.Practice,
    },
  ]);
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      {tabScreens.map((route, index) => (
        <Tab.Screen key={index} name={route.name} component={route.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
