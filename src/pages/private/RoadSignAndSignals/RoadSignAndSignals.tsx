import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';
import Typography from '~/components/Typography/Typography';
import {COLOR} from '~/utils/Color/Color';

const RoadSignAndSignals = () => {
  return (
    <PrivateContainer
      isBackNavigation
      title="Road Sign and Signals"
      titleAlign="center"
      backgroundColor={COLOR.bg}
      isCustomStatusBar>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 12}}
        showsVerticalScrollIndicator={false}>
        {Array(100)
          .fill('')
          .map((_, index) => (
            <View
              key={index}
              style={{
                padding: 16,
                backgroundColor: COLOR.white,
                elevation: 1,
                borderRadius: 16,
                marginBottom: 16,
              }}>
              <Typography
                style={{fontSize: 16, fontWeight: '500'}}
                color={COLOR.black}>
                Road Sign and Signals {index + 1}
              </Typography>
            </View>
          ))}
      </ScrollView>
    </PrivateContainer>
  );
};

export default RoadSignAndSignals;
