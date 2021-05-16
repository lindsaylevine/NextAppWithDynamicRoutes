import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log({Component});
  return <Component {...pageProps} />
}


MyApp.getInitialProps = function (appContext) {
  const { ctx, Component, router } = appContext;

  const languageNotAvailable = router.locale === undefined || router.locale === 'N/A';

  if (languageNotAvailable && ctx && ctx.res.writeHead) {
    console.log("REDIRECTION WITH PATH");
    ctx.res.writeHead(302, { Location: `/en${router.asPath}` });
    ctx.res.end();
    return {};
  }
  return ({pageProps: {name: 'Doaa', locale: router.locale}});
};

export default MyApp
