import "@styles/main.scss";

import AuthHelper from "@containers/AuthHelper";
import configureStore from "@redux/configureStore";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import Navigation from "../containers/Navigation/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={configureStore}>
        <AuthHelper />
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
