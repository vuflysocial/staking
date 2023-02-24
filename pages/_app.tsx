import type { AppProps } from "next/app";
import { useChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = 56

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
    
  );
}

export default MyApp;
