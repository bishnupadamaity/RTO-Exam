export interface BottomModalProps {
    isVisible: boolean;
    onClose: () => void;
    backgroundColor?: string;
    height?: number | 'auto';
    children: React.ReactNode;
    minHeight?: number;
  }
  