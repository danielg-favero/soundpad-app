import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 4,
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 32,
    marginTop: 8,
  },
  playIcon: {
    marginRight: 32,
  },
  audioName: {
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
  },
  audioProgressDuration: {
    height: 5,
    backgroundColor: '#ceacfc',
  },
});
