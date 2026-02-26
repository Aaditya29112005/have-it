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
 * PassSelectionScreen - The ninth screen for choosing booking duration/packages.
 * Features a list of pass packages and a proceed to pay button.
 */

const PassSelectionScreen = ({ navigation }) => {
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

                        {/* Bottom Sheet-style Container (top 284px) */}
                        <View style={styles.bottomContainer}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerTitle}>Select your Pass</Text>
                            </View>

                            <View style={styles.tabBarMockup}>
                                {/* Simplified tab bar as per design */}
                            </View>

                            <ScrollView contentContainerStyle={styles.contentPadding}>
                                <Text style={styles.sectionTitle}>Select your package</Text>

                                {/* Pass Packages List */}
                                <View style={styles.packageList}>
                                    {/* Selected Package */}
                                    <TouchableOpacity style={globalStyles.passCard} activeOpacity={0.8}>
                                        <View>
                                            <Text style={styles.packageName}>8 Day Pass</Text>
                                            <Text style={styles.packageDesc}>Valid for 30 Days</Text>
                                        </View>
                                        <Text style={styles.packagePrice}>₹ 2400</Text>
                                    </TouchableOpacity>

                                    {/* Other Packages (Mocked secondary style) */}
                                    <TouchableOpacity style={[globalStyles.passCard, styles.secondaryPassCard]} activeOpacity={0.7}>
                                        <View>
                                            <Text style={styles.packageName}>4 Day Pass</Text>
                                            <Text style={styles.packageDesc}>Valid for 15 Days</Text>
                                        </View>
                                        <Text style={styles.packagePrice}>₹ 1400</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[globalStyles.passCard, styles.secondaryPassCard]} activeOpacity={0.7}>
                                        <View>
                                            <Text style={styles.packageName}>1 Day Pass</Text>
                                            <Text style={styles.packageDesc}>Valid for 1 Day</Text>
                                        </View>
                                        <Text style={styles.packagePrice}>₹ 400</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Proceed to Pay Button (top 491px relative to container) */}
                                <TouchableOpacity
                                    style={[globalStyles.proceedBtn, styles.proceedBtnPosition]}
                                    onPress={() => {
                                        // Navigate to next screen
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={globalStyles.proceedBtnText}>Proceed to Pay</Text>
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
        top: 284,
        width: 393,
        height: 568,
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerSection: {
        paddingTop: 29,
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
    tabBarMockup: {
        width: 361,
        height: 40,
        backgroundColor: '#2C2C2E',
        borderRadius: 12,
        alignSelf: 'center',
        marginBottom: 22,
    },
    contentPadding: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '600',
        marginBottom: 16,
        letterSpacing: -0.02,
    },
    packageList: {
        marginBottom: 24,
    },
    packageName: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '600',
        marginBottom: 4,
    },
    packageDesc: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    packagePrice: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
    },
    secondaryPassCard: {
        backgroundColor: 'rgba(44, 44, 46, 0.5)',
    },
    proceedBtnPosition: {
        marginTop: 20, // adjusted to be roughly at 491px total top
        backgroundColor: Colors.orange, // Overriding #2C2C2E from global to match primary action visual
    },
});

export default PassSelectionScreen;
