import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Card from '../../components/cards';


const gigs = [
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
  { title: 'Help write assignment', price: '400', location: 'lagos', createdAt: '2019-05-29T01:24:22.474+00:00' },
]



class Home extends React.Component {


  renderHeader = ({ goToPage, activeTab }) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, activeTab === 0 ? styles.orange : styles.white]}
          activeOpacity={0.6}
          onPress={() => goToPage(0)}
        >
          <Text style={activeTab === 1 ? styles.whiteText : styles.blackText} >All Gigs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeTab === 0 ? styles.white : styles.orange]}
          activeOpacity={0.6}
          onPress={() => goToPage(1)}
        >
          <Text style={activeTab === 1 ? styles.blackText : styles.whiteText}>Current Gigs</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <ScrollableTabView renderTabBar={props => this.renderHeader({ ...props })}>
          <FlatList
            data={gigs}
            tabLabel={'All gigs'}
            renderItem={({ item, index }) => (
              <Card key={index} gig={item} />
            )}
            keyExtractor={(i, x) => x.toString()}
            contentContainerStyle={styles.listView}
          />
          <FlatList
            data={gigs}
            tabLabel={'Current gigs'}
            renderItem={({ item, index }) => (
              <Card key={index} gig={item} />
            )}
            keyExtractor={(i, x) => x.toString()}
            contentContainerStyle={styles.listView}
          />
        </ScrollableTabView>
      </View>
    )
  }
}

export default Home;
