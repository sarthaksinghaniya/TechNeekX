'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, MessageCircle, Smile, Image as ImageIcon, File, Paperclip, ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import emoji picker to avoid SSR issues
const EmojiPicker = dynamic(
  () => import('emoji-picker-react'),
  { ssr: false }
);

interface Media {
  type: 'image' | 'file';
  url: string;
  name: string;
  size: number;
  mimeType: string;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'read';
  reactions?: string[];
  isEdited?: boolean;
  media?: Media;
}

// Knowledge base for TechNeekX
const TECHNEEKX_KNOWLEDGE = {
  greetings: [
    "👋 Hello! I'm TechNeekX Assistant, your AI guide to TechNeekX's innovative solutions. How can I help you today?",
    "🌟 Hi there! I'm here to assist you with TechNeekX's cutting-edge technology services. What would you like to explore?",
    "💫 Welcome! I'm TechNeekX Assistant, ready to showcase our digital excellence and creative solutions!"
  ],
  about: [
    "🚀 TechNeekX is a forward-thinking technology company that transforms innovative ideas into powerful digital solutions. We specialize in AI/ML, web development, mobile apps, and digital transformation.",
    "💡 We're a team of passionate technologists and creative minds dedicated to pushing the boundaries of what's possible in the digital landscape. From AI-powered solutions to stunning web experiences, we do it all.",
    "✨ At TechNeekX, we don't just build technology – we craft experiences that inspire, engage, and deliver measurable results. Our expertise spans across cutting-edge tech stacks and innovative methodologies."
  ],
  services: [
    "🛠️ Our comprehensive services include: \n• 🤖 AI/ML Development & Integration\n• 🌐 Custom Web & Mobile Applications\n• 🎨 UI/UX Design & Branding\n• ☁️ Cloud Solutions & DevOps\n• 📊 Data Analytics & Business Intelligence\n• 🚀 Digital Transformation Consulting",
    "🎨 We deliver end-to-end digital solutions: from concept ideation and design to development, deployment, and ongoing optimization. Our tech stack includes React, Next.js, Python, TensorFlow, and more.",
    "⚡ Whether you need a startup MVP, enterprise solution, or AI integration, we provide scalable, secure, and innovative technology solutions tailored to your specific needs."
  ],
  team: [
    "👥 Meet our core team:\n\n1. Sarthak Singhaniya - Founder, System Architect, AI/ML Engineer\n2. Nikhil Yadav - Design Lead, UI/UX Specialist\n3. Hardik Talwar - Business & Frontend\n4. Anshuman Soni - Marketing & Media\n\nEach member brings unique expertise and passion! 🚀",
    "🌟 Our compact but powerful team combines technical excellence with creative innovation, ensuring we deliver solutions that are both cutting-edge and user-centric.",
    "💻 The TechNeekX team is committed to continuous learning, innovation, and delivering exceptional results that exceed client expectations."
  ],
  contact: [
    "📧 Get in touch with us:\n📧 Email: teamtechneekx.netlify.app\n📱 WhatsApp: +91 6387860126\n📞 Call: +91 63878 60126\n🌐 Website: techneekx.com (coming soon!)",
    "💌 Reach out through our contact form or email us directly at teamtechneekx.netlify.app. We typically respond within 24 hours!",
    "📱 For project inquiries, collaborations, or just to say hello, contact us at teamtechneekx.netlify.app or message us on WhatsApp."
  ],
  projects: [
    "💼 Explore our innovative projects:\n\n🏥 Hospital Pulse AI - Healthcare predictive analytics with 92% accuracy\n🤖 Reviber - AI-powered idea generation assistant\n🌍 HANU-YOUTH - Global youth empowerment platform\n🗺️ Path Sarthi - Career development with LinkedIn integration\n📅 Hanu-Planner - Real-time project management tool",
    "🎯 Our portfolio showcases cutting-edge solutions across healthcare AI, productivity tools, education platforms, and more. Each project demonstrates our commitment to innovation and excellence.",
    "✨ From AI-powered healthcare systems to intuitive productivity tools, our projects solve real-world problems with elegant, scalable solutions."
  ],
  teamMembers: {
    'sarthak': {
      name: 'Sarthak Singhaniya',
      role: 'CO-FOUNDER, CIO, System Architect, AI/ML Engineer',
      bio: '🤖 Visionary leader overseeing system design, team dynamics, and AI/ML strategy. Ensures technical excellence and drives team growth with innovative solutions.',
      funFact: '🚀 Passionate about AI research and building scalable systems that make a real impact.'
    },
    'nikhil': {
      name: 'Nikhil Yadav',
      role: 'CCO, Design Lead, UI/UX Specialist',
      bio: '🎨 Creative genius connecting frontend and backend with clean, maintainable code and exceptional problem-solving mindset.',
      funFact: '✨ Expert in creating stunning UI designs that users love and remember.'
    },
    'hardik': {
      name: 'Hardik Talwar',
      role: 'Business & Frontend',
      bio: '🤝 Bridges business strategy with frontend execution to ship fast, polished experiences.',
      funFact: '⚡ Loves turning ideas into smooth, production-ready UI.'
    },
    'anshuman': {
      name: 'Anshuman Soni',
      role: 'Marketing & Media',
      bio: '📣 Drives growth, brand storytelling, and community reach to scale impact.',
      funFact: '🎯 Enjoys building distribution that compounds.'
    },
  },
  default: [
    "🤔 I'm not sure I understand. Could you rephrase that?",
    "🧠 I'm still learning! Could you try asking something else?",
    "💡 I'm not sure about that. Maybe I can help with something else related to TechNeekX?"
  ]
};

