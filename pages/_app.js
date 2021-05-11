import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log({pageProps})
  return <Component {...pageProps} />
}


MyApp.getInitialProps = function () {
  console.log("HELLO");
  return ({pageProps: {name: 'Doaa'}});
};

export default MyApp
