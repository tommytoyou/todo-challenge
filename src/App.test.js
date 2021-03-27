import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App';
import Form from './components/Form'

test('we have constrolled text input', async ()=> {
  render(<App  />)
  let inputField = screen.getByTestId('input')
  userEvent.type(inputField, 'hey fix this')
  expect(screen.getByTestId('input')).toHaveValue('hey fix this')
})


test('this is still the To-do List', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-do List/i);
  expect(linkElement).toBeInTheDocument();
});


