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
  backgroundColor?: string;
}> = ({goBack, title, textAlign = 'center', backgroundColor = '#fff'}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    if (goBack) {
      goBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: backgroundColor,
          borderBottomWidth: 1,
          borderBottomColor: COLOR.gray5,
        },
        // {backgroundColor: 'red'},
      ]}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon
          name="chevron-left"
          type={IconType.Feather}
          size={25}
          color={COLOR.black}
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
  },
  backButton: {
    backgroundColor: COLOR.white,
    borderRadius: RFValue(25),
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: responsiveFontSize(2.2),
    marginTop: -5,
  },
  emptySpace: {
    width: RFValue(40),
  },
});

export default BackNavigation;
