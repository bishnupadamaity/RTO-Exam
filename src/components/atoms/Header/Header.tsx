import React from 'react';
import {Image, Text, View} from 'react-native';

import {COLOR} from '~/utils/Color/Color';
import {IMAGES} from '~/assets';
import {RFValue} from 'react-native-responsive-fontsize';
import HeaderStyles from './HeaderStyles';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import Typography from '~/components/Typography/Typography';

export const Header = ({
  backgroundColor,
  gradientColors = [COLOR.gray, COLOR.gray2, COLOR.gray3], // Default gradient colors
}: {
  backgroundColor?: string;
  gradientColors?: string[];
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  return (
    <>
      <LinearGradient
        colors={[COLOR.gray, COLOR.gray2, COLOR.gray3]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          flexDirection: 'row',
          paddingHorizontal: RFValue(16),
          paddingVertical: RFValue(7),
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            padding: 4,
          }}>
          <Icon
            type={IconType.SimpleLineIcons}
            name={'menu'}
            size={22}
            color={COLOR.white}
            onPress={openDrawer}
          />
          {/* <Image
                    source={IMAGES.DEMO_USER}
                    style={HeaderStyles.logo}
                    resizeMode="contain"
                /> */}
          <Typography
            color="white"
            fontWeight="900"
            fontSize={24}
            style={{marginTop: 6}}>
            SNEH BHARAT
          </Typography>
        </View>

        {/* Right Container  */}
        {/* <View style={HeaderStyles.rightContainer}>
                    <Icon type={IconType.Entypo} name={'language'} size={25} color={COLOR.white} />
                    <Icon type={IconType.FontAwesome5} name={'shopping-cart'} size={21} color={COLOR.white} />
                    <Icon type={IconType.FontAwesome5} name={'video'} size={21} color={COLOR.white} />
                </View> */}
      </LinearGradient>
      {/* <DrawerModal visible={drawerVisible} onClose={closeDrawer} /> */}
    </>
  );
};
