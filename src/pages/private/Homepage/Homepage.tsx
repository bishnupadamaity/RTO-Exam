import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PrivateContainer from '~/layout/PrivateContainer/PrivateContainer';
import {COLOR} from '~/utils/Color/Color';
import Typography from '~/components/Typography/Typography';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Images from '~/assets/Images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/types/RootStackParams';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import Card from '~/components/atoms/Card/Card';
import {WIDTH} from '~/utils/Constants';
const HomeUserCard = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.gray5,
        borderRadius: 10,
        elevation: 1,
        flexDirection: 'column',
        gap: 8,
        padding: 16,
        marginTop: 10,
      }}>
      <Typography
        color={COLOR.black}
        fontWeight="700"
        fontSize={responsiveFontSize(2.9)}>
        Welcome back, Sarah
      </Typography>
      <Typography
        color={COLOR.gray}
        fontSize={responsiveFontSize(1.8)}
        style={{lineHeight: 18}}>
        Prepare your driving license exam test with our comprehensive practice
        exams
      </Typography>
    </View>
  );
};
const ImageCard = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.gray5,
        borderRadius: 10,
        elevation: 1,
        marginTop: 20,
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Image
        source={Images.HOME_BANNER}
        style={{
          width: '100%',
          height: 180,
          borderRadius: 10,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 13, 14, 0.3)',
        }}>
        <Typography
          color={COLOR.white}
          style={{position: 'absolute', bottom: 35, left: 10}}
          fontSize={responsiveFontSize(3.3)}
          fontWeight="700">
          Prepare Tests
        </Typography>
        <Typography
          color={COLOR.white}
          style={{position: 'absolute', bottom: 20, left: 10}}
          fontSize={responsiveFontSize(1.8)}>
          Simulate the real exam environment with our practice tests
        </Typography>
      </View>
    </View>
  );
};
const ActionCards = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const CardData = [
    {
      id: 1,
      title: 'Study Materials',
      description: `Review road rules and\nsigns`,

      onPress: () => {
        navigation.navigate('Login');
      },
      icon: (
        <Icon
          name="menu-book"
          type={IconType.MaterialIcons}
          size={34}
          color={'#2563EB'}
        />
      ),
      iconBgColor: '#DBEAFE',
      CardBgColor: '#EDF5FF',
    },
    {
      id: 2,
      title: 'Mock Tests',
      description: `Timed exams with\nscoring`,
      onPress: () => {
        navigation.navigate('Login');
      },
      icon: (
        <Icon
          name="computer"
          type={IconType.MaterialIcons}
          size={34}
          color={'#16A34A'}
        />
      ),
      iconBgColor: '#CBFFDD',
      CardBgColor: '#EDFFED',
    },
  ];
  const Card = ({item}: {item: (typeof CardData)[0]}) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        style={{
          width: WIDTH * 0.45,
          backgroundColor: item.CardBgColor,
          borderRadius: 15,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <View
          style={{
            backgroundColor: item.iconBgColor,
            padding: 10,
            borderRadius: 100,
            height: 65,
            width: 65,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.icon}
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5,
            marginTop: 20,
          }}>
          <Typography
            color={COLOR.black}
            fontWeight="700"
            fontSize={responsiveFontSize(2.4)}>
            {item.title}
          </Typography>
          <Typography
            color={COLOR.gray}
            fontSize={responsiveFontSize(1.6)}
            style={{lineHeight: 14, textAlign: 'center'}}>
            {item.description}
          </Typography>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
        justifyContent: 'space-between',
      }}>
      {CardData.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
};
const ProgressCards = () => {
  const ProgressBar = ({
    progressInPercentage,
    marginTop,
  }: {
    progressInPercentage: number;
    marginTop: number;
  }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E5E7EB',
          borderRadius: 10,
          height: 12,
          overflow: 'hidden',
          marginTop: marginTop,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#2563EB',
            borderRadius: 10,
            width: `${progressInPercentage}%`,
            height: 12,
          }}></View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        marginTop: 20,
        backgroundColor: '#F6FBFF',
        borderRadius: 10,
        padding: 15,
        paddingVertical: 20,
        flexDirection: 'column',
      }}>
      <Typography
        color={COLOR.black}
        fontWeight="700"
        fontSize={responsiveFontSize(2.4)}>
        Your Progress
      </Typography>
      <ProgressBar progressInPercentage={45} marginTop={6} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Typography
          color={COLOR.gray}
          fontWeight="400"
          fontSize={responsiveFontSize(1.8)}>
          45% Completed
        </Typography>
        <Typography
          color={COLOR.gray}
          fontWeight="400"
          fontSize={responsiveFontSize(1.6)}>
          100/200 Questions
        </Typography>
      </View>
    </View>
  );
};
const RecentActivity = () => {
  const RecentActivityData = [
    {
      id: 1,
      title: 'Road Sign Quiz',
      description: 'Completed - score 100%',
      icon: (
        <Icon
          name="book"
          type={IconType.MaterialCommunityIcons}
          size={28}
          color={'#2563EB'}
        />
      ),
      iconBgColor: '#DBEAFE',
    },
    {
      id: 2,
      title: 'Traffic Rules Module',
      description: 'In progress - 60% completed',
      icon: (
        <Icon
          name="book"
          type={IconType.MaterialIcons}
          size={28}
          color={'#16A34A'}
        />
      ),
      iconBgColor: '#CBFFDD',
    },
  ];
  const ActivityCard = ({item}: {item: (typeof RecentActivityData)[0]}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          padding: 5,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: item.iconBgColor,
            height: 50,
            width: 50,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {item.icon}
        </View>
        <View style={{flexDirection: 'column', gap: 5}}>
          <Typography
            color={COLOR.black}
            fontWeight="700"
            fontSize={responsiveFontSize(2.4)}>
            {item.title}
          </Typography>
          <Typography color={COLOR.gray} fontSize={responsiveFontSize(1.6)}>
            {item.description}
          </Typography>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        marginTop: 20,
        flex: 1,
        backgroundColor: '#F6FBFF',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
      }}>
      <Typography
        color={COLOR.black}
        fontWeight="700"
        fontSize={responsiveFontSize(2.4)}>
        Recent Activity
      </Typography>
      <View style={{flexDirection: 'column', gap: 8, marginTop: 10}}>
        {RecentActivityData.map(item => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
const Homepage = () => {
  return (
    <PrivateContainer isCustomStatusBar={true}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingBottom: 60,
          paddingHorizontal: 12,
          paddingTop: 5,
        }}
        showsVerticalScrollIndicator={false}>
        <HomeUserCard />
        <ImageCard />
        <ActionCards />
        <ProgressCards />
        <RecentActivity />
      </ScrollView>
    </PrivateContainer>
  );
};

export default Homepage;
