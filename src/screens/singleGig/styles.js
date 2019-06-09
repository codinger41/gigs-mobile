import { StyleSheet, Platform } from 'react-native';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    width: metrics.width,
    height: metrics.height
  },
  header: {
    width: metrics.width,
    height: metrics.height * 0.1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        marginTop: metrics.height * 0.02,
      }
    }),
  },
  backButton: {
    width: metrics.width * 0.1,
    height: metrics.height * 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 40,
    marginLeft: metrics.width * 0.03,
    fontWeight: 'bold'
  },
  timeAgo: {
    marginLeft: metrics.width * 0.02,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15
  },
  row: {
    width: metrics.width,
    height: metrics.height * 0.1,
    flexDirection: 'row'
  },
  avatar: {
    width: metrics.width * 0.15,
    height: metrics.width * 0.15,
    borderRadius: 29,
    marginLeft: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginTop: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
    marginTop: 20
  },
  description: {
    color: 'grey',
    width: metrics.width * 0.98,
    fontSize: 17,
    marginHorizontal: metrics.width * 0.03,
    lineHeight: 25,
  },
  boxRow: {
    width: metrics.width * 0.92,
    alignSelf: 'center',
    height: metrics.height * 0.1,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    width: metrics.width * 0.4,
    height: metrics.height * 0.1,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    color: '#2ed573',
    fontWeight: '900',
    marginTop: 10,
    fontSize: 19,
  },
  boxtitle: {
    fontSize: 15,
    color: 'grey'
  },
  location: {
    fontWeight: '900',
    marginTop: 10,
    fontSize: 19,
  },
  buttonContainer: {
    width: metrics.width * 0.92,
    height: metrics.height * 0.1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 10
  }
});

