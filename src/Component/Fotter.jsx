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
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 block mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border border-yellow-600 rounded-full px-6 py-3 text-white focus:outline-none focus:border-yellow-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-2">Contact back</label>
              <input
                type="email"
                className="w-full bg-transparent border border-yellow-600 rounded-full px-6 py-3 text-white focus:outline-none focus:border-yellow-400"
                placeholder="Your e-mail"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-2">Message</label>
              <input
                type="text"
                className="w-full bg-transparent border border-yellow-600 rounded-full px-6 py-3 text-white focus:outline-none focus:border-yellow-400"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-black border border-yellow-600 text-white rounded-full px-8 py-3 hover:bg-yellow-600 transition-colors duration-300">
                SEND
              </button>
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