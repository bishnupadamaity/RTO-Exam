import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '~/types/RootStackParams';
import {RFValue} from 'react-native-responsive-fontsize';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {COLOR} from '~/utils/Color/Color';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT} from '~/utils/Constants';

const BackNavigation: React.FC<{
  goBack?: any;
  title?: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  isCustomStatusBar?: boolean;
}> = ({goBack, title, textAlign = 'center', isCustomStatusBar = false}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    console.log('Handle back press clicked >>>>>');
    if (goBack) {
      goBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
    // else {
    //     navigation.navigate('RootPage');
    // }
  };

  return isCustomStatusBar ? (
    <LinearGradient
      colors={[COLOR.gray, COLOR.gray2, COLOR.gray3]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.header}>
      <TouchableOpacity
        style={[styles.backButton, {paddingHorizontal: 8}]}
        onPress={handleBackPress}>
        <Icon
          name="chevron-left"
          type={IconType.Feather}
          size={25}
          color={'white'}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {textAlign}]}>{title}</Text>
      </View>
      <View style={styles.emptySpace} />
    </LinearGradient>
  ) : (
    <View
      style={[
        styles.header,
        {backgroundColor: 'red', minHeight: HEIGHT * 0.11},
      ]}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon
          name="chevron-left"
          type={IconType.Feather}
          size={25}
          color={'black'}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {textAlign}]}>{title}</Text>
      </View>
      <View style={styles.emptySpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(7),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: RFValue(25),
    padding: 1,
    borderWidth: 0,
    borderColor: COLOR.white,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontWeight: '500',
    color: COLOR.white || '#000',
    fontSize: responsiveFontSize(2.1),
  },
  emptySpace: {
    width: RFValue(40),
  },
});

export default BackNavigation;
