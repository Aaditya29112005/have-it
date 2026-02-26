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
 * PrivateCabinDetailsScreen - The fourteenth screen.
 * A form for gathering information for a private cabin booking/tour.
 */

const PrivateCabinDetailsScreen = ({ navigation }) => {
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

            {/* Bottom Sheet-style Container (top 371px, height 482px) */}
            <View style={styles.bottomContainer}>
              <View style={styles.headerSection}>
                <Text style={styles.headerTitle}>Private Cabin Details</Text>
              </View>

              <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Row 1: Industry and People Count */}
                <View style={styles.row}>
                    <View style={globalStyles.halfInputContainer}>
                        <Text style={globalStyles.formLabel}>What industry are you in?</Text>
                        <TouchableOpacity style={styles.dropdownInner}>
                            <Text style={styles.dropdownText}>Industries</Text>
                            <Text style={styles.chevronSmall}>▼</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.halfCol}>
                        <Text style={globalStyles.formLabel}>What industry are you in?</Text>
                        <View style={globalStyles.occupancyStepper}>
                            <TouchableOpacity><Text style={styles.stepperOp}>-</Text></TouchableOpacity>
                            <Text style={styles.stepperVal}>12</Text>
                            <TouchableOpacity><Text style={styles.stepperOp}>+</Text></TouchableOpacity>
                        </View>
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
                <View style={globalStyles.formInputContainer}>
                    <Text style={globalStyles.formLabel}>Budget Qualification</Text>
                    <TextInput 
                        style={globalStyles.formInput} 
                        placeholder="Do you have a monthly budget range in mind?"
                        placeholderTextColor="#FFFFFF59"
                    />
                </View>

                {/* Row 4: Book a Tour Checkbox and Chips */}
                <View style={styles.tourRow}>
                    <View style={styles.tourCheck}>
                        <View style={globalStyles.checkbox} />
                        <Text style={styles.tourLabel}>Book a Tour</Text>
                    </View>
                    <View style={styles.chipsSection}>
                        <View style={globalStyles.chip}>
                            <Text style={globalStyles.chipText}>Jun 10, 2024</Text>
                        </View>
                        <View style={globalStyles.chip}>
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
    top: 371,
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
  },
  halfCol: {
      width: 173,
      gap: 8,
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
  },
  chevronSmall: {
      color: Colors.white,
      fontSize: 12,
  },
  stepperOp: {
      fontSize: 20,
      color: Colors.orange,
      fontWeight: '500',
  },
  stepperVal: {
      fontSize: 15,
      color: Colors.white,
      fontWeight: '400',
  },
  tourRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
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
    gap: 8,
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

export default PrivateCabinDetailsScreen;
