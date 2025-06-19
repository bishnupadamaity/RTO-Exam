import { StyleSheet, Platform } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { COLOR } from '~/utils/Color/Color';

export const RightIconCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: COLOR.cardOrange,
        borderRadius: 20,
        backgroundColor: '#FF671F',
        width: responsiveWidth(92),
        height: 'auto',
        // ...Platform.select({
        //   ios: {
        //     shadowColor: '#000',
        //     shadowOffset: { width: 0, height: 4 },
        //     shadowOpacity: 0.25,
        //     shadowRadius: 4,
        //   },
        //   android: {
        //     elevation: 4,
        //   },
        // }),
    },
    ButtonStyle: {
        borderRadius: 25,
        marginRight: 20,
        marginTop: 20,
        borderColor:'white',
        
        ...Platform.select({
            ios: {
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.25,
                // shadowRadius: 4,
            },
            android: {
                // elevation: 4,
            },
        }),
    },
    imageContainer: {
        width: responsiveWidth(35),
        height: responsiveHeight(22),
        justifyContent: 'center',
        marginTop: 10,
    },
    textContainer: {
        width: responsiveWidth(50),
        paddingLeft: 10,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        marginBottom: 5,
    },
    description: {
        fontSize: responsiveFontSize(1.8),
        color: 'white',
        marginBottom: 10,
    },
});
