import { View, Text, TouchableOpacity, Image, ViewProps, ImageProps, TextProps } from 'react-native'
import React from 'react'
import { ICONS } from '~/assets'
import { WIDTH } from '~/utils/Constants/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { COLOR } from '~/utils/Color/Color'

const IconCard = ({
    icon,
    title,
    onPress,
    buttonStyle,
    iconStyle,
    titleStyle
}: {
    icon: ImageProps['source'],
    title: String,
    onPress: ()=>void,
    buttonStyle: ViewProps["style"],
    iconStyle: ImageProps['style'],
    titleStyle: TextProps['style']
}) => {
    return (
        <TouchableOpacity style={[{ alignItems: 'center', width: WIDTH * 0.2, flexDirection: 'column', justifyContent: 'space-between' },buttonStyle]} onPress={onPress}>
            <Image source={icon} style={[{ width: 40, height: 40, resizeMode: 'contain' }, iconStyle]} />
            <Text style={[{ fontSize: RFValue(10), color: COLOR.TextDesc, fontWeight: '500', textAlign: 'center' },titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default IconCard