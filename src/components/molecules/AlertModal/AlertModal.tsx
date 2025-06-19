
import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
    Platform
} from 'react-native';

const AlertTypes = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
};

const DynamicAlertModal = ({
    visible,
    title,
    message,
    type = "SUCCESS",
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    showCancel = true,
    autoClose = false,
    autoCloseTime = 3000,
    textAlign = 'left'
}: {
    visible: boolean;
    title: string;
    message: string;
    type?: 'SUCCESS' | 'WARNING' | 'ERROR';
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    showCancel?: boolean;
    autoClose?: boolean;
        autoCloseTime?: number;
    textAlign?: 'left' | 'center' | 'right';
}) => {
    const [animation] = useState(new Animated.Value(0));
    const [fadeAnim] = useState(new Animated.Value(0));
    const { height } = Dimensions.get('window');

    useEffect(() => {
        if (visible) {
            // Fade in overlay
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true
            }).start();

            // Animate modal from bottom
            Animated.spring(animation, {
                toValue: 1,
                friction: 8,
                tension: 60,
                useNativeDriver: true
            }).start();

            if (autoClose) {
                const timer = setTimeout(() => {
                    handleClose();
                }, autoCloseTime);
                return () => clearTimeout(timer);
            }
        } else {
            // Fade out everything
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                })
            ]).start();
        }
    }, [visible]);

    const handleClose = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            if (onCancel) onCancel();
        });
    };

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        handleClose();
    };

    // Get styles for the alert type
    const getTypeStyles = () => {
        switch (type) {
            case AlertTypes.SUCCESS:
                return {
                    accentColor: '#34c759',
                    backgroundColor: '#f0faf4',
                    iconBackgroundColor: '#34c759',
                    iconBorderColor: '#d0f0da',
                    titleColor: '#167938',
                    buttonGradient: ['#34c759', '#30b350']
                };
            case AlertTypes.WARNING:
                return {
                    accentColor: '#ff9500',
                    backgroundColor: '#fff9f0',
                    iconBackgroundColor: '#ff9500',
                    iconBorderColor: '#ffe4c0',
                    titleColor: '#c86500',
                    buttonGradient: ['#ff9500', '#f08300']
                };
            case AlertTypes.ERROR:
                return {
                    accentColor: '#ff3b30',
                    backgroundColor: '#fff5f5',
                    iconBackgroundColor: '#ff3b30',
                    iconBorderColor: '#ffd0d0',
                    titleColor: '#c42b21',
                    buttonGradient: ['#ff3b30', '#e5352b']
                };
            default:
                return {
                    accentColor: '#34c759',
                    backgroundColor: '#f0faf4',
                    iconBackgroundColor: '#34c759',
                    iconBorderColor: '#d0f0da',
                    titleColor: '#167938',
                    buttonGradient: ['#34c759', '#30b350']
                };
        }
    };

    const typeStyles = getTypeStyles();

    // Icons for different alert types
    const renderIcon = () => {
        switch (type) {
            case AlertTypes.SUCCESS:
                return (
                    <View style={[styles.iconOuterContainer, { borderColor: typeStyles.iconBorderColor }]}>
                        <View style={[styles.iconContainer, { backgroundColor: typeStyles.iconBackgroundColor }]}>
                            <Text style={styles.icon}>✓</Text>
                        </View>
                    </View>
                );
            case AlertTypes.WARNING:
                return (
                    <View style={[styles.iconOuterContainer, { borderColor: typeStyles.iconBorderColor }]}>
                        <View style={[styles.iconContainer, { backgroundColor: typeStyles.iconBackgroundColor }]}>
                            <Text style={styles.icon}>!</Text>
                        </View>
                    </View>
                );
            case AlertTypes.ERROR:
                return (
                    <View style={[styles.iconOuterContainer, { borderColor: typeStyles.iconBorderColor }]}>
                        <View style={[styles.iconContainer, { backgroundColor: typeStyles.iconBackgroundColor }]}>
                            <Text style={styles.icon}>✕</Text>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [height / 2, 0]
    });

    const scale = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.9, 0.95, 1]
    });

    return (
        <Modal
            transparent
            visible={visible}
            animationType="none"
            onRequestClose={handleClose}
        >
            <Animated.View style={[
                styles.overlay,
                { opacity: fadeAnim }
            ]}>
                <Animated.View
                    style={[
                        styles.container,
                        {
                            transform: [{ translateY }, { scale }],
                            backgroundColor: typeStyles.backgroundColor
                        }
                    ]}
                >
                    <View style={styles.contentWrapper}>
                        <View style={styles.iconWrapper}>
                            {renderIcon()}
                        </View>

                        <Text style={[styles.title, { color: typeStyles.titleColor }]}>
                            {title || type.charAt(0).toUpperCase() + type.slice(1)}
                        </Text>

                        <Text style={[styles.message, { textAlign, alignItems: 'center' }]}>
                            {message}
                        </Text>

                        <View style={styles.buttonContainer}>
                            {showCancel && (
                                <TouchableOpacity
                                    style={[styles.button, styles.cancelButton]}
                                    onPress={handleClose}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.cancelButtonText}>{cancelText}</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                    styles.confirmButton,
                                    { backgroundColor: typeStyles.accentColor }
                                ]}
                                onPress={handleConfirm}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.confirmButtonText}>{confirmText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(30, 30, 30, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '85%',
        maxWidth: 340,
        borderRadius: 20,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    contentWrapper: {
        padding: 24,
        alignItems: 'center',
    },
    iconWrapper: {
        marginBottom: 16,
        alignItems: 'center',
    },
    iconOuterContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 12,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
    },
    message: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 8,
    },
    button: {
        flex: 1,
        height: 52,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    cancelButton: {
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#e5e5e5',
    },
    confirmButton: {
        backgroundColor: '#4caf50',
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButtonText: {
        color: '#555',
        fontSize: 16,
    }
});

export { DynamicAlertModal, AlertTypes };