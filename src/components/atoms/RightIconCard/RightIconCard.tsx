import React from 'react';
import { View, Text, Image } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import CustomButton from '../CustomButton/CustomButton';
import { RightIconCardTypes } from './RightIconCardTypes';
import { RightIconCardStyles } from './RightIconCardStyles';

// Define the RightIconCard component using TypeScript and React.FC to type the props
const RightIconCard: React.FC<RightIconCardTypes> = ({ image, heading, description, buttonText, onButtonPress }) => {
    return (
        <View style={RightIconCardStyles.container}>
            {/* Container for the text and button */}
            <View style={RightIconCardStyles.textContainer}>
                {/* Heading text */}
                <Text style={RightIconCardStyles.heading}>{heading}</Text>
                {/* Description text */}
                <Text style={RightIconCardStyles.description}>{description}</Text>
                {/* Button component with styles and props */}
                <CustomButton buttonStyle={RightIconCardStyles.ButtonStyle}
                    
                    title={buttonText}
                    textStyle={{color:'#fff'}}

                    // backgroundColor={colorCode.DarkBlue}
                    // width={responsiveWidth(35)}
                    // height={responsiveHeight(6)}
                    onPress={onButtonPress}
                />
            </View>
            {/* Container for the SVG icon */}
            <View style={RightIconCardStyles.imageContainer}>
                {/* Render the SVG component with responsive dimensions */}
                <Image source={image} style={{width:responsiveWidth(35), height:responsiveHeight(35), resizeMode:'contain'}} />
            </View>
        </View>
    );
};

export default RightIconCard;
