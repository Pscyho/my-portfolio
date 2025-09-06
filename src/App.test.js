import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

test('renders portfolio', () => {
  render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
  const nameElement = screen.getByText(/Hi, I'm Gadigeppa Tegginamani/i);
  expect(nameElement).toBeInTheDocument();
});
