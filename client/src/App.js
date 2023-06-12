import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navigation'
import "./App.css";

import { setContext } from '@apollo/client/link/context';
// import LoginPage from "./authPages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard";
// import ProductSearchResults from './pages/ProductSearchResults';
import Register from "./pages/RegisterPage";
import ChatPage from "./pages/ChatPage";
import Header from "./components/Header";
import Login from './pages/LoginPage';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chatpage" element={<ChatPage />} />
            {/* <Route path="/product" element={<ProductSearchResults />} /> */}
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        {/* //need footer  */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
