import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  assets : [

    {
      id : 1,
      logo : '/btc.png',
      name : 'Bitcoin',
      symbol : 'BTC',
      price : 30000,
      change1h : 0.5,
      change24h : -0.3,
      change7d : 1.2,
      marketCap : 600000000,
      volume24h : 30000000,
      supply : 19000000,
      maxSupply : 21000000,
      chart : '/btc-chart.png',
    },

    {
      id : 2,
      logo : '/eth.png',
      name : 'Ethereum',
      symbol : 'ETH',
      price : 2000,
      change1h : -0.2,
      change24h : 1.3,
      change7d : -0.8,
      marketCap : 300000000,
      volume24h : 20000000,
      supply : 120000000,
      maxSupply : null,
      chart : '/eth-chart.png',
    },

    {
      id : 3,
      logo : '/bnb.png',
      name : 'BNB',
      symbol : 'BNB',
      price : 250,
      change1h : 0.1,
      change24h : -0.6,
      change7d : 0.4,
      marketCap : 40000000,
      volume24h : 8000000,
      supply : 160000000,
      maxSupply : 200000000,
      chart : '/bnb-chart.png',
    },

    {
      id : 4,
      logo : '/xrp.png',
      name : 'Ripple',
      symbol : 'XRP',
      price : 0.55,
      change1h : -0.1,
      change24h : 0.8,
      change7d : -1.0,
      marketCap : 25000000,
      volume24h : 3000000,
      supply : 45000000000,
      maxSupply : 100000000000,
      chart : '/xrp-chart.png',
    },
    
    {
      id : 5,
      logo : '/ada.png',
      name : 'Cardano',
      symbol : 'ADA',
      price : 0.38,
      change1h : 0.2,
      change24h : -0.4,
      change7d : 0.9,
      marketCap : 13000000,
      volume24h : 1500000,
      supply : 34000000000,
      maxSupply : 45000000000,
      chart : '/ada-chart.png',
    },

  ],
};

const getRandomDelta = () => parseFloat((Math.random() * 2 - 1).toFixed(2));

const cryptoSlice = createSlice({
  
  name : 'crypto',
  
  initialState,
  
  reducers : {
    
    updatePrices : (state) => {
      state.assets.forEach(asset => {
        const priceChange = getRandomDelta();
        asset.price = parseFloat((asset.price * (1 + priceChange / 100)).toFixed(2));
        asset.change1h = getRandomDelta();
        asset.change24h = getRandomDelta();
        asset.change7d = getRandomDelta();
        asset.volume24h = asset.volume24h + Math.floor(Math.random() * 10000 - 5000);
      });
    },
    
  },
});

export const { updatePrices } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;