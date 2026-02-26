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
 * OnboardingScreen - The third screen with "Get Started" and "Browse Buildings" buttons.
 * Features a logo and interactive elements at the bottom.
 */

const OnboardingScreen = ({ navigation }) => {
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
                        {/* Logo Section */}
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Actions Section */}
                        <View style={styles.actionsContainer}>
                            {/* Get Started Button */}
                            <TouchableOpacity
                                style={[Buttons.primary, styles.mtAuto]}
                                onPress={() => {
                                    // Navigate to: "Enter Mobile no. (5)"
                                    // navigation.navigate('MobileLogin');
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.primaryButtonText}>Get Started</Text>
                            </TouchableOpacity>

                            {/* Browse Buildings Button */}
                            <TouchableOpacity
                                style={Buttons.secondary}
                                onPress={() => {
                                    // Browse Buildings logic
                                }}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.secondaryButtonText}>Browse Buildings</Text>
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
        // Achieving the specific crop/zoom from design: width: 1136, height: 852, left: -445px
        position: 'absolute',
        width: 1136,
        height: 852,
        left: -445,
    },
    gradientOverlay: {
        flex: 1,
        // Simulate linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        // In a real project with react-native-linear-gradient, we would use it here.
        // For now, we use a dark overlay to match the design intensity.
    },
    safeArea: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100, // Visual center compensation
    },
    logo: {
        width: '60%',
        height: 120,
    },
    actionsContainer: {
        paddingHorizontal: 16,
        paddingBottom: 26, // Space from bottom
        gap: 12,
        justifyContent: 'flex-end',
    },
    primaryButtonText: {
        ...Typography.button,
        color: Colors.white,
        fontWeight: '600',
    },
    secondaryButtonText: {
        ...Typography.button,
        color: Colors.orange, // Based on mockup, the text-only button is orange
        fontWeight: '600',
    },
});

export default OnboardingScreen;
