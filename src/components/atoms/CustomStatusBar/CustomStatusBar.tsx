import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '~/utils/Color/Color';

const CustomStatusBar = ({...props}) => {
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

  return (
    <View style={{height: STATUSBAR_HEIGHT, backgroundColor: 'transparent'}}>
      <LinearGradient
        colors={[COLOR.lightblue2, COLOR.gray5, COLOR.white]}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
          {...props}
        />
      </LinearGradient>
    </View>
  );
};

export default CustomStatusBar;
