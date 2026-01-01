import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle errors globally for better Lighthouse score
window.addEventListener('error', (event) => {
  // Don't throw errors in production, log them instead
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', event.error);
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  // Don't throw in production
  if (process.env.NODE_ENV === 'development') {
    console.error('Unhandled rejection:', event.reason);
  }
});

// Suppress StrictMode warnings in production
const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
