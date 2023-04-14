import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10,
  },
  text: {
    paddingLeft: 4,
  },
  titles: {
    fontSize: 16,
    fontWeight: '600',
  },
  hoursContainer: {
    borderColor: 'green',
    borderWidth: 0.5,
    width: 80,
    borderRadius: 3,
    margin: 10,
    padding: 5,
    flex: 1,
    width: '100%',
  },
  hours: {
    fontSize: 16,
    color: 'green',
    fontWeight: '500',
    textAlign: 'center',
  },
});
