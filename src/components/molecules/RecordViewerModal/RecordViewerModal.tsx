import { useRef, useState } from "react";
import { Animated, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

const RecordViewerModal = () => {
    if (!selectedRecord) return null;

    const formattedDate = selectedRecord.dateOfVisit ?
        format(new Date(selectedRecord.dateOfVisit), 'MMMM dd, yyyy') :
        format(new Date(selectedRecord.createdAt), 'MMMM dd, yyyy');

    // Custom pinch-to-zoom implementation using Animated and PanResponder
    const [scale, setScale] = useState(1);
    const [lastScale, setLastScale] = useState(1);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const [dragging, setDragging] = useState(false);

    const pan = useRef(new Animated.ValueXY()).current;
    const scale_anim = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,

            onPanResponderGrant: () => {
                setDragging(true);
                setLastX(offsetX);
                setLastY(offsetY);
                pan.setOffset({
                    x: offsetX,
                    y: offsetY
                });
                pan.setValue({ x: 0, y: 0 });
            },

            onPanResponderMove: (evt, gestureState) => {
                // Handle pinch gesture (two fingers)
                if (evt.nativeEvent.changedTouches.length >= 2) {
                    let touch1 = evt.nativeEvent.changedTouches[0];
                    let touch2 = evt.nativeEvent.changedTouches[1];

                    // Calculate distance between touches
                    const dx = Math.abs(touch1.pageX - touch2.pageX);
                    const dy = Math.abs(touch1.pageY - touch2.pageY);
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Calculate new scale (simplified)
                    const newScale = Math.max(1, Math.min(3, lastScale * (distance / 150)));

                    setScale(newScale);
                    scale_anim.setValue(newScale);
                }
                // Handle drag (one finger)
                else {
                    // Only allow dragging when zoomed in
                    if (scale > 1) {
                        Animated.event(
                            [null, { dx: pan.x, dy: pan.y }],
                            { useNativeDriver: false }
                        )(evt, gestureState);
                    }
                }
            },

            onPanResponderRelease: () => {
                setDragging(false);
                setLastScale(scale);
                setOffsetX(pan.x._value + lastX);
                setOffsetY(pan.y._value + lastY);
                pan.flattenOffset();
            }
        })
    ).current;

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Icon name="x" size={24} color="#333" type={IconType.Feather} />
                    </TouchableOpacity>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitle}>
                            {selectedRecord.name || selectedRecord.hiType}
                        </Text>
                        <Text style={styles.modalSubtitle}>
                            {formattedDate} • Dr. {selectedRecord.doctorName || "Unknown"}
                        </Text>
                    </View>
                </View>

                <View style={styles.zoomableContainer}>
                    {selectedRecord.compressedRecordUrl ? (
                        <Animated.View
                            style={[
                                styles.zoomableContent,
                                {
                                    transform: [
                                        { translateX: pan.x },
                                        { translateY: pan.y },
                                        { scale: scale_anim }
                                    ]
                                }
                            ]}
                            {...panResponder.panHandlers}
                        >
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${selectedRecord.compressedRecordUrl}` }}
                                style={styles.fullImage}
                                resizeMode="contain"
                            />
                        </Animated.View>
                    ) : (
                        <View style={styles.noImageContainer}>
                            <Icon name="file-text" size={80} color="#ccc" type={IconType.Feather} />
                            <Text style={styles.noImageText}>No image available</Text>
                        </View>
                    )}
                </View>

                <View style={styles.modalFooter}>
                    <Text style={styles.zoomHint}>Pinch to zoom in/out, drag to move when zoomed</Text>
                    <View style={styles.modalActionButtons}>
                        <TouchableOpacity
                            style={styles.modalActionButton}
                            onPress={() => shareRecord(selectedRecord)}
                            disabled={isSharing}
                        >
                            {isSharing ? (
                                <ActivityIndicator size="small" color="#FFF" />
                            ) : (
                                <>
                                    <Icon name="share-2" size={20} color="#FFF" type={IconType.Feather} />
                                    <Text style={styles.modalActionText}>Share</Text>
                                </>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.modalActionButton}
                            onPress={() => downloadImageWithBlob({
                                imageBase64: selectedRecord.compressedRecordUrl,
                                name: selectedRecord.name || `record_${selectedRecord.recordId}`
                            })}
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <ActivityIndicator size="small" color="#FFF" />
                            ) : (
                                <>
                                    <Icon name="download" size={20} color="#FFF" type={IconType.Feather} />
                                    <Text style={styles.modalActionText}>Download</Text>
                                </>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};