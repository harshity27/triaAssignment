import React from 'react';
import { Plus } from 'lucide-react';

const Header = ({ onAddClick }) => {
  return (
    <div className="border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contacts
            </h1>
            <p className="text-gray-600 mt-1">Manage your contact list</p>
          </div>
          <button
            onClick={onAddClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;