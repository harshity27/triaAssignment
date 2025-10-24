import React from 'react';
import { Mail, Phone, Edit2, Trash2 } from 'lucide-react';

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold text-white shadow-md">
          {contact.avatar}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onEdit(contact)}
            className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
            title="Edit contact"
          >
            <Edit2 size={16} className="text-blue-600" />
          </button>
          <button
            onClick={() => onDelete(contact.id)}
            className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200"
            title="Delete contact"
          >
            <Trash2 size={16} className="text-red-600" />
          </button>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{contact.name}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Mail size={16} className="flex-shrink-0" />
          <span className="truncate">{contact.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <Phone size={16} className="flex-shrink-0" />
          <span>{contact.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;