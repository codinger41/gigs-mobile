import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Navigator from './src/navigation';
import { Font } from 'expo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://gigs-api.herokuapp.com/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Raphtalia: require('./assets/Raphtalia.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    )
  }
}


export default App;
