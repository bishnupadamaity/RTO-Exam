import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const renderDocumentPreview = (document: { uri: string, base64: string, type: string, name: string }): React.ReactNode => {
    if (!document) return null;

    return (
        <View style={styles.previewContainer}>
            {document.type !== 'application/pdf' ? (
                <Image
                    source={{ uri: document.uri }}
                    style={styles.previewImage}
                    resizeMode="contain"
                />
            ) : (
                <Text style={styles.pdfText}>PDF Selected: {document.name}</Text>
            )}

            <View style={styles.documentInfoContainer}>
                <Text style={styles.documentInfoText}>File Type: {document.type}</Text>
                <Text style={styles.documentInfoText}>Base64 Length: {document.base64.length}</Text>
            </View>

            {/* <TouchableOpacity 
          style={styles.clearButton} 
          onPress={clearDocument}
        >
          <Text style={styles.clearButtonText}>Clear Document</Text>
        </TouchableOpacity> */}
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
    selectButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    selectButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    modalButton: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16,
    },
    previewContainer: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    previewImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    documentInfoContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
    },
    documentInfoText: {
        fontSize: 14,
        marginBottom: 5,
    },
    clearButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    clearButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    pdfText: {
        fontSize: 16,
        marginBottom: 20,
    }
});