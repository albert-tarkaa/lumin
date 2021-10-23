import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ProductsList from './components/ProductsList';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <ProductsList currency='EUR' />
      </div>
    </ApolloProvider>
  );
}

export default App;
