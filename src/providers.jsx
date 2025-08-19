// // import React from "react";
// // import '@rainbow-me/rainbowkit/styles.css';
// // import {
// //   getDefaultWallets,
// //   RainbowKitProvider
// // } from "@rainbow-me/rainbowkit";
// // import {
// //   configureChains,
// //   createConfig,
// //   WagmiConfig,
// //   WagmiProvider
// // } from "wagmi";
// // import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
// // import { alchemyProvider } from "wagmi/providers/alchemy";
// // import { publicProvider } from "wagmi/providers/public";
// // import { QueryClientProvider } from "@tanstack/react-query";

// // const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
// // const alchemyKey = import.meta.env.VITE_ALCHEMY_KEY;

// // const { chains, publicClient } = configureChains(
// //   [mainnet, polygon, optimism, arbitrum],
// //   [
// //     alchemyProvider({ apiKey: alchemyKey || "" }),
// //     publicProvider()
// //   ]
// // );

// // const { connectors } = getDefaultWallets({
// //   appName: "EaseWithdraw",
// //   projectId: "381c2efd0a48a669d91fe548d036dd74",
// //   chains
// // });

// // const wagmiConfig = createConfig({
// //   autoConnect: true,
// //   connectors,
// //   publicClient
// // });

// // export default function Providers({ children }) {
// //   return (
// //     <WagmiProvider config={config}>
// //       <QueryClientProvider client={queryClient}>
// //         <RainbowKitProvider>
// //           {children}
// //         </RainbowKitProvider>
// //       </QueryClientProvider>
// //     </WagmiProvider>
// //   );
// // }



// import React from 'react'
// import '@rainbow-me/rainbowkit/styles.css'
// import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'
// import {
//   metaMaskWallet,
//   coinbaseWallet,
//   walletConnectWallet,
//   injectedWallet,
//   rainbowWallet
// } from '@rainbow-me/rainbowkit/wallets'
// import { WagmiProvider, createConfig, http } from 'wagmi'
// import { mainnet, polygon, arbitrum, optimism } from 'wagmi/chains'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// // ---- env
// const appName = 'EaseWithdraw'
// const projectId = "381c2efd0a48a669d91fe548d036dd74"

// console.log('projectId:', projectId)
// console.log('appName:', appName)


// if (!projectId) {
//   console.error('WalletConnect Project ID is missing')
//   throw new Error('WalletConnect Project ID is required')
// }


// // ---- chains
// const chains = [mainnet, polygon, arbitrum, optimism]
// console.log('chains:', chains)


// // ---- connectors (Wallet list shown in RainbowKit modal)
// const connectors = connectorsForWallets(
//   [
//     {
//       groupName: 'Easewithdraw',
//       wallets: [
//         metaMaskWallet({    projectId: "381c2efiuoh78a669d91fe548d036dd7",  chains: chains  }),
//         coinbaseWallet({ appName,  chains: chains  }),
//         walletConnectWallet({    projectId: "381c2efiuoh78a669d91fe548d036dd7",  chains: chains  }),
//         rainbowWallet({    projectId: "381c2efiuoh78a669d91fe548d036dd7",  chains: chains  }),
//         injectedWallet({  chains: chains  })
//       ]
//     }
//   ]
// )

// // ---- wagmi config (PUBLIC RPCs only — no Alchemy)
// const config = createConfig({
//   chains,
//   connectors,
//   // http() with no args uses each chain’s public RPCs from wagmi
//   transports: {
//     [mainnet.id]: http(),
//     [polygon.id]: http(),
//     [arbitrum.id]: http(),
//     [optimism.id]: http()
//   },
//   ssr: false
// })

// const queryClient = new QueryClient()

// export default function Providers({ children }) {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider>
//           {children}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }



import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Create config using getDefaultConfig
const config = getDefaultConfig({
  appName: 'EaseWithdraw',
  projectId: '381c2efd0a48a669d91fe548d036dd74', // Your WalletConnect project ID
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false, // Set to true if using SSR (Next.js)
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

// Create QueryClient instance
const queryClient = new QueryClient();

// Provider component
function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
export default Providers