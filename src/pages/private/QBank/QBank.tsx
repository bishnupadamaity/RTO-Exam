import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';
import {COLOR} from '~/utils/Color/Color';
import Typography from '~/components/Typography/Typography';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ChapterCard} from '~/components/atoms/Card';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/types/RootStackParams';

const QBank = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const LearningModules = [
    {
      chapterCount: 1,
      title: 'Basic Traffic Rules',
      lessonsCount: 10,
      completionState: 'Completed',
      onPress: () => {
        navigation.navigate('BasicTrafficRules');
      },
    },
    {
      chapterCount: 2,
      title: 'Vehicle Control',
      lessonsCount: 10,
      completionState: 'In Progress',
      onPress: () => {
        navigation.navigate('RoadSignAndSignals');
      },
    },
    {
      chapterCount: 3,
      title: 'Road Signs',
      lessonsCount: 10,
      completionState: 'Not Started',
      onPress: () => {
        navigation.navigate('RoadSigns');
      },
    },
  ];

  // Helper to convert completionState to display string
  const getStatusText = (
    state: 'Completed' | 'In Progress' | 'Not Started',
  ) => {
    switch (state) {
      case 'Completed':
        return 'Completed';
      case 'In Progress':
        return 'In Progress';
      case 'Not Started':
        return 'Not Started';
      default:
        return '';
    }
  };

  return (
    <PrivateContainer
      isCustomStatusBar={true}
      isBackNavigation
      title="Question Bank"
      titleAlign="center"
      backgroundColor={COLOR.white}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingBottom: 60,
          paddingHorizontal: 12,
          paddingTop: 10,
        }}>
        <Typography
          fontSize={responsiveFontSize(2.2)}
          fontWeight="500"
          color={COLOR.black}
          style={{marginBottom: 10, marginTop: 5}}>
          Learning Modules
        </Typography>
        <View>
          {LearningModules.map((module, index) => (
            <ChapterCard
              key={index}
              title={`Chapter ${module.chapterCount}: ${module.title}`}
              lessons={module.lessonsCount}
              status={
                module.completionState as
                  | 'Completed'
                  | 'In Progress'
                  | 'Not Started'
              }
              onPress={module.onPress}
              bgColor={COLOR.white}
            />
          ))}
        </View>
      </ScrollView>
    </PrivateContainer>
  );
};

export default QBank;
