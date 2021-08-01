import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

import Main from './pages/Main'
import ProfileDev from './pages/ProfileDev'
import ProfileBuyer from './pages/ProfileBuyer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SearchDev from './pages/Search'


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});
  

function App() {
  return(
  <ApolloProvider client={client}>   
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />  
        <Route path="/signup" component={Signup} />
        <Route exact path="/profiledev" component={ProfileDev} />
        <Route exact path="/profilebuyer" component={ProfileBuyer} />
        <Route exact path="/search" component={SearchDev} />
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
  )
}

export default App;
