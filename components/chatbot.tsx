'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SERVICE_KNOWLEDGE_BASE = {
  tools: {
    keywords: ['tools', 'software', 'use', 'technology', 'after effects', 'premiere', 'alight motion'],
    response: `We use industry-leading tools for our services:

**Video & Design Editing:**
• Adobe After Effects - Professional motion graphics and animation
• Adobe Premiere Pro - Video editing and production
• Alight Motion - Mobile video animation and effects

These tools help us create stunning visual content for your brand.`,
  },
  digitalMarketing: {
    keywords: ['digital marketing', 'marketing', 'content', 'logo', 'thumbnail', 'video editing'],
    response: `Our Digital Marketing Services include:

**1. Content Production** - Professional content creation for all platforms
**2. Logo Design** - Custom brand identity and professional logos
**3. Thumbnail Design** - Eye-catching thumbnails for maximum engagement
**4. Short Video Editing** - Professional editing using After Effects, Premiere Pro, and Alight Motion

All services are tailored to boost your online presence and engagement.`,
  },
  webDevelopment: {
    keywords: ['web development', 'website', 'mlm', 'school', 'hospital', 'management', 'system'],
    response: `Our Web Development Services include:

**1. MLM Website** - Complete MLM platform with commission tracking, downline management, and user portal
**2. School Management System** - Student database, attendance tracking, grades, and parent communication
**3. Hospital Management Website** - Appointment booking, patient records, staff management, and billing

All websites are modern, responsive, and production-ready.`,
  },
  pricing: {
    keywords: ['price', 'cost', 'pricing', 'package', 'monthly', 'yearly'],
    response: `We offer flexible SaaS pricing with both **monthly** and **yearly** packages:

• **Starter Plan** - Perfect for small businesses
• **Professional Plan** - Best for growing companies (Save 17% with yearly)
• **Enterprise Plan** - Complete solution for large organizations

Check our pricing section for detailed information and features.`,
  },
  general: {
    keywords: ['hello', 'hi', 'hey', 'help', 'support', 'question'],
    response: `Hello! 👋 I'm here to help. You can ask me about:

• Our **Digital Marketing** services (content, design, video editing)
• Our **Web Development** services (MLM, School, Hospital websites)
• **Tools and technology** we use
• **Pricing** and plans
• Or any other questions about our services!

How can I assist you today?`,
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'support'],
    response: `Great question! You can reach out to us through:

• **Email** - Contact our team for inquiries
• **Phone** - Call us for quick support
• **Contact Form** - Fill out the form on our website
• **Social Media** - Connect with us on our social channels

Check the footer for all contact details!`,
  },
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello! 👋 I'm BrandMatrix's AI Assistant. Ask me about our services, tools, pricing, or anything else you'd like to know!`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [, knowledge] of Object.entries(SERVICE_KNOWLEDGE_BASE)) {
      if (knowledge.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        return knowledge.response;
      }
    }

    return `Thanks for your question! I'm familiar with our Digital Marketing services (content production, logo design, thumbnail design, short video editing), Web Development services (MLM websites, School Management, Hospital Management), and our tools (After Effects, Premiere Pro, Alight Motion). Feel free to ask about any of these topics!`;
  };

  const fetchBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Chat endpoint returned an error.');
      }

      const data = await response.json();
      return data?.text ? String(data.text) : findBestResponse(userMessage);
    } catch (error) {
      return findBestResponse(userMessage);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const botText = await fetchBotResponse(inputValue);

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: botText,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl z-40 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[32rem] bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-40"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-t-2xl">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <MessageCircle size={20} />
                BrandMatrix Assistant
              </h3>
              <p className="text-white/80 text-xs">Ask about our services</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2.5 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-secondary text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="bg-secondary text-foreground px-4 py-2.5 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="text-xs text-foreground/60">
                💡 Ask about services, tools, pricing, or anything else!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
