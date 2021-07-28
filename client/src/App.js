import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header/index';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});
  

function App() {
  return(
    <ApolloProvider client={client}>
    <div >
      <Header />
    </div>
  </ApolloProvider>
  )
}

export default App;
