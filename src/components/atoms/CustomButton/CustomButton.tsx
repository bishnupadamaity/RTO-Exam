import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLOR } from "~/utils/Color/Color";
import { RFValue } from "react-native-responsive-fontsize";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { WIDTH } from "~/utils/Constants/Constants";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    iconName?: string;
    iconType?: IconType;
    iconSize?: number;
    iconColor?: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    leftIcon?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    iconName,
    iconType = IconType.Feather,
    iconSize = 20,
    iconColor = "white",
    buttonStyle,
    textStyle,
    leftIcon,
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonContainer, buttonStyle]}>
            {leftIcon && (
                <View style={{}}>
                    {leftIcon}
                </View>
            )}

            {iconName && (
                <Icon name={iconName} type={iconType} size={iconSize} color={iconColor} style={styles.icon} />
            )}
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: RFValue(10),
        overflow: "hidden",
        borderColor: '#06038D',
        borderWidth: 1.5,
        paddingVertical: RFValue(9),
        paddingHorizontal: RFValue(18),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        // marginTop:10,
        gap: 4
    },
    icon: {
        marginRight: 8,
    },
    buttonText: {
        color: "#06038D",
        fontSize: RFValue(16),
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CustomButton;
