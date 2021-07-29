import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header/index';
import Navbar from './components/Navbar/index';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});
  

function App() {
  return(
  <ApolloProvider client={client}>   
    <div >
    <Navbar />
      <Header />            
    </div>
  </ApolloProvider>
  )
}

export default App;
