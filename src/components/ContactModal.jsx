import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const ContactModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  contact, 
  onChange, 
  isEditing 
}) => {
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    if (!phone) return false;
    const digits = String(phone).replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  };

  useEffect(() => {
    if (!isOpen) return;
    if (contact?.email) {
      setEmailError(validateEmail(contact.email) ? '' : 'Invalid email address');
    } else {
      setEmailError('');
    }

    if (contact?.phone) {
      setPhoneError(validatePhone(contact.phone) ? '' : 'Invalid phone number');
    } else {
      setPhoneError('');
    }
  }, [isOpen, contact?.email, contact?.phone]);

  const handleSubmit = () => {
    if (!contact.name || !contact.email || !contact.phone) {
      alert('Please fill all fields');
      return;
    }
    if (!validateEmail(contact.email)) {
      setEmailError('Invalid email address');
      return;
    }
    if (!validatePhone(contact.phone)) {
      setPhoneError('Invalid phone number');
      return;
    }
    onSubmit();
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    onChange({ ...contact, email: val });
    setEmailError(val === '' ? '' : (validateEmail(val) ? '' : 'Invalid email address'));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    onChange({ ...contact, phone: val });
    setPhoneError(val === '' ? '' : (validatePhone(val) ? '' : 'Invalid phone number'));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Contact' : 'Add New Contact'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              value={contact.name}
              onChange={(e) => onChange({ ...contact, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="john@example.com"
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              value={contact.phone}
              onChange={handlePhoneChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="+1 (555) 123-4567"
            />
            {phoneError && (
              <p className="text-red-600 text-sm mt-1">{phoneError}</p>
            )}
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2"
            >
              <Check size={20} />
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;