// import '../styles/globals.css';

import TabIcon from '../components/TabIcon.jsx';
import Footer from '../components/Footer.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TabIcon />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
