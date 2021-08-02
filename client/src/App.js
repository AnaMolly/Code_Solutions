import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

import Main from './pages/Main'
import ProfileDev from './pages/ProfileDev'
import ProfileBuyer from './pages/ProfileBuyer'
import HomeDev from './pages/HomeDev'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SearchDev from './pages/Search'
import About from './pages/About'

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return(
  <ApolloProvider client={client}>      
      <Router>
      <div>
        <Navbar />
        {/* <About />  */}
        <Route exact path="/" component={Main} />
        <Route exact path="/homedev" component={HomeDev} />
        <Route exact path="/login" component={Login} />  
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profiledev/:userId" component={ProfileDev} />
        <Route exact path="/profilebuyer" component={ProfileBuyer} />
        <Route exact path="/search" component={SearchDev} />
        <Route exact path="/">Logout</Route>
        <Footer />
      </div>
    </Router>
  </ApolloProvider>
  )
};

export default App;
