import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

// Mobile success modal for React Native
const AbhaCongratulationModal = ({
    visible,
    userId = "sharma21_2002.01",
    onLogin,
    onClose = () => { },
}: {
        visible: boolean,
        userId: string,
        onLogin: () => void,
    onClose?: () => void
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* Success icon */}
                    <View style={styles.iconContainer}>
                        <View style={styles.checkmark}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>✓</Text>
                        </View>
                    </View>

                    {/* Success text */}
                    <Text style={styles.successText}>Congratulations</Text>

                    {/* Message content */}
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>Your ABHA Address</Text>
                        <View style={styles.userIdContainer}>
                            <Text style={styles.userIdText}>{userId}</Text>
                        </View>
                        <Text style={styles.messageText}>has been created successfully.</Text>
                    </View>

                    {/* Login button */}
                    <TouchableOpacity
                        style={styles.loginButton}
                        activeOpacity={0.8}
                        onPress={onLogin}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    modalView: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(34, 197, 94, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkmark: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#22c55e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successText: {
        fontSize: 24,
        color: '#22c55e',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    messageContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
    },
    messageText: {
        fontSize: 16,
        color: '#4b5563',
        textAlign: 'center',
        lineHeight: 24,
    },
    userIdContainer: {
        backgroundColor: '#f3f4f6',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 10,
        width: '90%',
    },
    userIdText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'center',
    },
    loginButton: {
        backgroundColor: '#22c55e',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AbhaCongratulationModal;