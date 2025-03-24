// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  splashText: {
    position: 'relative',
    top: '60%', // Move closer to the BukitVista logo
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  logoBVGO: {
    width: 220,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  logoBV: {
    width: 180,
    height: 90,
    resizeMode: 'contain',
  },
});