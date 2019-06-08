import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';
import { graphql, Mutation, Query } from 'react-apollo';
import styles from './styles';
import Card from '../../components/cards';
import { getGigsQuery } from '../../graphql/queries';
import ActionButton from 'react-native-action-button';

const ListComponent = graphql(getGigsQuery)(props => {
  return (
    <Query query={getGigsQuery} variables={{ location: '' }} >
      {({ data, loading, error, fetchMore }) => {
        if (loading) return <ActivityIndicator size="large" color="#e67e22" />
        if (error) {
          return <Text>{error}</Text>;
        }
        if (data) {
          return (
            <View>
              {
                props.tabLabel === 'locationFilter' ? (
                  <Item rounded style={styles.inputItem}>
                    <Input
                      style={{ backgroundColor: 'white' }} 
                      placeholder='Enter location'
                      onChangeText={text => fetchMore({
                        variables: {
                          location: text
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          return fetchMoreResult
                        }
                      })}
                    />
                  </Item>
                ) : null
              }
              <FlatList
                data={data.getAllGigs.gigs || []}
                renderItem={({ item, index }) => (
                  <Card key={index} gig={item} />
                )}
                onEndReachedThreshold={1}
                keyExtractor={(i, x) => x.toString()}
                contentContainerStyle={styles.listView}
              />
            </View>
          );
        }
      }}
    </Query>
  )
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
        <View>
          <TouchableOpacity
            style={[styles.button, activeTab === 0 ? styles.white : styles.orange]}
            activeOpacity={0.6}
            onPress={() => goToPage(1)}
          >
            <Text style={activeTab === 1 ? styles.blackText : styles.whiteText}>Filter by location</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, activeTab === 0 ? styles.white : styles.orange]}
            activeOpacity={0.6}
            onPress={() => goToPage(1)}
          >
            <Text style={activeTab === 1 ? styles.blackText : styles.whiteText}>Filter by location</Text>
          </TouchableOpacity>
        </View>
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
          <Text style={styles.title}>Gigs</Text>
        </View>
        <ScrollableTabView renderTabBar={props => this.renderHeader({ ...props })}>
          <ListComponent
            tabLabel={'allGigs'}
          />
          <ListComponent
            tabLabel={'locationFilter'}
          />
        </ScrollableTabView>
        <ActionButton buttonColor="#e67e22"
          onPress={() => this.props.navigation.navigate('NewGig')}
        >
        </ActionButton>
      </View>
    )
  }
}

export default Home
