import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import CustomGradientButton from '~/components/atoms/CustomGradientButton/CustomGradientButton';

const NoDataFound = ({
    title = "No Data Found",
    message = "We couldn't find any items matching your criteria.",
    actionLabel = "Refresh",
    onAction = () => { },
    iconName = "storage",
    showAction = false,
    theme = "light", // 'light' or 'dark',
}) => {
    // Animation values
    const opacity = new Animated.Value(0);
    const translateY = new Animated.Value(20);

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    // Theme colors
    const colors = {
        light: {
            background: '#ffffff',
            text: '#333333',
            subtext: '#757575',
            icon: '#c0c0c0',
            actionBg: '#f2f2f2',
            actionText: '#333333',
        },
        dark: {
            background: '#1e1e1e',
            text: '#ffffff',
            subtext: '#b0b0b0',
            icon: '#555555',
            actionBg: '#333333',
            actionText: '#ffffff',
        }
    };
    //@ts-ignore
    const themeColors = colors[theme];

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <Animated.View
                style={[
                    styles.content,
                    {
                        opacity: opacity,
                        transform: [{ translateY: translateY }]
                    }
                ]}
            >
                <View style={styles.iconContainer}>
                    <Icon type={IconType.MaterialIcons} name={iconName} size={64} color={themeColors.icon} />

                </View>

                <Text style={[styles.title, { color: themeColors.text }]}>
                    {title}
                </Text>

                <Text style={[styles.message, { color: themeColors.subtext }]}>
                    {message}
                </Text>

                {showAction && (
                    
                    <CustomGradientButton onPress={onAction} title={actionLabel} />
                )}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
        maxWidth: 300,
    },
    iconContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 22,
    },
    actionButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 1,
    },
    actionText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default NoDataFound;