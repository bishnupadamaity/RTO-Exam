import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';

const Practice = () => {
  return (
    <PrivateContainer isBackNavigation={false} isCustomStatusBar>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 12}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text>Practice</Text>
        </View>
      </ScrollView>
    </PrivateContainer>
  );
};

export default Practice;
