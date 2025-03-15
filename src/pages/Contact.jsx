// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [activeForm, setActiveForm] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    cv: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nMessage: ${formData.message}`;
    
    if (formData.cv) {
      emailBody += '\n\nNote: CV is attached as a PDF file.';
    }

    const mailtoLink = `mailto:haithem.ben.abdelaziz@gmail.com?subject=${encodeURIComponent(
      `${activeForm === 'cv' ? 'CV Submission' : activeForm === 'spontaneous' ? 'Spontaneous Application' : 'Contact Form'} from ${formData.name}`
    )}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Type Selection */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveForm('contact')}
            className={`px-4 py-2 rounded-lg ${activeForm === 'contact' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Contact Us
          </button>
          <button
            onClick={() => setActiveForm('cv')}
            className={`px-4 py-2 rounded-lg ${activeForm === 'cv' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Submit CV
          </button>
          <button
            onClick={() => setActiveForm('spontaneous')}
            className={`px-4 py-2 rounded-lg ${activeForm === 'spontaneous' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Spontaneous Application
          </button>
        </div>

        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to learn more about our services? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">haithem.ben.abdelaziz@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4">📱</div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">
                {activeForm === 'cv' ? 'Submit Your CV' : 
                 activeForm === 'spontaneous' ? 'Spontaneous Application' : 
                 'Contact Form'}
              </h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {(activeForm === 'cv' || activeForm === 'spontaneous') && (
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload CV (PDF)
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {activeForm === 'cv' ? 'Submit CV' : 
                 activeForm === 'spontaneous' ? 'Submit Application' : 
                 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
