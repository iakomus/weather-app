import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Weather App/i);
    expect(titleElement).toBeInTheDocument();
});
