




// import React from 'react';

// const CardLimitations = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 bg-white min-h-screen">
//       {/* Header */}
//       <div className="mb-4 sm:mb-6">
//         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//           EaseWithDrawCard Limitations & Fees
//         </h1>
//         <p className="text-xs sm:text-sm text-gray-500">Updated over a month ago</p>
//       </div>

//       {/* Introduction */}
//       <div className="mb-6 sm:mb-8">
//         <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//           Here is a detailed overview of the fees and limits for our{' '}
//           <span className="text-blue-600 underline cursor-pointer">crypto card</span>, helping you understand
//           the costs and usage rules for a seamless{' '}
//           <span className="text-blue-600 underline cursor-pointer">crypto pay</span> experience.
//         </p>
//       </div>

//       {/* Card Application Table */}
//       <div className="mb-6 sm:mb-8">
//         <div className="overflow-x-auto shadow-lg rounded-lg">
//           <table className="w-full border-collapse min-w-[600px]">
//             <thead>
//               <tr style={{backgroundColor: '#480455'}}>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-left border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   1. Card application
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Fee
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Description
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Virtual card application
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   10.00 USD
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Physical card application
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   100.00 USD
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Mailing of your physical card
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   Waived
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Replacement of virtual card
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-sm font-medium">
//                   5.00 USD for the first update,<br />
//                   10.00 USD for each subsequent update
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Transactions Table */}
//       <div className="mb-6 sm:mb-8">
//         <div className="overflow-x-auto shadow-lg rounded-lg">
//           <table className="w-full border-collapse min-w-[700px]">
//             <thead>
//               <tr style={{backgroundColor: '#480455'}}>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-left border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   2. Transactions
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Fee
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Description
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Default currency transaction
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   Waived
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Non-default currency transaction
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   1.20%
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   ATM withdrawal fee
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   2.00%
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Transaction fee
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   1.00%
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
//                   Refers to the cryptocurrency conversion fee
//                 </td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Small auth transaction fee
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-sm font-medium">
//                   • Waived for the first 5 small auth transactions per card each month<br />
//                   • 0.2 USD for each following small transaction
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
//                   Refers to transactions less than or equal to 1.00 USD
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Declined transaction fee
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-sm font-medium">
//                   • Waived for the first 3 declined transactions per card each month<br />
//                   • 0.5 USD for each following declined transaction
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200">
//                   <div className="text-xs sm:text-sm">
//                     Reasons for declined transactions include but are not limited to:<br />
//                     • Insufficient balance<br />
//                     • Frozen cards<br />
//                     • Lost cards<br />
//                     • Inputting incorrect card information
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Account Table */}
//       <div className="mb-6 sm:mb-8">
//         <div className="overflow-x-auto shadow-lg rounded-lg">
//           <table className="w-full border-collapse min-w-[600px]">
//             <thead>
//               <tr style={{backgroundColor: '#480455'}}>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-left border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   3. Account
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Fee
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Description
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Account maintenance
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   Waived
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
//                   Including monthly and annual fees
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Card cancellation
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   2.00 USD per card
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base">
//                   Applicable to both virtual and physical cards
//                 </td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}></td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base font-medium">
//                   Effective from October 25, 2024
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* BIN Types Table */}
//       <div className="mb-6 sm:mb-8">
//         <div className="overflow-x-auto shadow-lg rounded-lg">
//           <table className="w-full border-collapse min-w-[600px]">
//             <thead>
//               <tr style={{backgroundColor: '#480455'}}>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border w-1/4 text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   {/* Empty first column */}
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   HKD BIN
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   USD BIN
//                 </th>
//                 <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" style={{borderColor: '#3a0344'}}>
//                   Description
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="bg-gray-50">
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 font-semibold text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Deposit Fee
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Free</td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Free</td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//               <tr>
//                 <td className="py-3 px-2 sm:px-4 border border-gray-200 font-semibold text-sm sm:text-base" style={{backgroundColor: '#f3e8f4'}}>
//                   Balance Limit
//                 </td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Unlimited</td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Unlimited</td>
//                 <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base"></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Card Limits Table */}
//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="w-full border-collapse min-w-[700px]">
//           <thead>
//             <tr style={{backgroundColor: '#480455'}}>
//               <th className="text-white font-semibold py-3 px-2 sm:px-4 text-center border text-sm sm:text-base" colSpan="5" style={{borderColor: '#3a0344'}}>
//                 Card Limits
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-gray-50">
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 font-semibold text-sm sm:text-base" rowSpan="2" style={{backgroundColor: '#f3e8f4'}}>
//                 Transaction Limit
//               </td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Per Transaction</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">100,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">100,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//             </tr>
//             <tr>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 bg-gray-50 text-sm sm:text-base">Daily Limit</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">1,000,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">1,000,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//             </tr>
//             <tr className="bg-gray-50">
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 font-semibold text-sm sm:text-base" rowSpan="3" style={{backgroundColor: '#f3e8f4'}}>
//                 ATM Withdrawal
//               </td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">Times of Withdrawal</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-sm">
//                 5/Day<br />
//                 75/Month
//               </td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-sm">
//                 5/Day<br />
//                 75/Month
//               </td>
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//             </tr>
//             <tr>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 bg-gray-50 text-sm sm:text-base">Daily Limit</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">80,000 HKD</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">10,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//             </tr>
//             <tr className="bg-gray-50">
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 bg-gray-50 text-sm sm:text-base">Monthly Limit</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">1,600,000 HKD</td>
//               <td className="py-3 px-2 sm:px-4 text-center border border-gray-200 text-sm sm:text-base">200,000 USD</td>
//               <td className="py-3 px-2 sm:px-4 border border-gray-200 text-sm sm:text-base"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CardLimitations;






