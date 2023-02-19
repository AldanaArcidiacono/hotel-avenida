/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Header from './header';

describe('When we render the header', () => {
    test('Then it should render Hotel', () => {
        const { getByText } = render(<Header />);

        expect(getByText(/Hotel/i)).toBeInTheDocument();
    });
});
