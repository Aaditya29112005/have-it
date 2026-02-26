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
 * BundleSelectionScreen - The twelfth screen for selecting pass bundles.
 * Features a highlighted 8-day bundle and a "Buy Bundle" button.
 */

const BundleSelectionScreen = ({ navigation }) => {
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
                        {/* Top Logo Section (positioned at 90px) */}
                        <View style={styles.topLogoContainer}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Bottom Sheet-style Container (top 281px, height 571px) */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerTitle}>Select your Pass</Text>
                            </View>

                            <ScrollView contentContainerStyle={styles.scrollContent}>
                                {/* Location Picker */}
                                <TouchableOpacity style={styles.locationContainer} activeOpacity={0.8}>
                                    <View style={styles.locationInner}>
                                        <View style={styles.locationPlusIcon} />
                                        <Text style={styles.locationText}>Sohna Road</Text>
                                    </View>
                                    <Text style={styles.chevron}>▼</Text>
                                </TouchableOpacity>

                                {/* Choose your Pass Header */}
                                <View style={styles.sectionHeaderRow}>
                                    <Text style={styles.sectionLabel}>Choose your Pass</Text>
                                    <View style={globalStyles.stepperCircle}>
                                        <Text style={styles.stepperUnit}>1</Text>
                                    </View>
                                </View>

                                {/* Main Pass Card (1 Day Pass - Secondary state) */}
                                <View style={[globalStyles.bundleCard, styles.dimmedCard]}>
                                    <View>
                                        <Text style={styles.passName}>1 Day Pass</Text>
                                        <Text style={styles.passDesc}>Valid for one visit</Text>
                                    </View>
                                    <Text style={styles.passPrice}>₹799</Text>
                                </View>

                                {/* Bundles Section */}
                                <View style={styles.bundlesHeader}>
                                    <Text style={styles.bundlesLabel}>Save more with bundles</Text>
                                </View>

                                {/* HIGHLIGHTED BUNDLE (8 Day Passes) */}
                                <TouchableOpacity style={[globalStyles.bundleCard, globalStyles.bundleCardActive]} activeOpacity={0.9}>
                                    <View style={styles.bundleInfo}>
                                        <View style={styles.bundleTopRow}>
                                            <Text style={styles.activeBundleName}>8 Day Passes</Text>
                                            <Text style={styles.activeBundlePrice}>₹5,100</Text>
                                        </View>
                                        <View style={styles.bundleBottomRow}>
                                            <Text style={styles.bundleDesc}>Use anytime. Select date & time later.</Text>
                                            <View style={styles.discountBadge}>
                                                <Text style={styles.discountText}>Save 20%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {/* Other Bundle (12 Day Passes) */}
                                <TouchableOpacity style={[globalStyles.bundleCard, styles.secondaryBundleCard]} activeOpacity={0.8}>
                                    <View style={styles.bundleInfo}>
                                        <View style={styles.bundleTopRow}>
                                            <Text style={styles.bundleName}>12 Day Passes</Text>
                                            <Text style={styles.bundlePrice}>₹7,199</Text>
                                        </View>
                                        <View style={styles.bundleBottomRow}>
                                            <Text style={styles.bundleDesc}>Use anytime. Select date & time later.</Text>
                                            <Text style={[globalStyles.discountText, { color: 'rgba(255, 115, 0, 0.7)' }]}>Save 25%</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {/* Buy Bundle Button (top 494px relative to container) */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.buyBtn]}
                                    onPress={() => {
                                        // Navigate to Screen 16
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.buyBtnText}>Buy Bundle</Text>
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
        top: 90,
        left: 107,
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
        top: 281,
        width: 393,
        height: 571,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerSection: {
        paddingTop: 32,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 10,
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
        height: 40,
        backgroundColor: '#2C2C2E',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 22,
        marginTop: 10,
    },
    locationInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    locationPlusIcon: {
        width: 12,
        height: 12,
        backgroundColor: Colors.white,
        borderRadius: 2,
    },
    locationText: {
        fontSize: 15,
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
        fontSize: 13,
        color: Colors.white,
        fontWeight: '600',
        letterSpacing: -0.02,
    },
    stepperUnit: {
        fontSize: 14,
        color: Colors.white,
        fontFamily: 'Inter',
    },
    dimmedCard: {
        opacity: 0.8,
        backgroundColor: '#2C2C2E',
    },
    passName: { fontSize: 17, color: Colors.white, fontWeight: '500' },
    passDesc: { fontSize: 12, color: '#9CA3AF' },
    passPrice: { fontSize: 15, color: 'rgba(255, 255, 255, 0.8)' },
    bundlesHeader: {
        marginTop: 24,
        marginBottom: 16,
    },
    bundlesLabel: {
        fontSize: 13,
        color: Colors.white,
        fontWeight: '600',
    },
    bundleInfo: {
        flex: 1,
    },
    bundleTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    bundleBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    activeBundleName: { fontSize: 17, color: Colors.white, fontWeight: '600' },
    activeBundlePrice: { fontSize: 15, color: Colors.white, fontWeight: '400' },
    bundleName: { fontSize: 17, color: Colors.white, fontWeight: '500' },
    bundlePrice: { fontSize: 15, color: 'rgba(255, 255, 255, 0.8)' },
    bundleDesc: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: 220,
    },
    discountBadge: {
        backgroundColor: '#FF7300',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    discountText: {
        fontSize: 13,
        color: Colors.white,
        fontWeight: '300',
    },
    secondaryBundleCard: {
        backgroundColor: '#FF96401C',
    },
    buyBtn: {
        marginTop: 40,
        width: 361,
        height: 44,
    },
    buyBtnText: {
        ...Typography.button,
        color: Colors.white,
    },
});

export default BundleSelectionScreen;
