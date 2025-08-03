import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';
import {COLOR} from '~/utils/Color/Color';

const Exam = () => {
  return (
    <PrivateContainer isBackNavigation={false} isCustomStatusBar>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 12}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text>Exam</Text>
        </View>
      </ScrollView>
    </PrivateContainer>
  );
};

export default Exam;
