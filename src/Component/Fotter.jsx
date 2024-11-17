import React, { useState } from 'react';

const ContactAndFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Questions Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">HAVE</h1>
            <h1 className="text-6xl font-bold text-white mb-4">QUESTIONS?</h1>
            <p className="text-gray-400 mb-8">WE WILL BE HAPPY TO ASSIST YOU</p>
            
            {/* Logo */}
            <div className="w-full h-full relative">
              <img src={"https://m-power.group/assets/images/m%20logo.png"} alt="logo"/>
            </div>
          </div>

          {/* Contact Form */}
{/* Contact Form */}
<div className="space-y-6 max-w-2xl">
  <div className="relative">
    
    
  </div>

  

 {/* Contact Form */}
<div className="max-w-4xl mx-auto p-6">
  {/* Labels Row */}
  <div className="grid grid-cols-2 gap-8 mb-2">
    <label className="text-white text-sm">Name</label>
    <label className="text-white text-sm">Contact back</label>
  </div>
  
  {/* Input Fields Row */}
  <div className="grid grid-cols-2 gap-8 mb-6">
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </span>
      <input
        type="text"
        className="w-full bg-transparent border border-yellow-600 rounded-full pl-12 pr-6 py-3 text-gray-400 focus:outline-none"
        placeholder="Your Name"
      />
    </div>
    
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </span>
      <input
        type="email"
        className="w-full bg-transparent border border-yellow-600 rounded-full pl-12 pr-6 py-3 text-gray-400 focus:outline-none"
        placeholder="Your e-mail"
      />
    </div>
  </div>

  {/* Message Label */}
  <label className="text-white text-sm block mb-2">Message</label>
  
  {/* Message Input */}
  <div className="relative mb-6">
    <span className="absolute left-4 top-1/2 -translate-y-1/2">
      <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
      </svg>
    </span>
    <input
      type="text"
      className="w-full bg-transparent border border-yellow-600 rounded-full pl-12 pr-6 py-3 text-gray-400 focus:outline-none"
      placeholder="Message"
    />
  </div>

  {/* Send Button */}
  <div className="flex justify-end">
    <button className="relative w-32 h-32 rounded-full bg-black border border-yellow-600 group overflow-hidden">
      <span className="text-white text-lg relative z-10">SEND</span>
      <div className="absolute inset-0 bg-yellow-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="absolute inset-0 border-4 border-yellow-600/30 rounded-full blur-md"></div>
    </button>
  </div>
</div>

 
</div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <p className="text-sm text-gray-400 max-w-xs">
              THE FIRST FULL-SCALE 
              AI-POWERED FINANCIAL <span className="text-yellow-500">ECOSYSTEM</span>. WE 
              PROVIDE AI SOLUTIONS FOR INVESTMENT, 
              MANAGEMENT AND GROWTH.
            </p>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">CONTACT US</h3>
            <a 
              href="mailto:contact-us@m-power.ai" 
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              contact-us@m-power.ai
            </a>
          </div>

          {/* Follow Us */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">FOLLOW US</h3>
            <a 
              href="https://telegram.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              Telegram
            </a>
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Solution', 'Why AI', 'Growth', 'Leadership', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 M-Power • All Rights Reserved</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;