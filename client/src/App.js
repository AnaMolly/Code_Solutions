import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
//import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

import Main from './pages/Main'
import ProfileDev from './pages/ProfileDev'
import ProfileBuyer from './pages/ProfileBuyer'


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
    <ProfileBuyer />
    </div>
    
    <Footer />
    </div>
  </ApolloProvider>
  )
}

export default App;
