import React from 'react';
import { Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import Modal from 'react-native-modal';
import { ICONS } from '~/assets';
import { COLOR } from '~/utils/Color/Color';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { WIDTH } from '~/utils/Constants/Constants';
type ImageType = {
    cropRect: {
      width: number;
      height: number;
      x: number;
      y: number;
    };
    data: string; // Base64 string representation of the image
    filename: string;
    height: number;
    mime: string; // MIME type, e.g., "image/jpeg"
    modificationDate: string; // Modification date in string format
    path: string; // Path to the image file
    size: number; // Size of the image in bytes
    width: number;
  };
const CustomUploadMedia = (
    {
        isPickerVisible,
        setIsPickerVisible,
        setSelectedDocumentObj,
        isPdf = true
    }: {
        isPickerVisible: boolean,
        setIsPickerVisible: (visible: boolean) => void,
        isPdf?: boolean,
        setSelectedDocumentObj: (document: {
            uri: string;
            base64: string;
            type: string;
            name: string;
        } | null) => void,
    }
) => {
    const requestCameraPermission = async (): Promise<boolean> => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Camera Permission",
                        message: "App needs access to your camera",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true;
    };
    const takePhotoFromCamera = async (): Promise<void> => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) return;
        try {
            const image:any = await ImagePicker.openCamera({
                cropping: true, // Enables cropping
                includeBase64: true, // Includes base64 data
                freeStyleCropEnabled: true, // Allows freeform cropping
                cropperCircleOverlay: false, // Optional: Enable circular cropper
            });


    
            setSelectedDocumentObj({
                uri: image.path,
                base64: image.data || '',
                type: image.mime || 'image/jpeg',
                name: `camera_photo_${Date.now()}.jpg`,
            });
    
            setIsPickerVisible(false);
        } catch (err) {
            console.warn('Error opening camera:', err);
        }
    };
    const pickImageFromGallery = async (): Promise<void> => {
        try {
            const image:any = await ImagePicker.openPicker({
                cropping: true, // Enables cropping
                includeBase64: true, // Includes base64 data
                freeStyleCropEnabled: true, // Allows freeform cropping
            });
    
            setSelectedDocumentObj({
                uri: image.path,
                base64: image.data || '',
                type: image.mime || 'image/jpeg',
                name: image.filename || `gallery_image_${Date.now()}.jpg`,
            });
    
            setIsPickerVisible(false);
        } catch (err) {
            console.warn('Error picking image from gallery:', err);
        }
    };
    const pickDocument = async (): Promise<void> => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            });

            // Correctly handle the response URI
            const documentUri = Platform.OS === 'ios'
                ? res[0].uri.replace('file://', '')
                : res[0].uri;

            // Convert file to base64
            const base64 = await RNFS.readFile(documentUri, 'base64');

            setSelectedDocumentObj({
                uri: res[0].uri,
                base64: base64,
                // type: res[0].type || 'unknown',
                type: 'pdf',
                name: res[0].name || 'unknown_file'
            });

            setIsPickerVisible(false);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
            }
        }
    };
    return (

        <Modal
            isVisible={isPickerVisible}
            style={styles.modal}
            onBackdropPress={() => setIsPickerVisible(false)}
            onBackButtonPress={() => setIsPickerVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.optionContainer}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => { setIsPickerVisible(false), takePhotoFromCamera() }}>
                        {/* <Image
                            source={ICONS.CAMERABLUE}
                            style={{ width: 44, resizeMode: 'contain', height: 43 }}
                        /> */}
                        <Icon type={IconType.FontAwesome} name={'camera'} size={22} color={COLOR.Primary2} />
                        <Text style={styles.optionText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => { setIsPickerVisible(false), pickImageFromGallery() }}>
                      
                        <Icon type={IconType.FontAwesome} name={'image'} size={22} color={COLOR.Primary2} />
                        <Text style={styles.optionText}>Gallery</Text>
                    </TouchableOpacity>
                    {
                        isPdf &&
                        <TouchableOpacity style={styles.option} onPress={() => { setIsPickerVisible(false), pickDocument() }}>
                            {/* <UploadIcon width={44} />
                         */}
                                {/* <Image source={ICONS.UPLOADBLUE} style={{ width: 44, resizeMode: 'contain', height: 43 }} /> */}
                                <Icon type={IconType.FontAwesome} name={'file-pdf-o'} size={22} color={COLOR.Primary2} />
                            <Text style={styles.optionText}>Files</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: COLOR.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
    },
    optionContainer: {
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        gap:10,
        alignItems: 'center',
        // paddingHorizontal: 30,
        // marginVertical: 20,
    },
    option: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        width: WIDTH * 0.35,
        padding: 10,
        justifyContent: 'space-evenly',
        backgroundColor:'#f5f5f5',
        borderRadius: 10,
    },
    optionText: {
        marginTop: 5,
        fontSize: 14,
        color: COLOR.BorderBlue,
        fontWeight: '600',
    },

    selectButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    selectButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalContainer: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    modalButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16,
    },
    previewContainer: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    previewImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    documentInfoContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
    },
    documentInfoText: {
        fontSize: 14,
        marginBottom: 5,
    },
    clearButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    clearButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    pdfText: {
        fontSize: 16,
        marginBottom: 20,
    }
});

export default CustomUploadMedia