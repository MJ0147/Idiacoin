import React, { useState } from 'react';
import { Wallet, ArrowRightLeft, History, MessageSquare, Coins } from 'lucide-react';
import BalanceView from './components/BalanceView';
import TransferCoins from './components/TransferCoins';
import TransactionHistory from './components/TransactionHistory';
import AzaChat from './components/AzaChat';

function App() {
  const [activeTab, setActiveTab] = useState('balance');
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Coins className="h-8 w-8 text-idiacoin-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Idiacoin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Connected: 0x1234...5678</span>
              <button className="btn-primary">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Feature Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <nav className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('balance')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'balance'
                      ? 'text-idiacoin-primary border-b-2 border-idiacoin-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Wallet className="inline-block mr-2 h-5 w-5" />
                  Balance
                </button>
                <button
                  onClick={() => setActiveTab('transfer')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'transfer'
                      ? 'text-idiacoin-primary border-b-2 border-idiacoin-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ArrowRightLeft className="inline-block mr-2 h-5 w-5" />
                  Transfer
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'history'
                      ? 'text-idiacoin-primary border-b-2 border-idiacoin-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <History className="inline-block mr-2 h-5 w-5" />
                  History
                </button>
              </nav>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'balance' && <BalanceView />}
                {activeTab === 'transfer' && <TransferCoins />}
                {activeTab === 'history' && <TransactionHistory />}
              </div>
            </div>

            {/* Features Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">About Idiacoin</h2>
              <p className="text-gray-700 mb-4">
                Idiacoin is built on The Open Network (TON), a fast, secure, and scalable blockchain
                designed to handle millions of transactions per second. Experience the future of
                decentralized finance with our user-friendly interface.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-idiacoin-primary mb-2">⚡ Fast Transactions</h3>
                  <p className="text-sm text-gray-600">Process transactions in seconds, not minutes</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-idiacoin-primary mb-2">🔒 Secure</h3>
                  <p className="text-sm text-gray-600">Military-grade encryption protects your assets</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-idiacoin-primary mb-2">💰 Low Fees</h3>
                  <p className="text-sm text-gray-600">Minimal transaction costs for maximum value</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aza AI Chat Sidebar */}
          {showChat && (
            <div className="lg:w-96">
              <AzaChat onClose={() => setShowChat(false)} />
            </div>
          )}
        </div>

        {/* Floating Chat Toggle (for mobile) */}
        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-6 right-6 bg-idiacoin-primary hover:bg-idiacoin-dark text-white rounded-full p-4 shadow-lg transition-colors lg:hidden"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
