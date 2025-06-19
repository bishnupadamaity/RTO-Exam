import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const BottomModalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding:10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
});

export default BottomModalStyles;
