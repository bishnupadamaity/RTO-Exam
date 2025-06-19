import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import BottomModalStyles from './BottomModalStyles';
import {BottomModalProps} from './BottomModalTypes';

/**
 * BottomModal Component
 *
 * This component renders a modal that slides up from the bottom of the screen.
 * It is highly customizable with props for visibility, background color, height, and more.
 * The modal can be closed by swiping down, tapping on the backdrop, or pressing the back button.
 *
 * Props:
 * - `isVisible`: Controls whether the modal is visible or not.
 * - `onClose`: Callback function that is triggered when the modal is closed.
 * - `backgroundColor`: The background color of the modal content. Default is 'white'.
 * - `height`: The height of the modal. Can be a specific value or 'auto'. Default is 'auto'.
 * - `children`: The content to be displayed inside the modal.
 * - `modalProps`: Additional props that can be passed to the `react-native-modal` component.
 */
const BottomModal: React.FC<BottomModalProps> = ({
  isVisible,
  onClose,
  backgroundColor = 'white',
  height = 'auto',
  children,
  ...modalProps
}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={BottomModalStyles.modal}
      {...modalProps}
      propagateSwipe>
      <View
        style={[
          BottomModalStyles.modalContent,
          {backgroundColor, height: height === 'auto' ? 'auto' : height},
        ]}>
        {children}
      </View>
    </Modal>
  );
};

export default BottomModal;
