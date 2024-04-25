import { StyleSheet } from 'react-native'
import { height, width } from './dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  header: {
    width: width*0.9,
    height: height*0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButton: {
    width: '10%',
    height: '10%',
    alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
  },

  goBack: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  headerImage: {
    width: '30%',
    height: '30%',
  },

  mainContent: {
    width: width*0.9,
    height: height*0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputTitle: {
    alignSelf: 'baseline',
    fontSize: 25,
  },

  input: {
    width: '100%',
    height: '10%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: width*0.02,
    fontSize: 15,
    padding: '5%',
  },

  signInButton: {
    width: '100%',
    height: '10%',
    borderRadius: width*0.02,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#013298',
  },

  signInButtonText: {
    color: '#fff',
    fontSize: 15,
    
  },

  signInOptionTitle: {
    alignSelf: 'center',
    fontSize: 15,
  },

  signInOptionButtonBox: {
    width: '100%',
    height: '20%',
    paddingLeft: '20%',
    paddingRight: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },

  signInOptionButton: {
    width: '30%',
    height: '30%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: width*0.02,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInOptionImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default styles;