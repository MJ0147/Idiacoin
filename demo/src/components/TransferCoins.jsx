import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

function TransferCoins() {
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    memo: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate transaction
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus(null);
        setFormData({ recipient: '', amount: '', memo: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">Demo Mode</p>
          <p>This is a demonstration interface. No real transactions will be processed.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Address
          </label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="0x1234567890abcdef1234567890abcdef12345678"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount (IDIA)
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="text-gray-500 font-medium">IDIA</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">Available: 1,100.00 IDIA</p>
        </div>

        <div>
          <label htmlFor="memo" className="block text-sm font-medium text-gray-700 mb-2">
            Memo (Optional)
          </label>
          <textarea
            id="memo"
            name="memo"
            value={formData.memo}
            onChange={handleChange}
            placeholder="Add a note for this transaction..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* Transaction Summary */}
        {formData.amount && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-gray-900 mb-3">Transaction Summary</h4>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold">{formData.amount} IDIA</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Network Fee</span>
              <span className="font-semibold">0.001 IDIA</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-idiacoin-primary">
                  {(parseFloat(formData.amount) + 0.001).toFixed(3)} IDIA
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Status Messages */}
        {status === 'processing' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600"></div>
            <p className="text-yellow-800">Processing transaction...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-green-800 font-semibold">Transaction successful!</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'processing'}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
          <span>{status === 'processing' ? 'Processing...' : 'Send Transaction'}</span>
        </button>
      </form>
    </div>
  );
}

export default TransferCoins;
