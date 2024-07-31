import './App.css';
import Layout from './components/Layout';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
};

export default App;
