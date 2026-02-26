import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { Colors, Typography, Spacing, globalStyles } from './globalStyles';

/**
 * WelcomeScreen - The first screen of the application.
 * Features a full-screen background image with overlay and minimal branding.
 */

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" transparent backgroundColor="transparent" />
            <ImageBackground
                source={require('./assets/bg.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <SafeAreaView style={styles.content}>
                        {/* 
              This screen is currently just a background as per initial request.
              Future components like Header, Buttons, etc. will be added here.
            */}
                        <View style={styles.bottomSection}>
                            {/* Placeholder for future screen-specific content */}
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
        width: 393, // Specifically requested width
        height: 852, // Specifically requested height
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: Colors.overlay,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: Spacing.xl,
        paddingBottom: Spacing.xxl,
    },
    bottomSection: {
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
});

export default WelcomeScreen;
