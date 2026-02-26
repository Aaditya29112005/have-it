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
    TextInput,
    ScrollView,
} from 'react-native';
import { Colors, Typography, Buttons, globalStyles } from './globalStyles';

/**
 * DetailsErrorScreen - Variation of Screen 6 showing a validation error on Email.
 * Features a higher bottom container (top: 338px) and a warning icon in the email field.
 */

const DetailsErrorScreen = ({ navigation }) => {
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
                        <ScrollView contentContainerStyle={styles.scrollContent}>
                            {/* Top Logo Section */}
                            <View style={styles.topLogoContainer}>
                                <Image
                                    source={require('./assets/logo.png')}
                                    style={styles.logo}
                                    resizeMode="contain"
                                />
                            </View>

                            {/* Form Container (New Positioning: top 338px) */}
                            <View style={styles.formContainer}>
                                <Text style={styles.headerTitle}>Enter your Details</Text>

                                <View style={styles.fieldsSection}>
                                    {/* Full Name */}
                                    <View style={globalStyles.formInputContainer}>
                                        <Text style={globalStyles.formLabel}>Full Name</Text>
                                        <TextInput
                                            style={globalStyles.formInput}
                                            placeholder="Full name"
                                            placeholderTextColor="#4B5563"
                                        />
                                    </View>

                                    {/* Email Address with Error/Validation State */}
                                    <View style={[globalStyles.formInputContainer, styles.errorBorder]}>
                                        <Text style={globalStyles.formLabel}>Email address</Text>
                                        <View style={styles.errorInputWrapper}>
                                            <Text style={styles.warningIcon}>!</Text>
                                            <TextInput
                                                style={globalStyles.formInput}
                                                value="hysfyy@gmail.com"
                                                placeholderTextColor="#4B5563"
                                                keyboardType="email-address"
                                            />
                                        </View>
                                    </View>

                                    {/* City (Dropdown mockup) */}
                                    <View style={[globalStyles.formInputContainer, { height: 74 }]}>
                                        <Text style={globalStyles.formLabel}>City</Text>
                                        <TouchableOpacity style={globalStyles.dropdownContainer} activeOpacity={0.7}>
                                            <Text style={globalStyles.formInput}>Noida</Text>
                                            <Text style={styles.chevron}>▼</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Company Name */}
                                    <View style={globalStyles.formInputContainer}>
                                        <Text style={globalStyles.formLabel}>Company Name (Optional)</Text>
                                        <TextInput
                                            style={globalStyles.formInput}
                                            placeholder="Company name"
                                            placeholderTextColor="#4B5563"
                                        />
                                    </View>
                                </View>

                                {/* Sign Up Button */}
                                <TouchableOpacity
                                    style={[Buttons.primary, styles.signUpBtn]}
                                    onPress={() => {
                                        // Navigate to Screen 9
                                    }}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 40,
    },
    topLogoContainer: {
        marginTop: 90, // Positioned at top 90px consistent with logo 
        width: 180,
        height: 122,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    formContainer: {
        marginTop: 126, // Compensation for top container starting at 338px (338 - 90 - 122 = 126)
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        paddingTop: 32,
        height: 515,
    },
    headerTitle: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 32,
        letterSpacing: -0.11,
    },
    fieldsSection: {
        gap: 8,
    },
    errorBorder: {
        borderBottomColor: Colors.error,
        borderBottomWidth: 1,
    },
    errorInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    warningIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.error,
        color: Colors.white,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 20,
    },
    chevron: {
        color: Colors.white,
        fontSize: 14,
    },
    signUpBtn: {
        marginTop: 24,
        alignSelf: 'center',
    },
    btnText: {
        ...Typography.button,
        color: Colors.white,
    },
});

export default DetailsErrorScreen;
