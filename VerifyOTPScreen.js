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
 * VerifyOTPScreen - The fifth screen for OTP verification.
 * Features 4 OTP input boxes and a verify button.
 */

const VerifyOTPScreen = ({ navigation }) => {
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
                                    <Text style={styles.verifyText}>Verify your contact</Text>
                                    <Text style={styles.subText}>We sent a 6-digit code to +91 XXXXXXXX</Text>
                                </View>

                                {/* OTP Input Boxes */}
                                <View style={[globalStyles.otpContainer, styles.otpMargin]}>
                                    {/* Box 1 (Active) */}
                                    <View style={[globalStyles.otpBox, globalStyles.otpBoxActive]}>
                                        <Text style={globalStyles.otpText}>1</Text>
                                    </View>
                                    {/* Box 2 */}
                                    <View style={globalStyles.otpBox} />
                                    {/* Box 3 */}
                                    <View style={globalStyles.otpBox} />
                                    {/* Box 4 */}
                                    <View style={globalStyles.otpBox} />
                                </View>

                                {/* Verify Button */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.buttonMargin]}
                                    onPress={() => {
                                        // Navigate to: "Enter Details (7)"
                                        // navigation.navigate('EnterDetails');
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.buttonText}>Verify Contact no.</Text>
                                    <Text style={styles.arrowIcon}>→</Text>
                                </TouchableOpacity>

                                {/* Resend OTP Link */}
                                <TouchableOpacity
                                    style={styles.resendContainer}
                                    onPress={() => {
                                        // Resend logic
                                    }}
                                >
                                    <Text style={styles.resendText}>Resend OTP</Text>
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
    verifyText: {
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
        textAlign: 'center',
    },
    otpMargin: {
        alignSelf: 'center',
        marginBottom: 24,
    },
    buttonMargin: {
        marginTop: 0,
        // design says top 203 within bottom container
        // Bottom container top starts at 532. 532 + 203 = 735.
        // Safe area and padding will handle this naturally.
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
    resendContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    resendText: {
        ...Typography.button,
        color: Colors.orange,
        fontSize: 16,
    },
});

export default VerifyOTPScreen;
