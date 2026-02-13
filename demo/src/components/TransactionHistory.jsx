import React from 'react';
import { ArrowDownRight, ArrowUpRight, Clock } from 'lucide-react';

function TransactionHistory() {
  const transactions = [
    {
      id: '1',
      type: 'received',
      amount: '50.00',
      from: '0xABCD...1234',
      to: 'You',
      timestamp: '2024-02-13 14:30:00',
      status: 'completed',
      hash: '0x1a2b3c4d5e6f...'
    },
    {
      id: '2',
      type: 'sent',
      amount: '25.50',
      from: 'You',
      to: '0x5678...EFAB',
      timestamp: '2024-02-13 12:15:00',
      status: 'completed',
      hash: '0x9f8e7d6c5b4a...'
    },
    {
      id: '3',
      type: 'received',
      amount: '100.00',
      from: '0x9876...5432',
      to: 'You',
      timestamp: '2024-02-13 09:45:00',
      status: 'completed',
      hash: '0x3c4d5e6f7a8b...'
    },
    {
      id: '4',
      type: 'sent',
      amount: '15.00',
      from: 'You',
      to: '0xFEDC...BA98',
      timestamp: '2024-02-12 18:20:00',
      status: 'pending',
      hash: '0x7b8a9c0d1e2f...'
    },
    {
      id: '5',
      type: 'received',
      amount: '200.00',
      from: '0x2468...1357',
      to: 'You',
      timestamp: '2024-02-12 15:10:00',
      status: 'completed',
      hash: '0x5f6e7d8c9b0a...'
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    return badges[status] || badges.pending;
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Sent</p>
          <p className="text-2xl font-bold text-red-600">-40.50 IDIA</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Total Received</p>
          <p className="text-2xl font-bold text-green-600">+350.00 IDIA</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-1">Net Change</p>
          <p className="text-2xl font-bold text-idiacoin-primary">+309.50 IDIA</p>
        </div>
      </div>

      {/* Filter/Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by address or hash..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none">
          <option>All Transactions</option>
          <option>Sent</option>
          <option>Received</option>
        </select>
      </div>

      {/* Transaction List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From/To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {tx.type === 'received' ? (
                        <div className="bg-green-100 p-2 rounded-full">
                          <ArrowDownRight className="h-5 w-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="bg-red-100 p-2 rounded-full">
                          <ArrowUpRight className="h-5 w-5 text-red-600" />
                        </div>
                      )}
                      <span className="ml-3 font-medium capitalize">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-semibold ${
                      tx.type === 'received' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {tx.type === 'received' ? '+' : '-'}{tx.amount} IDIA
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">
                        {tx.type === 'received' ? tx.from : tx.to}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(tx.timestamp).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(tx.status)}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1-5 of 1,247 transactions</p>
        <div className="flex space-x-2">
          <button className="btn-secondary">Previous</button>
          <button className="btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
