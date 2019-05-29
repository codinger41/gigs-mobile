import { StyleSheet } from 'react-native';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    width: metrics.width,
    height: metrics.height,
    backgroundColor: '#e2e2e2'
  },
  header: {
    width: metrics.width,
    height: metrics.height * 0.1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
    width: metrics.width * 0.09,
    height: metrics.height * 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: metrics.width * 0.45,
    height: metrics.height * 0.07,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orange: {
    backgroundColor: '#e67e22',
  },
  white: {
    backgroundColor: '#ffffff'
  },
  blackText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '900'
  },
  whiteText: {
    fontSize: 15,
    fontWeight: '900'
  },
  logo: {
    width: metrics.width * 0.10,
    height: metrics.width * 0.10,
    borderRadius: 20,
    marginTop: 15
  },
  title: {
    fontFamily: 'raft',
    fontSize: 50,
    marginLeft: 10,
    marginTop: 12
  }
})
