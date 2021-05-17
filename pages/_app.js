import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


MyApp.getInitialProps = () => ({pageProps: {name: 'Doaa', locale: 'en'}});

export default MyApp
