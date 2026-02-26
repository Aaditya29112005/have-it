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
    TextInput,
} from 'react-native';
import { Colors, Typography, Buttons, globalStyles } from './globalStyles';

/**
 * SingleDeskDetailsScreen - The sixteenth screen.
 * A form for gathering information for a single desk booking.
 */

const SingleDeskDetailsScreen = ({ navigation }) => {
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

                        {/* Bottom Sheet-style Container (top 370px, height 482px) */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerTitle}>Single Desk</Text>
                            </View>

                            <ScrollView contentContainerStyle={styles.scrollContent}>
                                {/* Row 1: Asymmetrical Inputs (You work as? & Work Description) */}
                                <View style={styles.row}>
                                    <View style={globalStyles.deskHalfLeft}>
                                        <Text style={globalStyles.formLabel}>You work as?</Text>
                                        <TouchableOpacity style={styles.dropdownInner}>
                                            <Text style={styles.dropdownText}>Freelancer</Text>
                                            <Text style={styles.chevronSmall}>▼</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={globalStyles.deskHalfRight}>
                                        <Text style={globalStyles.formLabel}>What kind of work you do?</Text>
                                        <TextInput
                                            style={styles.formInputSmall}
                                            placeholder="Designing"
                                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                        />
                                    </View>
                                </View>

                                {/* Row 2: Move-in Timeline */}
                                <View style={globalStyles.formInputContainer}>
                                    <Text style={globalStyles.formLabel}>When are you looking to move in?</Text>
                                    <TouchableOpacity style={styles.dropdownInner}>
                                        <Text style={styles.dropdownText}>Immediately (0–15 days)</Text>
                                        <Text style={styles.chevronSmall}>▼</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Row 3: Budget Qualification */}
                                <View style={[globalStyles.formInputContainer, { borderBottomWidth: 0.5 }]}>
                                    <Text style={globalStyles.formLabel}>Budget Qualification</Text>
                                    <TextInput
                                        style={globalStyles.formInput}
                                        placeholder="Do you have a monthly budget range in mind?"
                                        placeholderTextColor="#FFFFFF59"
                                    />
                                </View>

                                {/* Row 4: Book a Tour */}
                                <View style={styles.tourRow}>
                                    <View style={styles.tourCheck}>
                                        <View style={globalStyles.checkbox} />
                                        <Text style={styles.tourLabel}>Book a Tour</Text>
                                    </View>
                                    <View style={styles.chipsSection}>
                                        <View style={globalStyles.chip}>
                                            <Text style={globalStyles.chipText}>2024</Text>
                                        </View>
                                        <View style={[globalStyles.chip, { backgroundColor: '#7878801F' }]}>
                                            <Text style={globalStyles.chipText}>Jun 10</Text>
                                        </View>
                                        <View style={[globalStyles.chip, { backgroundColor: '#7878801F' }]}>
                                            <Text style={globalStyles.chipText}>9:41 AM</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Final Sign Up Button */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.signupBtn]}
                                    onPress={() => {
                                        // Success navigation
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.signupBtnText}>Sign Up</Text>
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
        top: 370,
        width: 393,
        height: 482,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerSection: {
        paddingTop: 32,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        lineHeight: 30,
        letterSpacing: -0.11,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        gap: 16,
    },
    dropdownInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    dropdownText: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '400',
        opacity: 0.7,
    },
    chevronSmall: {
        color: Colors.white,
        fontSize: 12,
    },
    formInputSmall: {
        fontSize: 15,
        color: Colors.white,
        paddingVertical: 0,
        marginTop: 8,
    },
    tourRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
    },
    tourCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    tourLabel: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '500',
    },
    chipsSection: {
        flexDirection: 'row',
        gap: 5,
    },
    signupBtn: {
        marginTop: 24,
        width: 361,
        height: 54,
    },
    signupBtnText: {
        ...Typography.button,
        color: Colors.white,
        fontSize: 15,
    },
});

export default SingleDeskDetailsScreen;
