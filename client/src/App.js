import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css'
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});
  

function App() {
  return(
  <ApolloProvider client={client}>   
    <div className='page-container'>
    <div className='content-wrap'>
    <Navbar />
      <Header />            
    </div>
    
    <Footer />
    </div>
  </ApolloProvider>
  )
}

export default App;
