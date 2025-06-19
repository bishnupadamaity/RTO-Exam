import { View, Text } from 'react-native'
import React from 'react'
import BottomModal from '../BottomModal/BottomModal'

const UploadRecordModal = ({ isVisible, onClose }: {
    isVisible: boolean;
    onClose: () => void;
}) => {
    return (
        <BottomModal isVisible={isVisible} onClose={onClose}>
           <View></View>
        </BottomModal>
    )
}

export default UploadRecordModal