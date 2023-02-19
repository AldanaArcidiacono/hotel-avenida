/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import App from './App';

describe('When we use the app', () => {
    test('Then it should render the Hotel name', () => {
        const { getByText } = render(<App />);

        expect(getByText(/Avenida/i)).toBeInTheDocument();
    });
});
