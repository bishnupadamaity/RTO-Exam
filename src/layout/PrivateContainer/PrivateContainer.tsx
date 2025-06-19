import {View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/types/RootStackParams';
import {COLOR} from '~/utils/Color/Color';
import BackNavigation from '~/components/atoms/BackNavigation/BackNavigation';
import {Header} from '~/components/atoms/Header/Header';
import CustomStatusBar from '~/components/atoms/CustomStatusBar/CustomStatusBar';
import PrivateContainerStyles from './PrivateContainerStyles';

const PrivateContainer = ({
  children,
  backgroundColor = '#FFF',
  isBackNavigation = false,
  title = '',
  headerBackgroundColor = COLOR.BorderBlue,
  isHeaderVisible = false,
  isCustomStatusBar,
  titleAlign = 'left',
  onBackPress,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  isBackNavigation?: boolean;
  title?: string;
  headerBackgroundColor?: string;
  isHeaderVisible?: boolean;
  isCustomStatusBar: boolean;
  titleAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  onBackPress?: () => void;
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      {isCustomStatusBar ? (
        <CustomStatusBar />
      ) : (
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      )}
      <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
        {isBackNavigation ? (
          <BackNavigation
            goBack={
              onBackPress
                ? onBackPress
                : navigation.canGoBack() && navigation.goBack
              // : navigation.navigate('RootPage')
            }
            title={title}
            textAlign={titleAlign}
            // headerBackgroundColor={headerBackgroundColor}
            isCustomStatusBar={isCustomStatusBar}
          />
        ) : isHeaderVisible ? (
          <Header backgroundColor={headerBackgroundColor} />
        ) : null}
        <View style={[PrivateContainerStyles.body, {backgroundColor}]}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrivateContainer;
