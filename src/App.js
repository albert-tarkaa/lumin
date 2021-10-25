import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ProductsList from './components/ProductsList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <SearchBar />
      <div className='container'>
        <ProductsList currency='NGN' />
      </div>
    </ApolloProvider>
  );
}

export default App;