const Chatbot = () => {
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: TECHNEEKX_KNOWLEDGE.greetings[0],
      isBot: true,
      timestamp: new Date(),
      status: 'read',
      reactions: []
    }
  ]);

  // Handle file selection and validation
  const handleFiles = (files: File[]) => {
    const validFiles: File[] = [];
    const newPreviewUrls: Record<string, string> = {};
    
    Array.from(files).forEach(file => {
      // Check file type
      const validTypes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain'
      ];
      
      // Check file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        alert(`File type not supported: ${file.name}`);
        return;
      }
      
      if (file.size > maxSize) {
        alert(`File too large (max 5MB): ${file.name}`);
        return;
      }
      
      validFiles.push(file);
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        newPreviewUrls[file.name] = URL.createObjectURL(file);
      }
    });
    
    setSelectedFiles(prev => [...prev, ...validFiles]);
    setPreviewUrls(prev => ({ ...prev, ...newPreviewUrls }));
  };

  // Remove a file from selection
  const removeFile = (index: number) => {
    const file = selectedFiles[index];
    if (file && previewUrls[file.name]) {
      URL.revokeObjectURL(previewUrls[file.name]);
      const newPreviewUrls = { ...previewUrls };
      delete newPreviewUrls[file.name];
      setPreviewUrls(newPreviewUrls);
    }
    
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  // Clear all selected files
  const clearAllFiles = () => {
    // Clean up object URLs
    Object.values(previewUrls).forEach(url => URL.revokeObjectURL(url));
    setPreviewUrls({});
    setSelectedFiles([]);
  };
  
  // Handle file selection via input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
      // Reset the input value to allow selecting the same file again
      if (e.target) e.target.value = '';
    }
  };
  
  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  // Handle drag leave
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  // Handle drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get file icon based on file type
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return <File className="w-5 h-5 text-red-500" />;
      case 'doc':
      case 'docx':
        return <File className="w-5 h-5 text-blue-500" />;
      case 'xls':
      case 'xlsx':
        return <File className="w-5 h-5 text-green-600" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <ImageIcon className="w-5 h-5 text-purple-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  // Scroll to a specific section of the page
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      element.classList.add('highlight-section');
      setTimeout(() => {
        element.classList.remove('highlight-section');
      }, 2000);
    }
  };

  // Get appropriate response based on user input
  const getBotResponse = (userInput: string): { text: string; action?: () => void } => {
    const input = userInput.toLowerCase().trim();
    const randomResponse = (responses: string[]) => 
      responses[Math.floor(Math.random() * responses.length)];
    
    // Check for team member queries
    const teamMemberMatch = input.match(/(sarthak|nikhil|hardik|anshuman)/i);
    if (teamMemberMatch) {
      const memberKey = teamMemberMatch[0].toLowerCase();
      const member = TECHNEEKX_KNOWLEDGE.teamMembers[memberKey as keyof typeof TECHNEEKX_KNOWLEDGE.teamMembers];
      if (member) {
        return {
          text: `👤 **${member.name}**\n💼 ${member.role}\n\n${member.bio}\n\n✨ Fun Fact: ${member.funFact}`,
          action: () => scrollToSection('team')
        };
      }
    }
    
    // Check for greetings
    if (/^(hi|hello|hey|greetings?|yo)/i.test(input)) {
      return { text: randomResponse(TECHNEEKX_KNOWLEDGE.greetings) };
    }
    
    // Check for about queries
    if (/(what.*techneekx|who.*techneekx|about.*techneekx|techneekx.*about)/i.test(input)) {
      return {
        text: randomResponse(TECHNEEKX_KNOWLEDGE.about),
        action: () => scrollToSection('about')
      };
    }
    
    // Check for AI/ML specific queries
    if (/(ai|ml|artificial intelligence|machine learning|tensorflow|python)/i.test(input)) {
      return {
        text: "🤖 TechNeekX specializes in cutting-edge AI/ML solutions! We offer:\n\n• Predictive Analytics & Forecasting\n• Natural Language Processing\n• Computer Vision Solutions\n• Custom Model Development\n• AI Integration & Deployment\n• Data Science & Analytics\n\nOur Hospital Pulse AI project demonstrates our expertise with 92% accuracy in healthcare predictions! 🏥\n\nWould you like to know more about our AI capabilities or specific projects?",
        action: () => scrollToSection('projects')
      };
    }
    
    // Check for services queries
    if (/(service|what.*do|offer|provide|can you|help with)/i.test(input)) {
      return {
        text: randomResponse(TECHNEEKX_KNOWLEDGE.services),
        action: () => scrollToSection('services')
      };
    }
    
    // Check for team queries
    if (/(team|who.*work|developer|designer|staff|member|colleague)/i.test(input)) {
      // If asking about a specific role
      const roleMatch = input.match(/(developer|designer|manager|marketer|frontend|backend|full stack)/i);
      if (roleMatch) {
        const role = roleMatch[0].toLowerCase();
        const members = Object.values(TECHNEEKX_KNOWLEDGE.teamMembers).filter(member => 
          member.role.toLowerCase().includes(role)
        );
        
        if (members.length > 0) {
          const memberList = members.map(m => `• ${m.name} - ${m.role}`).join('\n');
          return {
            text: `👥 Here are our ${role} team members:\n\n${memberList}\n\nAsk me about any of them to learn more!`,
            action: () => scrollToSection('team')
          };
        }
      }
      
      return {
        text: randomResponse(TECHNEEKX_KNOWLEDGE.team),
        action: () => scrollToSection('team')
      };
    }
    
    // Check for contact queries
    if (/(contact|email|phone|number|reach|get in touch)/i.test(input)) {
      return {
        text: randomResponse(TECHNEEKX_KNOWLEDGE.contact),
        action: () => scrollToSection('contact')
      };
    }
    
    // Check for Hospital Pulse AI specific queries
    if (/(hospital pulse|healthcare ai|medical ai|hospital management)/i.test(input)) {
      return {
        text: "🏥 **Hospital Pulse AI** is our flagship healthcare solution!\n\n🎯 **Key Features:**\n• Predicts Emergency Department surges 6 hours in advance\n• 92% accuracy in forecasting operational stress\n• Real-time dashboard for hospital administrators\n• Staff workload prediction to prevent burnout\n• Interpretable AI using SHAP values\n• Reduced ER crowding by 35% through proactive recommendations\n\n🛠️ **Tech Stack:** Python, TensorFlow, Scikit-learn, React, Node.js, MongoDB, Docker\n\nThis project demonstrates our expertise in building impactful AI solutions that save lives and improve healthcare efficiency! ⚕️",
        action: () => scrollToSection('projects')
      };
    }
    
    // Check for projects/portfolio queries
    if (/(project|portfolio|work|showcase|example|case study)/i.test(input)) {
      return {
        text: randomResponse(TECHNEEKX_KNOWLEDGE.projects),
        action: () => scrollToSection('projects')
      };
    }
    
    // Default response
    return {
      text: TECHNEEKX_KNOWLEDGE.default[
        Math.floor(Math.random() * TECHNEEKX_KNOWLEDGE.default.length)
      ]
    };
  };

  // Handle sending message
  const handleSendMessage = () => {
    if ((!inputMessage.trim() && selectedFiles.length === 0) || isTyping) return;

    const userMessage = inputMessage.trim();
    const newMessages: Message[] = [];
    
    // Add user's text message if exists
    if (userMessage) {
      newMessages.push({
        id: Date.now(),
        text: userMessage,
        isBot: false,
        timestamp: new Date(),
        status: 'sent'
      });
      
      // Clear input after sending
      setInputMessage('');
    }

    // Add file messages if any
    if (selectedFiles.length > 0) {
      selectedFiles.forEach(file => {
        newMessages.push({
          id: Date.now() + Math.random(),
          text: `File: ${file.name}`,
          isBot: false,
          timestamp: new Date(),
          status: 'sending',
          media: {
            type: file.type.startsWith('image/') ? 'image' : 'file',
            url: URL.createObjectURL(file),
            name: file.name,
            size: file.size,
            mimeType: file.type
          }
        });
      });
      
      // Clear files after sending
      setSelectedFiles([]);
      setPreviewUrls({});
    }

    // Update messages with user's message
    setMessages(prev => [...prev, ...newMessages]);
    setShowEmojiPicker(false);

    // Only show typing indicator for text messages
    if (userMessage) {
      setIsTyping(true);
      
      // Simulate typing delay
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        
        setMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            text: botResponse.text,
            isBot: true,
            timestamp: new Date(),
            status: 'read'
          }
        ]);
        
        // Execute any associated action (like scrolling)
        if (botResponse.action) {
          // Small delay before scrolling to ensure message is rendered
          setTimeout(() => botResponse.action!(), 100);
        }
        
        setIsTyping(false);
      }, 1000);
    }
  };

  // Handle key press in input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format message with proper line breaks, links, and emojis
  const formatMessage = (text: string) => {
    if (!text) return '';
    
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {part}
          </a>
        );
      }
      return part.split('\n').map((line, j) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < part.split('\n').length - 1 && <br />}
        </span>
      ));
    });
  };

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      // Clean up preview URLs
      Object.values(previewUrls).forEach(url => URL.revokeObjectURL(url));
      
      // Clean up any message media URLs
      messages.forEach(msg => {
        if (msg.media && msg.media.url.startsWith('blob:')) {
          URL.revokeObjectURL(msg.media.url);
        }
      });
    };
  }, [previewUrls, messages]);

  // Scroll to bottom when messages or selected files change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedFiles]);

  // Handle click outside to close popups
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg flex items-center justify-center focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{ height: '600px' }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <h3 className="font-semibold">TechNeekX Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-tr-none'
                    }`}
                  >
                    {message.media && (
                      <div className="mb-2 rounded-lg overflow-hidden">
                        {message.media.type === 'image' ? (
                          <img
                            src={message.media.url}
                            alt={message.media.name}
                            className="max-w-full h-auto rounded-lg"
                          />
                        ) : (
                          <a
                            href={message.media.url}
                            download={message.media.name}
                            className="flex items-center p-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            <File className="w-5 h-5 mr-2" />
                            <div className="truncate flex-1">
                              <div className="font-medium text-sm">{message.media.name}</div>
                              <div className="text-xs text-gray-500">
                                {formatFileSize(message.media.size)}
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
                          </a>
                        )}
                      </div>
                    )}
                    <div className="text-sm">{formatMessage(message.text)}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {message.status === 'sending' && (
                        <span className="text-xs opacity-70">Sending...</span>
                      )}
                      {message.status === 'sent' && (
                        <span className="text-xs opacity-70">✓</span>
                      )}
                      {message.status === 'read' && (
                        <span className="text-xs opacity-70">✓✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-white border-t border-gray-100">
              {/* File upload preview */}
              {selectedFiles.length > 0 && (
                <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
                    </span>
                    <button
                      type="button"
                      onClick={clearAllFiles}
                      className="text-xs text-red-500 hover:text-red-600"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-white rounded-md border border-gray-200"
                      >
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          {file.type.startsWith('image/') ? (
                            <img
                              src={previewUrls[file.name]}
                              alt={file.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                              {getFileIcon(file.name)}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-800 truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isDragging ? 'Drop files here...' : 'Type your message...'}
                    className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  />
                  {isDragging && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-full border-2 border-dashed border-purple-500 pointer-events-none">
                      <span className="text-purple-500 font-medium">Drop files here</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-500 hover:text-purple-500 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Paperclip size={20} />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                    />
                  </button>
                  
                  <div className="relative" ref={emojiPickerRef}>
                    <button
                      type="button"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-2 text-gray-500 hover:text-purple-500 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Smile size={20} />
                    </button>
                    
                    {showEmojiPicker && (
                      <div className="absolute bottom-12 right-0">
                        <EmojiPicker
                          onEmojiClick={(emojiData) => {
                            setInputMessage(prev => prev + emojiData.emoji);
                            setShowEmojiPicker(false);
                          }}
                          width={300}
                          height={350}
                        />
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() && selectedFiles.length === 0}
                    className="p-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { text: 'About Us', query: 'Tell me about TechNeekX', section: 'about' },
                  { text: 'AI/ML Services', query: 'What AI services do you offer?', section: 'services' },
                  { text: 'Our Team', query: 'Who works at TechNeekX?', section: 'team' },
                  { text: 'Hospital Pulse AI', query: 'Tell me about Hospital Pulse AI', section: 'projects' },
                  { text: 'Contact', query: 'How can I contact you?', section: 'contact' },
                  { text: 'All Projects', query: 'Show me your projects', section: 'projects' }
                ].map((action) => (
                  <motion.button
                    key={action.text}
                    onClick={() => {
                      setInputMessage(action.query);
                      // Auto-send the message and scroll to section
                      setTimeout(() => {
                        handleSendMessage();
                        if (action.section) {
                          setTimeout(() => scrollToSection(action.section), 500);
                        }
                      }, 100);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
