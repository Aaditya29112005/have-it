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
 * BookingSelectionScreen - The eighth screen for choosing booking categories.
 * Features a descriptive card and category pills.
 */

const BookingSelectionScreen = ({ navigation }) => {
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

                        {/* Central Descriptive Card */}
                        <View style={styles.centralCard}>
                            <View style={styles.cardHeaderIcon}>
                                <View style={styles.innerIconCircle}>
                                    {/* Placeholder for the user-like icon */}
                                    <View style={styles.iconBody} />
                                    <View style={styles.iconHead} />
                                </View>
                            </View>

                            <Text style={styles.cardTitle}>On-Demand</Text>

                            <Text style={styles.cardDescription}>
                                Work your way, just for the day. Grab a Day Pass and enjoy high-speed Wi-Fi, comfortable workstations, and a focused, vibrant co-working vibe.
                            </Text>
                        </View>

                        {/* Category selection pills (top 546px) */}
                        <View style={styles.pillsContainer}>
                            <View style={globalStyles.selectionPill}>
                                <Text style={globalStyles.selectionPillText}>Private Cabin</Text>
                            </View>
                            <View style={[globalStyles.selectionPill, globalStyles.selectionPillActive]}>
                                <Text style={globalStyles.selectionPillText}>On Demand</Text>
                            </View>
                            <View style={globalStyles.selectionPill}>
                                <Text style={globalStyles.selectionPillText}>Single Desk</Text>
                            </View>
                            <View style={globalStyles.selectionPill}>
                                <Text style={globalStyles.selectionPillText}>Virtual Office</Text>
                            </View>
                        </View>

                        {/* Footer Section (top 606px) */}
                        <View style={styles.footerSection}>
                            <Text style={styles.footerHeader}>What do you want to book?</Text>
                            <Text style={styles.footerSubText}>Choose what fits your needs</Text>

                            <TouchableOpacity
                                style={[Buttons.primary, styles.continueBtn]}
                                onPress={() => {
                                    // Navigate to Screen 12
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.btnText}>Continue</Text>
                                <Text style={styles.arrowIcon}>→</Text>
                            </TouchableOpacity>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    centralCard: {
        position: 'absolute',
        top: 247,
        left: 77,
        width: 239,
        height: 350,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255, 126, 21, 0.3)',
        padding: 20,
        alignItems: 'center',
        zIndex: 2,
    },
    cardHeaderIcon: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 10,
    },
    innerIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconHead: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#2C2C2E',
        marginBottom: 2,
    },
    iconBody: {
        width: 18,
        height: 12,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: '#2C2C2E',
    },
    cardTitle: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        marginBottom: 16,
        letterSpacing: -0.11,
    },
    cardDescription: {
        fontSize: 14,
        color: Colors.secondary,
        textAlign: 'center',
        lineHeight: 18,
    },
    pillsContainer: {
        position: 'absolute',
        top: 546,
        width: 393,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 16,
        zIndex: 1,
    },
    footerSection: {
        position: 'absolute',
        top: 606,
        width: 393,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    footerHeader: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        marginBottom: 4,
        letterSpacing: -0.11,
    },
    footerSubText: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 31,
    },
    continueBtn: {
        width: 361,
    },
    btnText: {
        ...Typography.button,
        color: Colors.white,
    },
    arrowIcon: {
        fontSize: 18,
        color: Colors.white,
        marginLeft: 8,
    },
});

export default BookingSelectionScreen;
