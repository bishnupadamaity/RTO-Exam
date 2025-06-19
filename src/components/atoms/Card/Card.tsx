import React from 'react';
import { View } from 'react-native';
import { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

const CardStyles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        // paddingBottom: 0,
    },
});
export interface CardTypes {
    width?: number;
    height?: ViewStyle['height'];
    backgroundColor: string;
    borderRadius: number;
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    style?: ViewStyle;
    marginRight?: ViewStyle['marginRight'];
    children?: React.ReactNode;
    padding?: ViewStyle['padding'];
}
const Card: React.FC<CardTypes> = ({
    width,
    height,
    backgroundColor,
    borderRadius,
    justifyContent,
    alignItems,
    style,
    children,
    marginRight,
    padding
}) => {
    return (
        <View
            style={[
                CardStyles.container, // Use imported styles here
                {
                    width,
                    height,
                    backgroundColor,
                    borderRadius,
                    justifyContent,
                    alignItems,
                    marginRight,
                    padding
                },
                style,
            ]}>
            {children}
        </View>
    );
};

export default Card;