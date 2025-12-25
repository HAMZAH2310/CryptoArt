"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { goerli } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "Crypto Art",
  projectId: "1433dff8b550959a9d27d951609ef5dc",
  chains: [goerli],
  ssr: true,
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
