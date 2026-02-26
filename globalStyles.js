import { StyleSheet } from 'react-native';

/**
 * Global Styles for the application.
 * Contains common colors, typography, and reusable layout helpers.
 */

export const Colors = {
  background: '#0F0F10',
  primary: '#FFFFFF',
  secondary: '#B0B0B0',
  accent: '#FFD700', // Gold/Accent color example
  overlay: 'rgba(0, 0, 0, 0.4)',
  white: '#FFFFFF',
  black: '#000000',
  orange: '#FF7E15',
  error: '#FF0000', // Red for errors
};

export const Typography = {
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.primary,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.secondary,
  },
  subBody: {
    fontSize: 15,
    fontWeight: '300',
    color: '#9CA3AF',
  },
  button: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const Buttons = {
  primary: {
    width: 361,
    height: 54,
    borderRadius: 12,
    backgroundColor: Colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  secondary: {
    width: 361,
    height: 54,
    borderRadius: 8,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    width: 361,
    height: 70,
    backgroundColor: '#2C2C2E', // Dark grey background for input
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
  },
  inputLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '400',
  },
  inputValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputPrefix: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
  },
  inputText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 287,
    height: 70,
  },
  otpBox: {
    width: 60,
    height: 70,
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBoxActive: {
    borderColor: '#FF7300',
  },
  otpText: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: '500',
  },
  formInputContainer: {
    width: 361,
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '400',
    marginBottom: 4,
  },
  formInput: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '400',
  },
  formInputError: {
    borderBottomColor: Colors.error,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectionPill: {
    width: 84,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  selectionPillActive: {
    backgroundColor: '#FF7E1566', // 40% opacity orange
  },
  selectionPillText: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: '400',
    textAlign: 'center',
  },
  passCard: {
    width: 361,
    height: 79,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgba(255, 150, 64, 0.11)', // #FF96401C
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  proceedBtn: {
    width: 361,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  proceedBtnText: {
    fontSize: 15,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stepperBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#7A4B1A', // Brownish background from image
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  stepperValue: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  bundleCard: {
    width: 361,
    height: 69,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#2C2C2E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 12,
    color: Colors.orange,
    fontWeight: '600',
  },
  calendarCard: {
    width: 265,
    height: 264,
    borderRadius: 12,
    backgroundColor: '#2C2C2E',
    padding: 16,
    zIndex: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  calendarHeader: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
    marginBottom: 14,
  },
  calendarDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  calendarDayLabel: {
    width: 32,
    textAlign: 'center',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 4,
  },
  calendarDate: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarDateText: {
    fontSize: 11,
    color: Colors.white,
  },
  calendarDateMuted: {
    color: 'rgba(255, 255, 255, 0.3)',
  },
  bundleCardActive: {
    borderColor: '#FF7E15',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 150, 64, 0.11)', // #FF96401C
    // Shadow specs from image
    shadowColor: '#FF7300',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  stepperCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF730066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kycCard: {
    width: 361,
    height: 92,
    borderRadius: 12,
    backgroundColor: '#1C1C1E',
    padding: 16,
    gap: 4,
    marginBottom: 16,
  },
  kycTitle: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '400',
    letterSpacing: 0,
  },
  kycDescription: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
    lineHeight: 18,
  },
  successIconOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 115, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIconInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FF7300',
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfInputContainer: {
    width: 173, // Adjusted for gap within 361 total
    height: 74,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  occupancyStepper: {
    width: 173,
    height: 52,
    backgroundColor: '#2C2C2E',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#2C2C2E',
  },
  chipText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#C5C6CC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deskHalfLeft: {
    width: 162,
    height: 74,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
  deskHalfRight: {
    width: 183,
    height: 74,
    justifyContent: 'flex-end',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
  },
});
