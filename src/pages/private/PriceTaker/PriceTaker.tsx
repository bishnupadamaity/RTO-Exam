import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';

const PriceTaker = () => {
  return (
    <PrivateContainer isBackNavigation={false} isCustomStatusBar>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 12}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text>PriceTaker</Text>
        </View>
      </ScrollView>
    </PrivateContainer>
  );
};

export default PriceTaker;
