# 📇 Contact List Application

A modern, responsive contact management application built with React and Tailwind CSS featuring a premium dark theme UI.

## ✨ Features

- **View Contacts**: Beautiful card-based grid layout with avatar initials
- **Search**: Real-time search filtering by contact name
- **Add Contacts**: Sleek modal interface for adding new contacts
- **Edit Contacts**: Update existing contact information
- **Delete Contacts**: Remove contacts with confirmation
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Dark theme with gradients, glassmorphism, and smooth animations

## 🚀 Live Demo

[View Live Application](YOUR_DEPLOYMENT_URL)

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool

## 📦 Installation
```bash
# Clone the repository
git clone YOUR_REPO_URL
cd contact-list-app

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Build for Production
```bash
npm run build
```

## 📋 Design Decisions

1. **State Management**: Used React's `useState` hook for local state management - sufficient for this app's scope
2. **Mock Data**: Implemented initial contact data to simulate API responses with loading states
3. **Component Structure**: Single component approach for simplicity, can be refactored into smaller components for larger apps
4. **Styling**: Chose Tailwind CSS for rapid development and consistent design system
5. **Icons**: Used Lucide React for modern, customizable icons
6. **Form Handling**: Implemented manual form handling without external libraries to keep bundle size small
7. **Validation**: Basic client-side validation - alerts for required fields

## 🎨 UI/UX Highlights

- Gradient backgrounds and hover effects for visual appeal
- Loading spinner for better perceived performance
- Empty states for improved user guidance
- Smooth transitions and animations throughout
- Sticky header for easy access to main actions
- Card hover effects revealing edit/delete actions

## 🔮 Future Enhancements

- Backend API integration
- Contact categorization/groups
- Import/Export contacts (CSV, vCard)
- Contact photos upload
- Advanced search with filters
- Sorting options
- Pagination for large contact lists
- Dark/Light theme toggle

## Deployment
- Link : https://tria-assignment-lac.vercel.app/
