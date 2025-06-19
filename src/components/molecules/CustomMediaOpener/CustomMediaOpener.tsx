import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '~/assets'
import { RFValue } from 'react-native-responsive-fontsize'
import Typography from '~/components/Typography/Typography'
import { COLOR } from '~/utils/Color/Color'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const CustomMediaOpener = ({ setIsOpenerModalVisible, label, isRequired, isPdf = true, maximumFileSize = 5 }: { setIsOpenerModalVisible: any, label: string, isRequired?: boolean, isPdf?: boolean, maximumFileSize?: number }) => {
    return (
        <View style={{ marginTop: 10 }}>
            <Typography style={{
                fontWeight: 'bold',
                color: COLOR.TextDesc,
                marginBottom: 5,
            }}>
                {label ? label : 'Upload Image'}
                {
                    isRequired && (
                        <Text style={{ color: 'red', fontSize: RFValue(12) }}> *</Text>
                    )
                }
            </Typography>

            <TouchableOpacity onPress={
                () => {
                    setIsOpenerModalVisible(true)
                }
            } style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: 13,
                borderRadius: 10,
                marginBottom: 10,
                borderWidth: 1.5,
                borderColor: COLOR.Primary1,
                borderStyle: 'dashed',
                justifyContent: 'center',
            }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} >
                        {/* <Image source={ICONS.} style={{ height: 30, width: 30 }} /> */}
                        <Icon type={IconType.FontAwesome5} name={'cloud-upload-alt'} size={30} color='#4CAF50' />
                        <Typography fontWeight='500' >Select Files</Typography>
                    </View>
                    <Typography fontSize={RFValue(10)} >
                        {` Maximum size is allowed for the attachment is ${maximumFileSize}MB.`}
                    </Typography>
                    <Typography fontSize={RFValue(10)}>
                        {`PNG/JPEG/JPG${isPdf ? '/PDF' : ''} file types are supported`}
                    </Typography>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomMediaOpener