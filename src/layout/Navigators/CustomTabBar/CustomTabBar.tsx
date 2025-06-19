import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {ICONS, IMAGES} from '~/assets';
import {COLOR} from '~/utils/Color/Color';
import {WIDTH} from '~/utils/Constants';

const CustomTabBar = (props: any) => {
  const {state, descriptors, navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Icon and label settings based on route.name and isFocused
          const getIcon = () => {
            if (route.name === 'Home') {
              return (
                // <Image source={isFocused ? ICONS.HOME_ORANGE : ICONS.HOME_GREY} style={{ height: 24, width: 24 }} resizeMode='contain' />
                <Icon
                  name="home"
                  type={IconType.Feather}
                  size={24}
                  color={isFocused ? COLOR.blue2 : COLOR.gray}
                />
              );
            } else if (route.name === 'Q.Bank') {
              return (
                <Icon
                  name="stack"
                  type={IconType.Octicons}
                  size={24}
                  color={isFocused ? COLOR.blue2 : COLOR.gray}
                />
              );
            } else if (route.name === 'Exam') {
              return (
                <Icon
                  name="desktop-outline"
                  type={IconType.Ionicons}
                  size={24}
                  color={isFocused ? COLOR.blue2 : COLOR.gray}
                />
              );
            } else if (route.name === 'Practice') {
              return (
                <Icon
                  name="text"
                  type={IconType.Entypo}
                  size={24}
                  color={isFocused ? COLOR.blue2 : COLOR.gray}
                />
              );
            }
          };

          return (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={onPress}
              onLongPress={onLongPress}>
              {isFocused && <View style={styles.indicator} />}

              <View style={styles.tabContent}>
                <View
                  style={[
                    styles.iconContainer,
                    isFocused && styles.iconContainerFocused,
                  ]}>
                  {getIcon()}
                </View>
                <Text
                  style={[
                    styles.tabLabel,
                    isFocused && styles.tabLabelFocused,
                  ]}>
                  {route.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: RFValue(5),
    borderTopRightRadius: RFValue(5),
    overflow: 'hidden',
  },
  tabBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    width: '100%',
  },
  tabButton: {
    width: WIDTH * 0.19,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  indicator: {
    width: '100%',
    height: 3,
    backgroundColor: COLOR.blue2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    top: 0,
  },
  tabContent: {
    alignItems: 'center',
    marginVertical: 7,
  },
  iconContainer: {
    width: RFValue(35),
    height: RFValue(35),
    // backgroundColor: '#F1F1F1',
    borderRadius: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerFocused: {
    backgroundColor: '#DBEAFE',
    borderRadius: RFValue(20),
  },
  tabLabel: {
    marginTop: -1,
    color: '#6b7280',
    fontWeight: '500',
    fontSize: RFValue(12),
  },
  tabLabelFocused: {
    color: COLOR.blue,
    fontWeight: 'bold',
  },
  icon: {
    width: RFValue(22),
    height: RFValue(22),
  },
});

export default CustomTabBar;
