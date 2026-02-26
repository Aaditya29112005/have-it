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
 * CalendarPickerScreen - The eleventh screen with a calendar overlay.
 * Features a date picker (overlay) for choosing the visit date.
 */

const CalendarPickerScreen = ({ navigation }) => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Simplified Feb 2026 Grid
    const dates = [
        { d: 28, m: true }, { d: 29, m: true }, { d: 30, m: true }, { d: 31, m: true }, { d: 1, m: false }, { d: 2, m: false }, { d: 3, m: false },
        { d: 4, m: false }, { d: 5, m: false }, { d: 6, m: false }, { d: 7, m: false }, { d: 8, m: false }, { d: 9, m: false }, { d: 10, m: false },
        { d: 11, m: false }, { d: 12, m: false }, { d: 13, m: false }, { d: 14, m: false }, { d: 15, m: false }, { d: 16, m: false }, { d: 17, m: false },
        { d: 18, m: false }, { d: 19, m: false }, { d: 20, m: false }, { d: 21, m: false }, { d: 22, m: false }, { d: 23, m: false }, { d: 24, m: false },
        { d: 25, m: false }, { d: 26, m: false }, { d: 27, m: false }, { d: 28, m: false }, { d: 1, m: true }, { d: 2, m: true }, { d: 3, m: true },
    ];

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

                        {/* Main Selection Surface (bg-like container) */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerTitle}>Select your Pass</Text>
                            </View>

                            <ScrollView scrollEnabled={false} contentContainerStyle={styles.scrollContent}>
                                <TouchableOpacity style={styles.locationContainer} activeOpacity={1}>
                                    <View style={styles.locationInner}>
                                        <View style={styles.locationIcon} />
                                        <Text style={styles.locationText}>Sohna Road</Text>
                                    </View>
                                    <Text style={styles.chevron}>▼</Text>
                                </TouchableOpacity>

                                <View style={styles.sectionHeaderRow}>
                                    <Text style={styles.sectionLabel}>Choose your Pass</Text>
                                    <View style={globalStyles.stepperContainer}>
                                        <TouchableOpacity style={globalStyles.stepperBtn}><Text style={globalStyles.stepperText}>-</Text></TouchableOpacity>
                                        <Text style={globalStyles.stepperValue}>1</Text>
                                        <TouchableOpacity style={globalStyles.stepperBtn}><Text style={globalStyles.stepperText}>+</Text></TouchableOpacity>
                                    </View>
                                </View>

                                {/* Primary Pass Card */}
                                <View style={styles.activePassCard}>
                                    <View>
                                        <Text style={styles.activePassName}>1 Day Pass</Text>
                                        <Text style={styles.activePassDesc}>Valid for one visit</Text>
                                    </View>
                                    <Text style={styles.activePassPrice}>₹799</Text>
                                </View>

                                {/* Date Dropdown */}
                                <View style={styles.datePickerContainer}>
                                    <View style={styles.locationInner}>
                                        <Text style={styles.calendarIcon}>📅</Text>
                                        <Text style={styles.locationText}>Today</Text>
                                    </View>
                                    <Text style={styles.chevron}>▼</Text>
                                </View>

                                {/* CALENDAR OVERLAY (Feb 2026) */}
                                <View style={[globalStyles.calendarCard, styles.calendarOverlayPosition]}>
                                    <Text style={globalStyles.calendarHeader}>Feb 2026</Text>

                                    <View style={globalStyles.calendarDaysRow}>
                                        {weekDays.map(day => (
                                            <Text key={day} style={globalStyles.calendarDayLabel}>{day}</Text>
                                        ))}
                                    </View>

                                    <View style={globalStyles.calendarGrid}>
                                        {dates.map((item, index) => (
                                            <View key={index} style={globalStyles.calendarDate}>
                                                <Text style={[
                                                    globalStyles.calendarDateText,
                                                    item.m && globalStyles.calendarDateMuted
                                                ]}>
                                                    {item.d}
                                                </Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>

                                {/* Proceed to Pay (Partially visible/behind or below) */}
                                <TouchableOpacity style={[Buttons.primary, styles.blurBtn]} activeOpacity={1}>
                                    <Text style={styles.btnText}>Proceed to Pay</Text>
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
        flex: 1,
    },
    locationContainer: {
        width: 361,
        height: 54,
        backgroundColor: '#2C2C2E',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
        opacity: 0.5, // Dimmed while overlay is open
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
        opacity: 0.5,
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
        opacity: 0.5,
    },
    activePassName: { fontSize: 16, color: Colors.white, fontWeight: '600' },
    activePassDesc: { fontSize: 12, color: 'rgba(255, 255, 255, 0.6)' },
    activePassPrice: { fontSize: 16, color: Colors.white, fontWeight: '700' },
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
    calendarIcon: { fontSize: 16 },
    calendarOverlayPosition: {
        position: 'absolute',
        top: 77, // Calibrated to show above/on top of bundles area as per mockup
        left: 16,
    },
    blurBtn: {
        marginTop: 'auto',
        marginBottom: 20,
        backgroundColor: Colors.orange,
        opacity: 0.8,
    },
    btnText: {
        ...Typography.button,
        color: Colors.white,
    },
});

export default CalendarPickerScreen;
