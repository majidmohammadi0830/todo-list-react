import logo from './logo.svg';
import './App.css';
import Routing from './routing/Router';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
import './assets/styles/shared/app.scss';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
