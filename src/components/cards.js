import React from 'react';
import TimeAgo from 'react-native-timeago';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import metrics from '../utils/metrics';

const Card = ({ gig, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => {
        navigation.navigate('SingleGig', { gig })
      }}
    >
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>{gig.title}</Text>
          <Image
            source={{
              uri: `https://robohash.org/${Math.random()}`
            }}
            style={styles.logo}
          />
        </View>
        <Text style={styles.location}>{gig.location.toUpperCase()}</Text>
        <View style={styles.textRow}>
          <Text style={styles.price}>₦ {gig.price}</Text>
        </View>
        <TimeAgo time={gig.createdAt} style={styles.timeAgo}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: metrics.width * 0.95,
    height: metrics.height * 0.2,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    width: metrics.width * 0.9,
    alignSelf: 'center',
    height: metrics.height * 0.1,
    marginTop: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: metrics.width * 0.7,
  },
  logo: {
    width: metrics.width * 0.15,
    height: metrics.width * 0.15,
    borderRadius: 29,
    marginLeft: 20
  },
  location: {
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 10
  },
  hours: {
    marginLeft: 10,
    color: 'grey',
    fontWeight: '400',
    marginTop: 12,
    fontSize: 15
  },
  price: {
    color: '#2ed573',
    fontWeight: '900',
    marginTop: 10,
    fontSize: 19
  },
  textRow: {
    flexDirection: 'row',
    width: metrics.width * 0.9,
    marginLeft: 10,
  },
  dot: {
    marginTop: 10,
    marginLeft: 10
  },
  timeAgo: {
    marginLeft: metrics.width * 0.7,
    position: 'absolute',
    top: 120
  },
  contactText: {
    fontSize: 15
  }
});


export default withNavigation(Card);
