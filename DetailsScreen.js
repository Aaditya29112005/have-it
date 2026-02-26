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
 * DetailsScreen - The sixth screen for entering user details.
 * Features a registration form with 4 fields and a checkbox.
 */

const DetailsScreen = ({ navigation }) => {
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

                            {/* Form Container */}
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

                                    {/* Email Address */}
                                    <View style={globalStyles.formInputContainer}>
                                        <Text style={globalStyles.formLabel}>Email Address</Text>
                                        <TextInput
                                            style={globalStyles.formInput}
                                            placeholder="Email address"
                                            placeholderTextColor="#4B5563"
                                            keyboardType="email-address"
                                        />
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

                                {/* Terms & Conditions Section */}
                                <View style={styles.termsContainer}>
                                    <View style={styles.checkbox} />
                                    <View style={styles.termsTextContainer}>
                                        <Text style={styles.termsTitle}>Terms & Conditions</Text>
                                        <Text style={styles.termsDesc}>
                                            Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                                        </Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker for form readability
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 40,
    },
    topLogoContainer: {
        marginTop: 60, // Adjusted for scroll view
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
        marginTop: 40,
        paddingHorizontal: 16,
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
        gap: 4,
    },
    chevron: {
        color: Colors.white,
        fontSize: 14,
    },
    termsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        paddingRight: 32,
        gap: 12,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#4B5563',
        marginTop: 2,
    },
    termsTextContainer: {
        flex: 1,
    },
    termsTitle: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: '500',
        marginBottom: 4,
    },
    termsDesc: {
        fontSize: 12,
        color: '#9CA3AF',
        lineHeight: 16,
    },
    signUpBtn: {
        marginTop: 40,
        alignSelf: 'center',
    },
    btnText: {
        ...Typography.button,
        color: Colors.white,
    },
});

export default DetailsScreen;
