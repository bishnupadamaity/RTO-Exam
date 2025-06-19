

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    SafeAreaView,
    Dimensions,
    Linking
} from 'react-native';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '~/components/Typography/Typography';

// Color theme
const COLORS = {
    Primary1: '#00B33B',
    Primary2: '#00A796',
    Primary3: '#019DE7',
    BorderBlue: '#06038D',
    BackgroundColor: '#F1FFF7',
    TextHeader: '#343434',
    TextDesc: '#9D9D9D',
};

const { width } = Dimensions.get('window');
const SocialMedia = [
    { name: 'facebook', link: 'https://www.facebook.com/SnehBharatOfficial' },
    { name: 'twitter', link: 'http://x.com/SnehBharatCom' },
    { name: 'linkedin', link: 'https://www.linkedin.com/company/snehbharat' },
    { name: 'instagram', link: 'https://www.instagram.com/SnehBharatOfficial' },
    { name: 'youtube', link: 'https://www.youtube.com/@SnehBharatOfficial' }];
const ComingSoon = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar barStyle="dark-content" backgroundColor={COLORS.BackgroundColor} /> */}

            {/* <View style={styles.topDecoration}>
                <LinearGradient
                    colors={[COLORS.Primary3, COLORS.Primary2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientLine}
                />
            </View> */}

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <LinearGradient
                        colors={[COLORS.Primary2, COLORS.Primary1]}
                        style={styles.iconBackground}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Icon type={IconType.Feather} name="clock" size={60} color="#fff" />
                    </LinearGradient>
                </View>

                <Text style={styles.title}>Coming Soon</Text>

                <Text style={styles.subtitle}>
                    We're working hard to bring you something amazing.
                </Text>

                {/* <View style={styles.notifyContainer}>
                    <Text style={styles.notifyText}>
                        Get notified when we launch:
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your email address"
                            placeholderTextColor={COLORS.TextDesc}
                            keyboardType="email-address"
                        />
                        <TouchableOpacity style={styles.button}>
                            <LinearGradient
                                colors={[COLORS.Primary2, COLORS.Primary1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientButton}
                            >
                                <Text style={styles.buttonText}>Notify Me</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>

            <View style={{alignItems: 'center'}}>

            <Typography>Follow us on:</Typography>
            </View>
            <View style={styles.footer}>
                {/* {
                    SocialMedia.map((item, i) => {
                        return()
                    })
                } */}
                <TouchableOpacity style={styles.socialButton} onPress={() => {
                    Linking.openURL('http://x.com/SnehBharatCom');
                 }}>
                    <LinearGradient
                        colors={[COLORS.Primary3, COLORS.Primary2]}
                        style={styles.socialGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Icon type={IconType.FontAwesome} name="twitter" size={20} color="#fff" />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton} onPress={() => {
                    Linking.openURL('https://www.instagram.com/SnehBharatOfficial');
                }}>
                    <LinearGradient
                        colors={[COLORS.Primary2, COLORS.Primary1]}
                        style={styles.socialGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Icon type={IconType.FontAwesome} name="instagram" size={20} color="#fff" />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton} onPress={() => {
                    Linking.openURL('https://www.facebook.com/SnehBharatOfficial');
                }}>
                    <LinearGradient
                        colors={[COLORS.Primary1, COLORS.Primary3]}
                        style={styles.socialGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Icon type={IconType.FontAwesome} name="facebook" size={20} color="#fff" />
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={() => {
                    Linking.openURL('https://www.linkedin.com/company/snehbharat');
                }}>
                    <LinearGradient
                        colors={[COLORS.Primary1, COLORS.Primary3]}
                        style={styles.socialGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Icon type={IconType.FontAwesome} name="linkedin" size={20} color="#fff" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.bottomDecoration}>
                <LinearGradient
                    colors={[COLORS.Primary1, COLORS.Primary3]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientLine}
                />
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BackgroundColor,
    },
    topDecoration: {
        height: 4,
        width: '100%',
    },
    bottomDecoration: {
        height: 4,
        width: '100%',
    },
    gradientLine: {
        height: '100%',
        width: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    iconContainer: {
        marginBottom: 20,
        shadowColor: COLORS.BorderBlue,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    },
    iconBackground: {
        width: 100,
        height: 100,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.TextHeader,
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.TextDesc,
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 26,
    },
    notifyContainer: {
        width: '100%',
        marginTop: 20,
    },
    notifyText: {
        fontSize: 16,
        color: COLORS.TextHeader,
        marginBottom: 15,
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    input: {
        flex: 1,
        height: 55,
        borderWidth: 1.5,
        borderColor: COLORS.BorderBlue,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 15,
        color: COLORS.TextHeader,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    button: {
        height: 55,
        width: 120,
        marginLeft: 10,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: COLORS.BorderBlue,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    gradientButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 30,
        marginTop: 20,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        shadowColor: COLORS.BorderBlue,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden',
    },
    socialGradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ComingSoon;

// Note: You'll need to install this additional package:
// npm install react-native-linear-gradient