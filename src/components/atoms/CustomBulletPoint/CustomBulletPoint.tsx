import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLOR } from "~/utils/Color/Color";
import { RFValue } from "react-native-responsive-fontsize";

interface CustomBulletPointProps {
    text: string;
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
    isSelected: boolean;
    onPress: (event: any) => void;
}

const CustomBulletPoint: React.FC<CustomBulletPointProps> = ({
    text,
    textStyle,
    containerStyle,
    isSelected,
    onPress
}) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isSelected ? COLOR.BackgroundColor : 'transparent' }, containerStyle]} onPress={onPress}>
            {/* Bullet Container */}
            <View style={styles.bulletContainer}>
                {isSelected && (
                    <LinearGradient
                        colors={[COLOR.Primary1, COLOR.Primary2, COLOR.Primary3]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.bullet}
                    />
                )}
            </View>

            {/* Text */}
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: RFValue(8),
        paddingHorizontal: RFValue(12),
        paddingLeft: RFValue(5),
        // marginHorizontal: 10,
        marginVertical:0,
        // borderRadius: 6,
        paddingVertical: RFValue(12),
        backgroundColor: 'red',
        borderRadius:10
    },
    bulletContainer: {
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RFValue(10),
        borderWidth: 1,
        borderColor: COLOR.placeholderText,
        alignItems: "center",
        justifyContent: "center",
        marginRight: RFValue(10), // Space between bullet and text
    },
    bullet: {
        width: RFValue(10),
        height: RFValue(10),
        borderRadius: RFValue(5),
    },
    text: {
        fontSize: RFValue(14),
        color: "black",
        fontWeight: "500",
    },
});

export default CustomBulletPoint;
