import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App';
import Form from './components/Form'

test('we have text input', async ()=> {
  render(<App  />)
  // fireEvent.click(screen.getById('submit-test'))
  // getByTestId looks at data-testid attribute
  let inputField = screen.getByTestId('input')
  console.log(inputField.value)
  userEvent.type(inputField, 'hey fix it')
  console.log(inputField.value)

  expect(screen.getByTestId('input')).toHaveValue('hey fix this')
})

  


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-do List/i);
  expect(linkElement).toBeInTheDocument();
});


