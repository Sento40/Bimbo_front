import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

const API_URL = 'https://back-bimbo.herokuapp.com';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `wss://back-bimbo.herokuapp.com/graphql`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({query}) => {
      const {kind, operation} = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
