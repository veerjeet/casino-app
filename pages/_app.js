import '../styles/globals.css'
import Head from 'next/head';
import {Provider} from 'react-redux';
import store from '../redux/configureStore';
import Main from '../components/main';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Main>
            <Component {...pageProps} />
          </Main>
          </Provider>
}

export default MyApp
