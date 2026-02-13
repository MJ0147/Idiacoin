import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';

function AzaChat({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "👋 Hello! I'm Aza, your Idiacoin AI assistant. I'm here to help you navigate the blockchain, answer questions, and make your crypto experience seamless. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: '📊', label: 'Check Balance', query: 'What is my current balance?' },
    { icon: '💸', label: 'Send Coins', query: 'How do I send coins?' },
    { icon: '📈', label: 'Market Info', query: 'What is the current IDIA price?' },
    { icon: '🔐', label: 'Security Tips', query: 'How do I keep my wallet secure?' }
  ];

  const getAzaResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('balance')) {
      return "Your current balance is 1,234.56 IDIA (≈ $2,469.12 USD). You have 1,100.00 IDIA available and 134.56 IDIA locked in pending transactions. Would you like to see a detailed breakdown?";
    } else if (lowerMessage.includes('send') || lowerMessage.includes('transfer')) {
      return "To send Idiacoin, go to the Transfer tab, enter the recipient's address, the amount you want to send, and an optional memo. The network fee is minimal at just 0.001 IDIA. Would you like me to guide you through the process?";
    } else if (lowerMessage.includes('price') || lowerMessage.includes('market')) {
      return "The current IDIA price is $2.00 USD with a 24-hour change of +5.23%. The market is looking strong! Would you like to see historical price data or set up price alerts?";
    } else if (lowerMessage.includes('security') || lowerMessage.includes('safe')) {
      return "Here are key security tips: 1) Never share your private keys or seed phrase, 2) Enable two-factor authentication, 3) Use a hardware wallet for large amounts, 4) Verify addresses carefully before sending, and 5) Keep your software updated. Is there a specific security concern I can help with?";
    } else if (lowerMessage.includes('transaction') || lowerMessage.includes('history')) {
      return "You can view your complete transaction history in the History tab. Your recent activity shows 1,247 total transactions with a net change of +309.50 IDIA. Would you like me to filter specific transactions for you?";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return "I can help you with: ✓ Checking balances and transaction history, ✓ Guiding you through transfers, ✓ Providing market information, ✓ Explaining blockchain concepts, ✓ Offering security best practices, ✓ Troubleshooting common issues. What would you like to know more about?";
    } else if (lowerMessage.includes('ton') || lowerMessage.includes('blockchain')) {
      return "Idiacoin is built on The Open Network (TON), a highly scalable blockchain platform capable of processing millions of transactions per second. TON uses a unique multi-blockchain architecture with instant finality and low fees. It's designed to be the infrastructure for Web3. Want to learn more about TON's technology?";
    } else if (lowerMessage.includes('fee')) {
      return "Idiacoin transaction fees are extremely low, typically just 0.001 IDIA per transaction. This is one of the benefits of using the TON blockchain, which is designed for high throughput and minimal costs. Would you like to see your fee history?";
    } else {
      return "I'm here to help! While I'm a demo AI assistant, I can provide information about balances, transfers, transaction history, security, and general blockchain topics. Try asking me about your balance, how to send coins, or security best practices. What would you like to know?";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getAzaResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (query) => {
    setInputValue(query);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-[600px]">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-idiacoin-primary to-idiacoin-dark text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center">
              Aza AI Assistant
              <Sparkles className="h-4 w-4 ml-2" />
            </h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Quick Actions */}
      <div className="p-3 bg-gray-50 border-b border-gray-200">
        <p className="text-xs text-gray-600 mb-2 font-medium">Quick Actions:</p>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.query)}
              className="text-left p-2 bg-white border border-gray-200 rounded-lg hover:border-idiacoin-primary hover:bg-blue-50 transition-colors text-sm"
            >
              <span className="mr-2">{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[85%] ${
              message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'bot' 
                  ? 'bg-idiacoin-primary text-white' 
                  : 'bg-gray-300 text-gray-700'
              }`}>
                {message.type === 'bot' ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </div>
              <div>
                <div className={`rounded-lg p-3 ${
                  message.type === 'bot'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-idiacoin-primary text-white'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[85%]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-idiacoin-primary text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Aza anything..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-idiacoin-primary focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-idiacoin-primary hover:bg-idiacoin-dark text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Aza is an AI assistant. Responses are simulated for demo purposes.
        </p>
      </form>
    </div>
  );
}

export default AzaChat;
