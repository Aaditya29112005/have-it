import React, { useEffect } from 'react';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Animated,
} from 'react-native';
import { Colors, globalStyles } from './globalStyles';

/**
 * GetStartedScreen - The second screen featuring the centered logo.
 * Includes a transition delay and spring animation as per design specs.
 */

const GetStartedScreen = ({ navigation }) => {
    // Animation value for the logo scale or opacity
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        // animation-delay: 2ms;
        const timer = setTimeout(() => {
            // Spring: { mass: 1, stiffness: 16, damping: 6 };
            Animated.spring(fadeAnim, {
                toValue: 1,
                mass: 1,
                stiffness: 16,
                damping: 6,
                useNativeDriver: true,
            }).start();

            // Navigate to: "Get started (4)"
            // This is a placeholder for the actual navigation logic to the next screen.
            // E.g., navigation.navigate('GetStartedNext');
        }, 2);

        return () => clearTimeout(timer);
    }, [fadeAnim]);

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
                        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
                            <Image
                                source={require('./assets/logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </Animated.View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker overlay as seen in mockup
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default GetStartedScreen;
