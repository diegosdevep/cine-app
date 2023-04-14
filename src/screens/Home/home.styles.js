import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },
});
