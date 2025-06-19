// Import necessary modules from React and React Native
import React from 'react';
import { Text } from 'react-native';

import { TextStyle, DimensionValue } from 'react-native';
import { COLOR } from '~/utils/Color/Color';

export type FontWeight =
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

export interface TextProps {
    color?: string;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: FontWeight;
    width?: DimensionValue; // Adjusted to DimensionValue for compatibility
    style?: TextStyle;
    children?: React.ReactNode;
    onPress?: () => void;
    numberOfLines?: number;
}

// Define a functional component named Typography which receives props of type TextProps
const Typography: React.FC<TextProps> = ({
    color,
    fontSize,
    lineHeight,
    fontWeight,
    width, // New width property
    style,
    children,
    onPress,
    numberOfLines,
}) => {
    // Define a textStyle object to hold styles for the Text component
    const textStyle: TextStyle = {
        // Set the color of the text to the provided color or default to black
        color: color || COLOR.TextHeader,
        // Set the font size to the provided font size or default to 14
        fontSize: fontSize || 14,
        // Set the line height to the provided line height or font size, or default to 20
        lineHeight: lineHeight || fontSize || 20,
        // Set the font weight to the provided font weight or default to 'normal'
        fontWeight: fontWeight || 'normal',
        // Set the width to the provided width or leave it undefined
        width: width,
    };

    // Return a Text component with the computed styles
    return (
        <Text
            onPress={onPress}
            style={[textStyle, style]}
            numberOfLines={numberOfLines}>
            {children}
        </Text>
    );
};

// Export the Typography component as the default export
export default Typography;