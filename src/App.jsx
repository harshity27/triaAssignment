import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ContactCard from './components/ContactCard';
import ContactModal from './components/ContactModal';
import { initialContacts } from './data/contacts';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setContacts(initialContacts);
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate avatar initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Handle add/edit contact
  const handleSubmit = () => {
    if (editingId) {
      // Update existing contact
      setContacts(contacts.map(c => 
        c.id === editingId 
          ? { ...c, ...newContact, avatar: getInitials(newContact.name) }
          : c
      ));
      setEditingId(null);
    } else {
      // Add new contact
      const contact = {
        id: Date.now(),
        ...newContact,
        avatar: getInitials(newContact.name)
      };
      setContacts([contact, ...contacts]);
    }
    
    setNewContact({ name: '', email: '', phone: '' });
    setIsModalOpen(false);
  };

  // Handle edit
  const handleEdit = (contact) => {
    setNewContact({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
    setEditingId(contact.id);
    setIsModalOpen(true);
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setNewContact({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header onAddClick={() => setIsModalOpen(true)} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Loading contacts...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredContacts.length} {filteredContacts.length === 1 ? 'contact' : 'contacts'} found
              </p>
            </div>

            {filteredContacts.length === 0 ? (
              <div className="text-center py-20">
                <User className="mx-auto mb-4 text-gray-300" size={64} />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No contacts found</h3>
                <p className="text-gray-500">
                  {searchTerm ? 'Try a different search term' : 'Add your first contact to get started'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContacts.map((contact) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        contact={newContact}
        onChange={setNewContact}
        isEditing={!!editingId}
      />
    </div>
  );
}

export default App;