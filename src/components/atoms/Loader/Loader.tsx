import { StyleSheet } from "react-native";
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLOR } from "~/utils/Color/Color";




// Loader functional component to show a loading spinner
function Loader() {
    return (
        <View style={LoaderStyles.loaderContainer}>
            {/* ActivityIndicator to show the loading spinner */}
            <ActivityIndicator size="large" color={COLOR.Primary1} />
        </View>
    );
}

export const LoaderStyles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Lighter semi-transparent background
        zIndex: 999,
    }
})

export default Loader;