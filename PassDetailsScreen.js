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
    ScrollView,
} from 'react-native';
import { Colors, Typography, Buttons, globalStyles } from './globalStyles';

/**
 * PassDetailsScreen - The tenth screen with detailed pass selection.
 * Features location picker, quantity stepper, and bundle options.
 */

const PassDetailsScreen = ({ navigation }) => {
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

                        {/* Bottom Sheet-style Container (top 228px, height 624px) */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerTitle}>Select your Pass</Text>
                            </View>

                            <ScrollView contentContainerStyle={styles.scrollContent}>
                                {/* Location Picker Mockup */}
                                <TouchableOpacity style={styles.locationContainer} activeOpacity={0.8}>
                                    <View style={styles.locationInner}>
                                        <View style={styles.locationIcon} />
                                        <Text style={styles.locationText}>Sohna Road</Text>
                                    </View>
                                    <Text style={styles.chevron}>▼</Text>
                                </TouchableOpacity>

                                {/* Choose your Pass Header with Stepper */}
                                <View style={styles.sectionHeaderRow}>
                                    <Text style={styles.sectionLabel}>Choose your Pass</Text>
                                    <View style={globalStyles.stepperContainer}>
                                        <TouchableOpacity style={globalStyles.stepperBtn}>
                                            <Text style={globalStyles.stepperText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={globalStyles.stepperValue}>1</Text>
                                        <TouchableOpacity style={globalStyles.stepperBtn}>
                                            <Text style={globalStyles.stepperText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Main Pass Card (1 Day Pass) */}
                                <View style={styles.activePassCard}>
                                    <View style={styles.passInfo}>
                                        <Text style={styles.activePassName}>1 Day Pass</Text>
                                        <Text style={styles.activePassDesc}>Valid for one visit</Text>
                                    </View>
                                    <Text style={styles.activePassPrice}>₹799</Text>
                                </View>

                                {/* Date Selection Mockup */}
                                <TouchableOpacity style={styles.datePickerContainer} activeOpacity={0.8}>
                                    <View style={styles.locationInner}>
                                        <Text style={styles.calendarIcon}>📅</Text>
                                        <Text style={styles.locationText}>Today</Text>
                                    </View>
                                    <Text style={styles.chevron}>▼</Text>
                                </TouchableOpacity>

                                {/* Bundles Section */}
                                <View style={styles.bundlesHeader}>
                                    <Text style={styles.bundlesLabel}>Save more with bundles</Text>
                                </View>

                                <View style={globalStyles.bundleCard}>
                                    <View>
                                        <Text style={styles.bundleName}>8 Day Passes</Text>
                                        <Text style={styles.bundleDesc}>Use anytime. Select date & time later.</Text>
                                    </View>
                                    <View style={styles.bundleRight}>
                                        <Text style={styles.bundlePrice}>₹5,100</Text>
                                        <Text style={globalStyles.discountText}>Save 20%</Text>
                                    </View>
                                </View>

                                <View style={globalStyles.bundleCard}>
                                    <View>
                                        <Text style={styles.bundleName}>12 Day Passes</Text>
                                        <Text style={styles.bundleDesc}>Use anytime. Select date & time later.</Text>
                                    </View>
                                    <View style={styles.bundleRight}>
                                        <Text style={styles.bundlePrice}>₹7,199</Text>
                                        <Text style={globalStyles.discountText}>Save 25%</Text>
                                    </View>
                                </View>

                                {/* Proceed to Pay Button (positioned at top 547px relative to container) */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.proceedBtnPosition]}
                                    onPress={() => {
                                        // Navigate to next screen
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.proceedBtnText}>Proceed to Pay</Text>
                                </TouchableOpacity>
                            </ScrollView>
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
        top: 60, // Screen 10 specific
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
        top: 228,
        width: 393,
        height: 624,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerSection: {
        paddingTop: 32,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        letterSpacing: -0.11,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    locationContainer: {
        width: 361,
        height: 54, // Approximate from visual
        backgroundColor: '#2C2C2E',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    locationInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    locationIcon: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.orange,
        borderWidth: 2,
        borderColor: '#7A4B1A',
    },
    locationText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '400',
    },
    chevron: {
        color: Colors.white,
        fontSize: 14,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionLabel: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '600',
    },
    activePassCard: {
        width: 361,
        height: 69,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#FF7300',
        backgroundColor: 'rgba(44, 44, 46, 0.9)',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        // Note: React Native shadows
        shadowColor: '#FF7300',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    passInfo: {
        flex: 1,
    },
    activePassName: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '600',
    },
    activePassDesc: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    activePassPrice: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
    },
    datePickerContainer: {
        width: 361,
        height: 54,
        backgroundColor: '#2C2C2E',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    calendarIcon: {
        fontSize: 16,
    },
    bundlesHeader: {
        marginBottom: 12,
    },
    bundlesLabel: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '600',
    },
    bundleName: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '600',
        marginBottom: 4,
    },
    bundleDesc: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        maxWidth: 200,
    },
    bundleRight: {
        alignItems: 'flex-end',
    },
    bundlePrice: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
        marginBottom: 2,
    },
    proceedBtnPosition: {
        marginTop: 20, // Positioned within scroll
    },
    proceedBtnText: {
        ...Typography.button,
        color: Colors.white,
    },
});

export default PassDetailsScreen;