import React from 'react';

const CardLimitations = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-3 sm:mb-6">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          EaseWithDraw Card Limitations & Fees
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">Updated over a month ago</p>
      </div>

      {/* Introduction */}
      <div className="mb-4 sm:mb-8">
        <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
          Here is a detailed overview of the fees and limits for our{' '}
          <span className="text-blue-600 underline cursor-pointer">crypto card</span>, helping you understand
          the costs and usage rules for a seamless{' '}
          <span className="text-blue-600 underline cursor-pointer">crypto pay</span> experience.
        </p>
      </div>

      {/* Table 1: Card Application */}
      {renderStandardTable("1. Card application", [
        ["Virtual card application", "100.00 USD", ""],
        ["Physical card application", "500.00 USD", ""],
        ["Mailing of your physical card", "Waived", ""],
        ["Replacement of virtual card", (
          <>
            5.00 USD for the first update,<br />
            10.00 USD for each subsequent update
          </>
        ), ""],
      ])}

      {/* Table 2: Transactions */}
      {renderStandardTable("2. Transactions", [
        ["Default currency transaction", "Waived", ""],
        ["Non-default currency transaction", "1.20%", ""],
        ["ATM withdrawal fee", "2.00%", ""],
        ["Transaction fee", "1.00%", "Refers to the cryptocurrency conversion fee"],
        ["Small auth transaction fee", (
          <>
            • Waived for the first 5 small auth transactions per card each month<br />
            • 0.2 USD for each following small transaction
          </>
        ), "Refers to transactions less than or equal to 1.00 USD"],
        ["Declined transaction fee", (
          <>
            • Waived for the first 3 declined transactions per card each month<br />
            • 0.5 USD for each following declined transaction
          </>
        ), (
          <>
            <div className="text-xs sm:text-sm">
              Reasons for declined transactions include but are not limited to:<br />
              • Insufficient balance<br />
              • Frozen cards<br />
              • Lost cards<br />
              • Inputting incorrect card information
            </div>
          </>
        )],
      ])}

      {/* Table 3: Account */}
      {renderStandardTable("3. Account", [
        ["Account maintenance", "Waived", "Including monthly and annual fees"],
        ["Card cancellation", "2.00 USD per card", "Applicable to both virtual and physical cards"],
        ["", "Effective from October 25, 2024", ""],
      ])}

      {/* Table 4: BIN Types */}
      <div className="mb-4 sm:mb-8 overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse min-w-[320px] sm:min-w-[600px]">
          <thead>
            <tr style={{ backgroundColor: '#480455' }}>
              <th className="text-white py-2 px-2 sm:px-4 border text-center text-xs sm:text-base" style={{ borderColor: '#3a0344' }}></th>
              <th className="text-white py-2 px-2 sm:px-4 border text-center text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>HKD BIN</th>
              <th className="text-white py-2 px-2 sm:px-4 border text-center text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>USD BIN</th>
              <th className="text-white py-2 px-2 sm:px-4 border text-center text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="py-2 px-2 sm:px-4 border font-semibold text-xs sm:text-base bg-purple-100">Deposit Fee</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base">Free</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base">Free</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base"></td>
            </tr>
            <tr>
              <td className="py-2 px-2 sm:px-4 border font-semibold text-xs sm:text-base bg-purple-100">Balance Limit</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base">Unlimited</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base">Unlimited</td>
              <td className="py-2 px-2 sm:px-4 border text-center text-xs sm:text-base"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 5: Card Limits */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse min-w-[400px] sm:min-w-[700px]">
          <thead>
            <tr style={{ backgroundColor: '#480455' }}>
              <th className="text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 text-center border text-xs sm:text-base" colSpan="5" style={{ borderColor: '#3a0344' }}>
                Card Limits
              </th>
            </tr>
          </thead>
          <tbody>
            {renderLimitRow("Transaction Limit", "Per Transaction", "100,000 USD", "100,000 USD")}
            {renderLimitRow(null, "Daily Limit", "1,000,000 USD", "1,000,000 USD", true)}
            {renderLimitRow("ATM Withdrawal", "Times of Withdrawal", "5/Day | 75/Month", "5/Day | 75/Month")}
            {renderLimitRow(null, "Daily Limit", "80,000 HKD", "10,000 USD", true)}
            {renderLimitRow(null, "Monthly Limit", "1,600,000 HKD", "200,000 USD", true)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// === Utility Renderers ===
const renderStandardTable = (title, rows) => (
  <div className="mb-4 sm:mb-8 overflow-x-auto shadow-lg rounded-lg">
    <table className="w-full border-collapse min-w-[320px] sm:min-w-[600px]">
      <thead>
        <tr style={{ backgroundColor: '#480455' }}>
          <th className="text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 text-left border text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>
            {title}
          </th>
          <th className="text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 text-center border text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>
            Fee
          </th>
          <th className="text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 text-center border text-xs sm:text-base" style={{ borderColor: '#3a0344' }}>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, fee, desc], index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
            <td className="py-2 sm:py-3 px-2 sm:px-4 border text-xs sm:text-base bg-purple-100">{label}</td>
            <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border font-medium text-xs sm:text-base">{fee}</td>
            <td className="py-2 sm:py-3 px-2 sm:px-4 border text-xs sm:text-base">{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderLimitRow = (category, label, hkd, usd, noLabel = false) => (
  <tr className="bg-gray-50">
    {category && (
      <td className="py-2 sm:py-3 px-2 sm:px-4 border border-gray-200 font-semibold text-xs sm:text-base bg-purple-100" rowSpan={noLabel ? 1 : 2}>
        {category}
      </td>
    )}
    <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-base">{label}</td>
    <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-base">{hkd}</td>
    <td className="py-2 sm:py-3 px-2 sm:px-4 text-center border border-gray-200 text-xs sm:text-base">{usd}</td>
    <td className="py-2 sm:py-3 px-2 sm:px-4 border border-gray-200 text-xs sm:text-base"></td>
  </tr>
);

export default CardLimitations;




