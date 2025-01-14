import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

const Donation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        transactionId: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to your backend
        console.log('Form Submitted:', formData);
        setSubmitted(true);
    };
    
    const closeModal = () => {
        setSubmitted(false);
      };
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fef6e4] to-[#f7e6c7] py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#F4A261] text-white text-center py-6 px-4">
            <h1 className="text-3xl font-bold">আমাদের মন্দিরকে সাহায্য করুন</h1>
            <p className="mt-2 text-lg">আপনার উদারতা আমাদের মন্দিরকে সচল রাখে এবং সম্প্রদায়ের সেবা করতে সহায়তা করে.</p>
          </div>
  
          <div className="p-6 md:flex justify-center items-center md:space-x-6">
            {/* QR Code Section */}
            <div className="md:w-1/2 flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co.com/X2gf0wW/Whats-App-Image-2025-01-15-at-02-59-39-a01a02bb.jpg" // Replace with actual QR Code image path
              alt="QR Code"
              className="w-full object-cover rounded-2xl"
            />
              <p className="mt-4 text-center text-gray-600">
              সরাসরি দান করতে QR কোড স্ক্যান করুন। লেনদেনের পরে নীচে আপনার বিবরণ লিখুন
              </p>
            </div>
  
            {/* Donation Form Section */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-800 text-center">অনুদান ফর্ম</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-2 rounded-md shadow-sm focus:ring-[#8B4513] border-[#8B4513] bg-transparent"
                  />
                </div>
  
                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-2 rounded-md shadow-sm focus:ring-[#8B4513] border-[#8B4513] bg-transparent"
                  />
                </div>
  
                {/* Transaction ID */}
                <div>
                  <label
                    htmlFor="transactionId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    লেনদেন আইডি
                  </label>
                  <input
                    type="text"
                    id="transactionId"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border-2 rounded-md shadow-sm focus:ring-[#8B4513] border-[#8B4513] bg-transparent"
                  />
                </div>
  
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 text-white bg-gradient-to-r from-[#8B4513] to-[#F4A261] rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                  >
                    অনুদান জমা দিন
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          {/* Confirmation Dialog */}
          {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-green-700 font-semibold text-lg">Thank You for Your Donation!</h3>
            <p className="mt-2 text-gray-600">Here are the details you submitted:</p>
            <ul className="mt-2 text-gray-800">
              <li><strong>Name:</strong> {formData.name}</li>
              <li><strong>Phone:</strong> {formData.phone}</li>
              <li><strong>Transaction ID:</strong> {formData.transactionId}</li>
            </ul>
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#8B4513] text-white rounded-md shadow hover:bg-[#6f3610] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    );
};

export default Donation;