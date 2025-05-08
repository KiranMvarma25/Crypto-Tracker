import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updatePrices } from '../features/cryptoSlice';
import './CryptoTable.css';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);

  useEffect(() => {

    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 1500);

    return () => clearInterval(interval);
  
  }, [dispatch]);

  return (
    <div className="table-container">
      
      <table className="crypto-table">
        
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>

        <tbody>
          {
            assets.map((asset, index) => (
              <tr key={asset.id}>
                <td>{index + 1}</td>
                <td><img src={asset.logo} alt={asset.symbol} className="logo" /></td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>{asset.price.toFixed(2)}</td>
                <td className={asset.change1h >= 0 ? 'green' : 'red'}>{asset.change1h}%</td>
                <td className={asset.change24h >= 0 ? 'green' : 'red'}>{asset.change24h}%</td>
                <td className={asset.change7d >= 0 ? 'green' : 'red'}>{asset.change7d}%</td>
                <td>${asset.marketCap.toLocaleString()}</td>
                <td>${asset.volume24h.toLocaleString()}</td>
                <td>{asset.supply.toLocaleString()}</td>
                <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
                <td><img src={asset.chart} alt="chart" className="chart" /></td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </div>
  );
};

export default CryptoTable;