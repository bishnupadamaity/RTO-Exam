import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Typography from '~/components/Typography/Typography';
import {COLOR} from '~/utils/Color/Color';

interface ChapterCardProps {
  title: string;
  lessons: number;
  status: 'Completed' | 'In Progress' | 'Not Started';
  onPress: () => void;
  bgColor?: string;
}

const getStatusColor = (
  status: 'Completed' | 'In Progress' | 'Not Started',
) => {
  switch (status) {
    case 'Completed':
      return '#D1FADF';
    case 'In Progress':
      return '#EEF4FF';
    case 'Not Started':
      return COLOR.yellow;
    default:
      return COLOR.yellow;
  }
};

const getStatusTextColor = (
  status: 'Completed' | 'In Progress' | 'Not Started',
) => {
  switch (status) {
    case 'Completed':
      return '#12B76A';
    case 'In Progress':
      return '#2563EB';
    case 'Not Started':
      return COLOR.yellow4;
    default:
      return COLOR.yellow4;
  }
};

const ChapterCard: React.FC<ChapterCardProps> = ({
  title,
  lessons,
  status,
  onPress,
  bgColor = COLOR.white,
}) => {
  console.log({status});
  return (
    <View style={[styles.card, {backgroundColor: bgColor}]}>
      {/* Top: Title */}
      <Typography style={styles.title}>{title}</Typography>

      {/* Middle: Lessons & Status */}
      <View style={styles.row}>
        <Typography style={styles.lessons}>{lessons} Lessons</Typography>
        <View
          style={[
            styles.statusBadge,
            {backgroundColor: getStatusColor(status)},
          ]}>
          <Typography
            style={styles.statusText}
            color={getStatusTextColor(status)}>
            {status}
          </Typography>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom: View Chapter */}
      <TouchableOpacity
        style={styles.bottomRow}
        onPress={onPress}
        activeOpacity={0.7}>
        <Typography style={styles.viewChapter}>View Chapter</Typography>
        <View style={styles.arrowCircle}>
          <Icon
            name="chevron-right"
            type={IconType.Feather}
            size={20}
            color={COLOR.blue}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: COLOR.white,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: COLOR.lightblue3,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: responsiveFontSize(2.2),
    marginBottom: 18,
    color: COLOR.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  lessons: {
    fontSize: 14,
    color: COLOR.black,
    marginRight: 12,
  },
  statusBadge: {
    backgroundColor: '#D1FADF',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusText: {
    fontWeight: '500',
    fontSize: responsiveFontSize(1.7),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'dashed',
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewChapter: {
    color: COLOR.blue,
    fontWeight: '500',
    fontSize: responsiveFontSize(1.7),
  },
  arrowCircle: {
    backgroundColor: '#EEF4FF',
    borderRadius: 16,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#2563EB',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChapterCard;
