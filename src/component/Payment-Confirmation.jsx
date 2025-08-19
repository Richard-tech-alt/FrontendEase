// import { useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// const PaymentConfirmation = () => {
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")
//   const [cardId] = useState("")
//   const [planTitle, setPlanTitle] = useState("")
//   const [planPrice, setPlanPrice] = useState("")
//   const [file, setFile] = useState(null)
//   const [status, setStatus] = useState("")
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append("email", email)
//     formData.append("message", message)
//     formData.append("cardId", cardId)
//     formData.append("planTitle", planTitle)
//     formData.append("planPrice", planPrice)
//     formData.append("screenshot", file)

    

//     try {
//       await axios.post("https://back.easewithdraw.com/auth/payment-confirmation", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       setStatus("Payment confirmation sent successfully!")
//       navigate("/")
//     // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       setStatus("Error sending payment confirmation. Please try again.")
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 min-h-[100vh]">
//       <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full border rounded px-2 py-1"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Message:</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full border rounded px-2 py-1"
//           ></textarea>
//         </div>
//         {/* <div>
//           <label className="block mb-1">Card ID:</label>
//           <input
//             type="text"
//             value={cardId}
//             onChange={(e) => setCardId(e.target.value)}
//             className="w-full border rounded px-2 py-1"
//           />
//         </div> */}
//         <div>
//           <label className="block mb-1">Plan Title:</label>
//           <input
//             type="text"
//             value={planTitle}
//             onChange={(e) => setPlanTitle(e.target.value)}
//             className="w-full border rounded px-2 py-1"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Plan Price:</label>
//           <input
//             type="text"
//             value={planPrice}
//             onChange={(e) => setPlanPrice(e.target.value)}
//             className="w-full border rounded px-2 py-1"
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Screenshot:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//             required
//             className="w-full border rounded px-2 py-1"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Submit Payment Confirmation
//         </button>
//       </form>
//       {status && <p className="mt-4 text-center">{status}</p>}
//     </div>
//   )
// }
// export default PaymentConfirmation




import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PaymentConfirmation = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [cardId] = useState("")
  const [planTitle, setPlanTitle] = useState("")
  const [cardName, setCardName] = useState("")
  const [planPrice, setPlanPrice] = useState("")
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData()
    formData.append("email", email)
    formData.append("message", message)
    formData.append("cardId", cardId)
    formData.append("planTitle", planTitle)
    formData.append("planPrice", planPrice)
    formData.append("screenshot", file)
    formData.append("cardName", cardName)

    try {
      // Using fetch instead of axios to avoid dependency
      const response = await fetch("https://finalbackendease.onrender.com/auth/confirm-payment", {
        method: "POST",
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      
      setStatus("success")
      setTimeout(() => navigate("/apply-card"), 2000)
    } catch (error) {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Payment Confirmation</h2>
                <p className="mt-2 text-sm text-gray-500">Complete your payment details below</p>
              </div>
            </div>
            
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-700 font-medium">Payment confirmation sent successfully!</p>
                <p className="text-sm text-green-600 mt-1">Redirecting you....</p>
              </div>
            ) : status === "error" ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center mb-6">
                <p className="text-red-700 font-medium">Error sending payment confirmation</p>
                <p className="text-sm text-red-600 mt-1">Please try again</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Plan Title</label>
                <input
                  type="text"
                  value={planTitle}
                  onChange={(e) => setPlanTitle(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Core/Plus/Elite Plan"
                />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700">Card Name</label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="binance/coinbase/paypal/cashapp/trustwallet/robinhood"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Plan Price</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    value={planPrice}
                    onChange={(e) => setPlanPrice(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Any additional information about your payment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Screenshot</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input 
                          id="file-upload" 
                          name="file-upload"
                          type="file" 
                          onChange={handleFileChange}
                          required
                          className="sr-only" 
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {fileName ? fileName : "PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {loading ? 'Processing...' : 'Submit Payment Confirmation'}
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <button
                onClick={() => navigate("/")}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PaymentConfirmation