import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { Colors, globalStyles } from './globalStyles';

/**
 * SingleDeskSuccessScreen - The seventeenth screen.
 * A success screen specifically for single desk inquiries.
 */

const SingleDeskSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" transparent backgroundColor="transparent" />
            <ImageBackground
                source={require('./assets/bg.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.gradientOverlay}>
                    <SafeAreaView style={styles.safeArea}>
                        {/* Top Logo Section (positioned at 60px as per spec) */}
                        <View style={styles.topLogoContainer}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Bottom Sheet-style Container (top 605px, height 247px) */}
                        <View style={styles.bottomContainer}>
                            {/* Success Icon Section */}
                            <View style={styles.iconSection}>
                                <View style={styles.successIconOuter}>
                                    <View style={styles.successIconInner}>
                                        <View style={styles.whiteIcon} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textSection}>
                                <Text style={styles.title}>Thank You</Text>
                                <Text style={styles.subtitle}>We have all the details we needed</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        width: 393,
        height: 852,
    },
    backgroundImage: {
        position: 'absolute',
        width: 1136,
        height: 852,
        left: -445,
    },
    gradientOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    safeArea: {
        flex: 1,
    },
    topLogoContainer: {
        position: 'absolute',
        top: 60,
        left: 106,
        width: 180,
        height: 122,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    bottomContainer: {
        position: 'absolute',
        top: 605,
        width: 393,
        height: 247,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
    },
    iconSection: {
        marginTop: 32,
        marginBottom: 24,
    },
    successIconOuter: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FF73004D',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    successIconInner: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF7300',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteIcon: {
        width: 36,
        height: 36,
        borderWidth: 0.4,
        borderColor: '#FFFFFF',
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        opacity: 0.2,
    },
    textSection: {
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        lineHeight: 30,
        letterSpacing: -0.11,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: '300',
        lineHeight: 18,
    },
});

export default SingleDeskSuccessScreen;
