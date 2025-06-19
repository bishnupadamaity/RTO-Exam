import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLOR } from "~/utils/Color/Color";
import { RFValue } from "react-native-responsive-fontsize";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    iconName?: string;
    iconType?: IconType;
    iconSize?: number;
    iconColor?: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    isDisabled?: boolean;
    leftIcon?: any;
    gradientStyle?: ViewStyle;
}

const CustomGradientButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    iconName,
    iconType = IconType.Feather,
    iconSize = 20,
    iconColor = "white",
    buttonStyle,
    textStyle,
    isDisabled = false,
    leftIcon,
    gradientStyle
}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isDisabled} activeOpacity={0.8} style={[styles.buttonContainer, buttonStyle, isDisabled && {opacity: 0.5}]}>

            <LinearGradient
                colors={[COLOR.Primary1, COLOR.Primary2, COLOR.Primary3]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.button, gradientStyle]}
            >
                {
                    leftIcon && (
                        <View style={{ marginLeft: RFValue(10) }}>
                            {leftIcon}
                        </View>
                    )
                }
                {iconName && (
                    <Icon name={iconName} type={iconType} size={iconSize} color={iconColor} style={styles.icon} />
                )}
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </LinearGradient>


        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: RFValue(25),
        overflow: "hidden",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: RFValue(12),
        paddingHorizontal: RFValue(20),
        borderRadius: RFValue(10),
        gap:4
    },
    icon: {
        marginRight: 8,
    },
    buttonText: {
        color: "white",
        fontSize: RFValue(16),
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CustomGradientButton;
