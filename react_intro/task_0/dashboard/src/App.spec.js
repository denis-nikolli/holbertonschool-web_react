import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component Robust Tests', () => {

    // Test 1: Single query for <h1> and its text content
    test('renders the correct h1 heading', () => {
        render(<App />);
        // Checks both the tag (heading level 1) and the text content
        const h1Element = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
        expect(h1Element).toBeInTheDocument();
    });

    // Test 2: Match <img> using alt attribute and ignore case
    test('renders the Holberton logo image via alt text', () => {
        render(<App />);
        // Ensure this regex matches the alt text exactly as it appears in App.js
        const logo = screen.getByAltText(/holberton logo/i);
        expect(logo).toBeInTheDocument();
    });

    // Test 3: Check for specific text content in body/footer ignoring case
    test('renders body and footer text content regardless of case', () => {
        render(<App />);

        // Checks for text content anywhere in the document ignoring case
        expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    });

});