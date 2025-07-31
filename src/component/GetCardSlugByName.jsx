// utils/getCardSlugByName.js
export const getCardSlugByName = (cardName = "") => {
  const map = {
    "CashApp": "cash-app",
    "Coinbase": "coinbase",
    "Paypal": "paypal",
    "Binance": "binance",
    "Robinhood": "robinhood",
    "TrustWallet": "trustwallet",
  };

  console.log(cardName,"here ")

  for (const key in map) {
    if (cardName.toLowerCase().includes(key.toLowerCase())) {
      return map[key];
    }
  }

  return null;
};
