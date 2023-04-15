import Nav from '../components/nav';
import '../styles/globals.css';

import { Provider } from 'react-redux';
import store from "./store.js";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav/>
      <Component {...pageProps}/>
    </Provider>
  );
}
