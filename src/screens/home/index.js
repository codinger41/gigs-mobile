import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { graphql, Mutation, Query } from 'react-apollo';
import styles from './styles';
import Card from '../../components/cards';
import { getGigsQuery } from '../../graphql/queries';


const ListComponent = graphql(getGigsQuery)(props => {
  const { error, getAllGigs } = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (getAllGigs) {
    return (
      <FlatList
        data={getAllGigs.gigs}
        tabLabel={'All gigs'}
        renderItem={({ item, index }) => (
          <Card key={index} gig={item} />
        )}
        keyExtractor={(i, x) => x.toString()}
        contentContainerStyle={styles.listView}
      />
    );
  }
  return <ActivityIndicator
    size="large"
    color="#e67e22"
  />
})

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
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <ScrollableTabView renderTabBar={props => this.renderHeader({ ...props })}>
          <ListComponent tabLabel={'All gigs'} />
          <ListComponent tabLabel={'Current gigs'} />
        </ScrollableTabView>
      </View>
    )
  }
}

export default Home