// // /* eslint-disable react/prop-types */
// // // AppKitProvider.jsx
// // import { createAppKit } from '@reown/appkit/react'
// // import { WagmiProvider } from 'wagmi'
// // import { arbitrum, mainnet } from '@reown/appkit/networks'
// // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// // import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// // // Replace with your actual WalletConnect Project ID from https://cloud.reown.com
// // const projectId = 'eb3825030dcb390efbfb1f8ef94ec45f'

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


// import { useAccount, useSignMessage } from 'wagmi'
// import axios from 'axios'

// export default function WalletLoginButton() {
//   const { address, isConnected } = useAccount()
//   const { signMessageAsync } = useSignMessage()

//   const loginWithWallet = async () => {
//     if (!isConnected || !address) {
//       alert('Please connect your wallet first')
//       return
//     }

//     // 1. Get nonce
//     const { data } = await axios.get('http://localhost:3001/api/nonce', {
//       params: { address }
//     })

//     const message = `Sign to login. Your code: ${data.nonce}`

//     // 2. Sign
//     const signature = await signMessageAsync({ message })

//     // 3. Send to backend
//     const response = await axios.post('http://localhost:3001/api/auth', {
//       address,
//       message,
//       signature
//     })

//     if (response.data.success) {
//       alert('✅ Logged in successfully!')
//     } else {
//       alert('❌ Login failed')
//     }
//   }

//   return (
//     <button onClick={loginWithWallet} className="px-4 py-2 bg-blue-600 text-white rounded">
//       Login with Wallet
//     </button>
//   )
// }



import { useAccount, useSignMessage } from 'wagmi'
import axios from 'axios'

export default function WalletLoginButton() {
  const { address, isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()

  const loginWithWallet = async () => {
    try {
      // 1. Make sure wallet is connected
      if (!isConnected || !address) {
        alert("⚠️ Please connect your wallet first.")
        return
      }

      // 2. Fetch nonce from your backend
      const { data } = await axios.get(
        'https://wallentcardwithauthentication.onrender.com/auth/nonce',
        { params: { address } }
      )

      const message = `Sign to login. Your code: ${data.nonce}`

      // 3. Ask user to sign the message
      const signature = await signMessageAsync({ message })

      // 4. Send the signed message to the backend
      const response = await axios.post(
        'https://wallentcardwithauthentication.onrender.com/auth/wallet-login',
        {
          address,
          message,
          signature
        }
      )

      if (response.data.success) {
        alert("✅ Wallet login successful!")
        localStorage.setItem("walletAddress", address)
        // optionally store token/session here
      } else {
        alert("❌ Login failed: " + response.data.error)
      }

    } catch (error) {
      console.error(error)
      alert("❌ Error during wallet login.")
    }
  }

  return (
    <button
      onClick={loginWithWallet}
      className="px-4 py-2 bg-indigo-600 text-white rounded"
    >
      Login with Wallet
    </button>
  )
}
