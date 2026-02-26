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
 * SuccessScreen - The thirteenth screen (All Set).
 * Features a success animation/icon and a KYC completion CTA.
 */

const SuccessScreen = ({ navigation }) => {
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
                        {/* Top Logo Section (positioned at 60px) */}
                        <View style={styles.topLogoContainer}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Bottom Sheet-style Container (top 353px, height 499px) */}
                        <View style={styles.bottomContainer}>
                            {/* Success Icon Section */}
                            <View style={styles.iconSection}>
                                <View style={globalStyles.successIconOuter}>
                                    <View style={globalStyles.successIconInner}>
                                        {/* Simplified Celebration/Check Icon */}
                                        <View style={styles.checkIcon}>
                                            <View style={styles.checkLineLong} />
                                            <View style={styles.checkLineShort} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textSection}>
                                <Text style={styles.title}>You’re all set!</Text>
                                <Text style={styles.subtitle}>8 Day Passes added to your account</Text>
                                <Text style={styles.detail}>Your passes are ready to use from today</Text>
                            </View>

                            {/* KYC Prompt Card (positioned at 246px relative to sheet start) */}
                            <View style={[globalStyles.kycCard, styles.kycCardPosition]}>
                                <Text style={globalStyles.kycTitle}>Complete KYC to access the building</Text>
                                <Text style={globalStyles.kycDescription}>
                                    KYC is required for entry and security. It takes less than 2 minutes.
                                </Text>
                            </View>

                            {/* Action Buttons */}
                            <View style={styles.actionContainer}>
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.kycBtn]}
                                    onPress={() => {
                                        // Navigate to KYC flow
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.kycBtnText}>Complete KYC & Get Access</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.laterBtn}
                                    onPress={() => {
                                        // Navigate to Home/Explorer
                                    }}
                                >
                                    <Text style={styles.laterBtnText}>I’ll do this later</Text>
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
        top: 353,
        width: 393,
        height: 499,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
    },
    iconSection: {
        marginTop: 32,
        marginBottom: 24,
    },
    checkIcon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkLineLong: {
        position: 'absolute',
        width: 2,
        height: 18,
        backgroundColor: Colors.white,
        transform: [{ rotate: '45deg' }],
        left: 12,
        top: 2,
    },
    checkLineShort: {
        position: 'absolute',
        width: 2,
        height: 10,
        backgroundColor: Colors.white,
        transform: [{ rotate: '-45deg' }],
        left: 6,
        top: 10,
    },
    textSection: {
        alignItems: 'center',
        marginBottom: 35, // Adjusting to match 246px top for KYC card
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
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '400',
        lineHeight: 20,
        marginBottom: 4,
    },
    detail: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: '300',
        lineHeight: 18,
    },
    kycCardPosition: {
        // Relative positioning to container
    },
    actionContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10, // Adjusting to match 351px top for button
    },
    kycBtn: {
        width: 361,
        height: 44,
        marginBottom: 20,
    },
    kycBtnText: {
        ...Typography.button,
        color: Colors.white,
    },
    laterBtn: {
        padding: 10,
    },
    laterBtnText: {
        fontSize: 15,
        color: Colors.orange,
        fontWeight: '500',
    },
});

export default SuccessScreen;
