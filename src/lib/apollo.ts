import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4thmbgs03lr01uh00nsgct7/master',
  cache: new InMemoryCache(),
});
