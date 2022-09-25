import { render, screen, cleanup } from '@testing-library/react';
import Form from '../components/Form'

test('Form rendering test', () => {
   render(<Form/>);
   const formElement = screen.getByTestId('test-1');
   expect(formElement).toBeInTheDocument();
})