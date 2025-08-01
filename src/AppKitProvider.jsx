// /* eslint-disable react/prop-types */
// // /* eslint-disable react/prop-types */
// // // /* eslint-disable react/prop-types */
// // // import { createAppKit } from '@reown/appkit/react'
// // // import { WagmiProvider } from 'wagmi'
// // // import { arbitrum, mainnet } from '@reown/appkit/networks'
// // // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// // // import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// // // // 0. Setup queryClient
// // // const queryClient = new QueryClient()

// // // // 1. Your WalletConnect Project ID (from cloud.reown.com)
// // // const projectId = 'eb3825030dcb390efbfb1f8ef94ec45f'

// // // // 2. Optional Metadata
// // // const metadata = {
// // //   name: 'EaseWithdraw App',
// // //   description: 'EaseWithdraw Wallet Integration',
// // //   url: 'https://easewithdraw.com', // use localhost during development
// // //   icons: ['https://easewithdraw.com/favicon.ico'] // must be a full URL
// // // }

// // // // 3. Supported Networks
// // // const networks = [mainnet, arbitrum]

// // // // 4. Wagmi Adapter
// // // const wagmiAdapter = new WagmiAdapter({
// // //   networks,
// // //   projectId,
// // //   ssr: true
// // // })

// // // // 5. Create AppKit modal
// // // createAppKit({
// // //   adapters: [wagmiAdapter],
// // //   networks,
// // //   projectId,
// // //   metadata,
// // //   features: {
// // //     analytics: true // optional
// // //   }
// // // })

// // // export function AppKitProvider({ children }) {
// // //   return (
// // //     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
// // //       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// // //     </WagmiProvider>
// // //   )
// // // }



// // // AppKitProvider.jsx
// // import { createAppKit } from '@reown/appkit/react'
// // import { WagmiProvider } from 'wagmi'
// // import { arbitrum, mainnet } from '@reown/appkit/networks'
// // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// // import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// // // Replace with your actual WalletConnect Project ID from https://cloud.reown.com
// // const projectId = 'YOUR_REOWN_PUBLIC_ID'

// // const metadata = {
// //   name: 'EaseWithdraw',
// //   description: 'Secure wallet login for EaseWithdraw',
// //   url: 'https://easewithdraw.com',
// //   icons: ['https://yourdomain.com/icon.png']
// // }

// // const networks = [mainnet, arbitrum]

// // const wagmiAdapter = new WagmiAdapter({
// //   networks,
// //   projectId,
// //   ssr: true
// // })

// // createAppKit({
// //   adapters: [wagmiAdapter],
// //   networks,
// //   projectId,
// //   metadata
// // })

// // const queryClient = new QueryClient()

// // export function AppKitProvider({ children }) {
// //   return (
// //     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
// //       <QueryClientProvider client={queryClient}>
// //         {children}
// //       </QueryClientProvider>
// //     </WagmiProvider>
// //   )
// // }



// import { createAppKit } from '@reown/appkit/react'

// import { WagmiProvider } from 'wagmi'
// import { arbitrum, mainnet } from '@reown/appkit/networks'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// // 0. Setup queryClient
// const queryClient = new QueryClient()

// // 1. Get projectId from https://cloud.reown.com
// const projectId = 'eb3825030dcb390efbfb1f8ef94ec45f'

// // 2. Create a metadata object - optional
// const metadata = {
//   name: 'AppKit',
//   description: 'AppKit Example',
//   url: 'https://example.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/179229932']
// }

// // 3. Set the networks
// const networks = [mainnet, arbitrum]

// // 4. Create Wagmi Adapter
// const wagmiAdapter = new WagmiAdapter({
//   networks,
//   projectId,
//   ssr: true
// })

// // 5. Create modal
// createAppKit({
//   adapters: [wagmiAdapter],
//   networks,
//   projectId,
//   metadata,
//   features: {
//     analytics: true  // Optional - defaults to your Cloud configuration
//   }
// })

// export function AppKitProvider({ children }) {
//   return (
//     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   )
// }