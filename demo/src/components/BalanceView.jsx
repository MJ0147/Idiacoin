import React from 'react';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';

function BalanceView() {
  const [showBalance, setShowBalance] = React.useState(true);
  
  const balance = {
    total: '1,234.56',
    available: '1,100.00',
    locked: '134.56',
    usdValue: '2,469.12'
  };

  return (
    <div className="space-y-6">
      {/* Main Balance Card */}
      <div className="bg-gradient-to-br from-idiacoin-primary to-idiacoin-dark text-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm opacity-90 mb-1">Total Balance</p>
            <div className="flex items-center space-x-3">
              {showBalance ? (
                <h2 className="text-4xl font-bold">{balance.total} IDIA</h2>
              ) : (
                <h2 className="text-4xl font-bold">••••••</h2>
              )}
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {showBalance && (
              <p className="text-sm opacity-90 mt-2">≈ ${balance.usdValue} USD</p>
            )}
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Balance Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Available Balance</span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{balance.available} IDIA</p>
          <p className="text-sm text-gray-500 mt-1">Ready to transfer or use</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Locked Balance</span>
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{balance.locked} IDIA</p>
          <p className="text-sm text-gray-500 mt-1">In pending transactions</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">24h Change</span>
            <span className="text-green-600 font-semibold">+5.23%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Transactions</span>
            <span className="font-semibold">1,247</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Last Activity</span>
            <span className="font-semibold">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceView;
