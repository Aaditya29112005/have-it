import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Colors, Typography, Buttons, globalStyles } from './globalStyles';

/**
 * LoginScreen - The fourth screen with a bottom container for mobile number entry.
 * Features a logo at the top and a styled input field in a translucent container.
 */

const LoginScreen = ({ navigation }) => {
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
                        {/* Top Logo Section */}
                        <View style={styles.topLogoContainer}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Bottom Sheet-style Container */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.contentPadding}>
                                {/* Header Text */}
                                <View style={styles.headerTextSection}>
                                    <Text style={styles.welcomeText}>Welcome</Text>
                                    <Text style={styles.subText}>Enter your mobile number to continue</Text>
                                </View>

                                {/* Styled Input Field */}
                                <View style={globalStyles.inputContainer}>
                                    <Text style={globalStyles.inputLabel}>Contact No.</Text>
                                    <View style={globalStyles.inputValueContainer}>
                                        <Text style={globalStyles.inputPrefix}>+ 91</Text>
                                        <Text style={globalStyles.inputText}>8765</Text>
                                        <View style={styles.cursor} />
                                    </View>
                                </View>

                                {/* Send OTP Button */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.buttonMargin]}
                                    onPress={() => {
                                        // Navigate to: "Verify OTP (6)"
                                        // navigation.navigate('VerifyOTP');
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.buttonText}>Send OTP</Text>
                                    <Text style={styles.arrowIcon}>→</Text>
                                </TouchableOpacity>
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
        top: 90,
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
        top: 532,
        width: 393,
        height: 320,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    contentPadding: {
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    headerTextSection: {
        alignItems: 'center',
        marginBottom: 24,
    },
    welcomeText: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        lineHeight: 30,
        letterSpacing: -0.11, // -0.5%
        marginBottom: 4,
    },
    subText: {
        ...Typography.subBody,
        lineHeight: 20,
    },
    buttonMargin: {
        marginTop: 27, // Distance from input to button
    },
    buttonText: {
        ...Typography.button,
        color: Colors.white,
    },
    arrowIcon: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
    },
    cursor: {
        width: 2,
        height: 20,
        backgroundColor: Colors.orange,
        marginLeft: 2,
    },
});

export default LoginScreen;
