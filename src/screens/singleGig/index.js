import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { Content } from 'native-base';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import TimeAgo from 'react-native-timeago';
import styles from './styles';


const SingleGig = (props) => {
  const {
    navigation: {
      goBack,
      state: {
        params: {
          gig
        }
      }
    }
  } = props;
  return (
    <Content style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => goBack()}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{gig.title}</Text>
        <TimeAgo time={gig.createdAt} style={styles.timeAgo}/>
      </View>
      <View style={styles.row}>
        <Image
          source={{
            uri: `https://robohash.org/${Math.random()}`
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{gig.contactName}</Text>
      </View>
      <Text style={styles.description}>{gig.description}</Text>
      <View style={styles.boxRow}>
        <View style={styles.box}>
          <Text style={styles.price}>₦ {gig.price}</Text>
          <Text style={styles.boxtitle}>Price</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.location}>{gig.location}</Text>
          <Text style={styles.boxtitle}>Location</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => Linking.openURL(`mailto: ${gig.contactEmail}`)}
      >
        <MaterialIcons
          name="email"
          color="black"
          style={{ marginLeft: 10 }}
          size={40}
        />
        <Text style={styles.contactText}>Contact by email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.5}
        onPress={() => Linking.openURL(`tel: ${gig.contactPhone}`)}
      >
        <FontAwesome
          name="phone-square"
          color="black"
          style={{ marginLeft: 12 }}
          size={41}
        />
        <Text style={styles.contactText}>Contact by phone</Text>
      </TouchableOpacity>
    </Content>
  )
};


export default SingleGig;
