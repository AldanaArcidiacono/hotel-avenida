import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/app/App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
