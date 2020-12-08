import './App.css';
import Layout from '../src/component/layout/Layout' ;
import configureStore from '../src/redux';
import { Provider } from 'react-redux';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Layout />
    </div>
    </Provider>
  );
}

export default App;
