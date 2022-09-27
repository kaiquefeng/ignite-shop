import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ShopCartContext } from "../context/ShopCart";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopCartContext>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </ShopCartContext>
  );
}
