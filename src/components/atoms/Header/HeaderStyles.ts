import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLOR } from "~/utils/Color/Color";

const HeaderStyles = StyleSheet.create({
    container: {
        paddingVertical: RFValue(5),
        paddingHorizontal: RFValue(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    logo: { width: RFValue(30), height: RFValue(30) },
    userProfileContainer: {
        padding: RFValue(2),
        backgroundColor: COLOR.Primary1,
        borderRadius: RFValue(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        width: RFValue(25),
        height: RFValue(25),
        borderRadius: RFValue(50),
        padding: RFValue(2),
        backgroundColor: COLOR.black,
    },
    notificationCounter: {
        position: 'absolute',
        top: -5,
        right: -4,
        backgroundColor: 'red',
        borderRadius: 10,
        width: RFValue(15),
        height: RFValue(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchContainer: {
        paddingVertical: 1,
        paddingHorizontal: 2,
        borderColor: 'red',
        borderRadius: 10,
        marginRight: 2,
    },
    emergencyContainer: {
        paddingVertical: 2,
        // backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:9
    }
});

export default HeaderStyles