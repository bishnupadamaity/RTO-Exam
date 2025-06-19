import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLOR} from '~/utils/Color/Color';

const PrivateContainerStyles = StyleSheet.create({
  banner: {
    backgroundColor: '#D7E5FF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
  bannerText: {
    color: COLOR.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(10),
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: RFValue(25),
    padding: 4,
    borderWidth: 0,
    borderColor: COLOR.white,
  },
  icon: {
    width: RFValue(20),
    height: RFValue(20),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: RFValue(12),
  },
  emptySpace: {
    width: RFValue(40),
  },
  body: {
    flex: 1,
  },
});

export default PrivateContainerStyles;
