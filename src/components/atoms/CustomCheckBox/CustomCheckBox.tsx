import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { COLOR } from "~/utils/Color/Color";

const CustomCheckbox = ({ checked, onToggle, children, containerStyle, checkboxStyle, activeColor }: {
    checked: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    containerStyle?: ViewStyle;
    checkboxStyle?: ViewStyle;
    activeColor?: string;
}) => {
    return (
        <TouchableOpacity
            style={[styles.checkboxContainer, containerStyle]}
            onPress={onToggle}
            activeOpacity={0.7}
        >
            <View style={[
                styles.checkbox,
                checkboxStyle,
                checked ? styles.checkboxChecked : styles.checkboxUnchecked,
                checked ? { backgroundColor: activeColor, borderColor: activeColor } : {},
            ]}>
                {checked && (
                    <View style={styles.checkmark}>
                        <Text style={styles.checkmarkText}>✓</Text>
                        
                    </View>
                )}
            </View>
            <View style={styles.checkboxTextContainer}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 16,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    profileCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    detailsContainer: {
        marginTop: 5,
    },
    detailItem: {
        marginBottom: 12,
    },
    detailLabel: {
        fontSize: 14,
        color: '#888',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    abhaHeaderText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    abhaNumberText: {
        fontSize: 16,
        color: '#4285F4',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    // Custom Checkbox Styles
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 24,
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 3,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxUnchecked: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaa',
    },
    checkboxChecked: {
        backgroundColor: '#4285F4',
        borderWidth: 1,
        borderColor: '#4285F4',
    },
    checkmark: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmarkText: {
        color: COLOR.Primary1,
        fontSize: 12,
        fontWeight: 'bold',
    },
    checkboxTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    consentText: {
        fontSize: 12,
        color: '#666',
        lineHeight: 18,
    },
    linkText: {
        color: '#4285F4',
        fontWeight: 'bold',
    },
    buttonContainer: {
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 10,
    },
    continueButton: {
        height: 48,
    },
    buttonTouchable: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomCheckbox;