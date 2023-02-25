import type { AppProps } from "next/app";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="binance">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

function MyComponent() {
  const { contract, isLoading, error } = useContract(
    "0xFdEEb8871a2183b367a24222f3e3c225a872d775"
  );

  if (isLoading) {
    return <div>Loading contract...</div>;
  } 
}

  

export default App;
