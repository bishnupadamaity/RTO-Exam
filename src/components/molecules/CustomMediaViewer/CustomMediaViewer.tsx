import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { ICONS, IMAGES } from '~/assets';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { RFValue } from 'react-native-responsive-fontsize';
import Modal from 'react-native-modal';
import Pdf from 'react-native-pdf';
import { COLOR } from '~/utils/Color/Color';
import { HEIGHT, WIDTH } from '~/utils/Constants/Constants';
import CustomButton from '~/components/atoms/CustomButton/CustomButton';
import Typography from '~/components/Typography/Typography';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
interface SelectedDocument {
  uri: string;
  base64: string;
  type: string;
  name: string;
}
const CustomMediaViewer = ({
  documentObj,
  setDocumentObj,
}: {
  documentObj: SelectedDocument;
  setDocumentObj: React.Dispatch<React.SetStateAction<SelectedDocument | null>>;
}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalImageObj, setModalImageObj] = React.useState<SelectedDocument | null>(null);
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#8fc98d',
        borderRadius: 10,
        flexDirection: 'column',
        gap: 10,
      }}>
      <View style={{ backgroundColor: '#f5f5f5', borderRadius: 10,overflow:'hidden', alignItems:'center', justifyContent:'center' }}>
        {
          documentObj.type == 'camera' || documentObj.type == 'gallery' || documentObj.type == 'image/jpeg'  ?
            (
              <Image
                source={
                  // documentObj?.base64?
                    { uri: `data:image/octet-stream;base64,${documentObj?.base64}` }
                    // : IMAGES.IMAGEPLACEHOLDER
                }
                style={{
                  width: WIDTH * 0.9,
                  height: responsiveWidth(40),
                  borderRadius: RFValue(10),
                }}
                resizeMode="contain"
              />
            ) :  (
              <View style={{ height: responsiveWidth(40), alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
                {/* <Image source={ICONS.FILE} style={{ width: WIDTH * 0.5, height: responsiveWidth(15), borderRadius: RFValue(10), alignSelf: 'center' }} resizeMode='contain' /> */}
                <Icon name={'file-text'} type={IconType.Feather} size={responsiveFontSize(2)} color={'#000'} />
                <Typography fontWeight="500" fontSize={responsiveFontSize(1.8)} color={'#000'}>{documentObj?.name}</Typography>
              </View>
            )
        }

      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          backgroundColor: 'transparent',
        }}>
        <TouchableOpacity style={Styles.button} onPress={() => { setModalImageObj(documentObj), setIsModalVisible(true) }}>
          <Typography fontWeight="600">
            View
          </Typography>

          
          {/* <Icon name={'eye-off'} type={IconType.Feather} size={responsiveFontSize(2)} color={'#000'} /> */}

        </TouchableOpacity>
        <View style={Styles.divider} />
        <TouchableOpacity style={Styles.button} onPress={() => { setDocumentObj(null) }}>
          <Typography fontWeight="600">Remove</Typography>

          {/* <Image
            source={ICONS.DUSTBIN}
            style={{ width: RFValue(12), height: RFValue(12) }}
          /> */}

        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setIsModalVisible(false), setModalImageObj(null);
        }}
        style={{ borderRadius: 20 }}>
        <View
          style={{
            flexDirection: 'column',
            padding: 10,
            gap: 8,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 20,
            overflow: 'hidden',
            minHeight:HEIGHT*0.7,
            justifyContent:'space-between'
          }}>
          {
            modalImageObj?.type === 'camera' || modalImageObj?.type === 'gallery' || documentObj.type == 'image/jpeg' ? (
              <Image
                source={
                  // modalImageObj?.base64 ?
                  { uri: `data:image/jpeg;base64,${modalImageObj?.base64}` }
                  // : IMAGES.IMAGEPLACEHOLDER
          }
                style={{
                  width: WIDTH * 0.98,
                  height: WIDTH * 0.95,
                  resizeMode: 'contain',
                }}
              />
            ) : modalImageObj?.type === 'pdf' ? (
              <>
                <Pdf
                  source={{ uri: `data:application/pdf;base64,${modalImageObj?.base64}` }}
                  onLoadComplete={(numberOfPages, filePath) => {}}
                  onPageChanged={(page, numberOfPages) => {}}
                  onError={(error) => {}}
                  onPressLink={(uri) => {}}
                  style={Styles.pdf}
                />
                <Typography>{modalImageObj.name}</Typography>
              </>
            ) : null
          }

          {/* <Button
            text={'Close'}
            height={50}
            width={WIDTH * 0.8}
            backgroundColor={COLOR.BorderBlue}
            textColor={'#fff'}
            onPress={() => {
              setIsModalVisible(false), setModalImageObj(null);
            }}
          /> */}
          <CustomButton title={'Close'} onPress={() => {
            setIsModalVisible(false), setModalImageObj(null);
          } } />
        </View>
      </Modal>
    </View>
  );
};

const Styles = StyleSheet.create({
  pdf: {
    // flex: 1,
    // width: WIDTH * 0.6,
    // height: WIDTH * 0.6,
    width: 400,
    height: 400
  },
  addClinic: {
    backgroundColor: COLOR.BorderBlue,
    position: 'absolute',
    bottom: RFValue(15),
    right: RFValue(15),
    borderRadius: RFValue(50),
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(16),
    zIndex: 1000,
  },
  plusIcon: {
    height: RFValue(22),
    width: RFValue(22),
  },
  clinicCardContainer: {
    backgroundColor: '#8fc98d',
    borderWidth: 1,
    borderColor: COLOR.BorderBlue,
    borderRadius: 10,
    marginBottom: RFValue(10),
    flexDirection: 'column',
    overflow: 'hidden',
  },
  textContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: { alignSelf: 'flex-end', padding: 5 },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 65,
    paddingHorizontal: 10,
  },
  header: {
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  search: {
    height: RFValue(20),
    width: RFValue(20),
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: COLOR.BackgroundColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: COLOR.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  detailContainer: {
    backgroundColor: '#fff',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
});

export default CustomMediaViewer;
