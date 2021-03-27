import { waitForElementToBeRemoved, render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App';

test('we have controlled text input', async ()=> {
  render(<App  />)
  let inputField = screen.getByTestId('input')
  userEvent.type(inputField, 'hey fix this')
  expect(screen.getByTestId('input')).toHaveValue('hey fix this')
})

test('we add a todo', async ()=> {
  render(<App />)
  let inputField = screen.getByTestId('input')
  userEvent.type(inputField, 'my New Todo')
  userEvent.click(screen.getByTestId('submit-test'))
  let todo = screen.getByText(/my New Todo/);
  expect(todo).toBeInTheDocument();
})

test('we clear the input after adding a todo', async ()=> {
  render(<App />)
  let inputField = screen.getByTestId('input');
  userEvent.type(inputField, 'my New Todo');
  userEvent.click(screen.getByTestId('submit-test'));
  let todo = screen.getByText(/my New Todo/);
  // created todo is there
  expect(todo).toBeInTheDocument();
  // and the input is back to ''
  expect(screen.getByTestId('input')).toHaveValue('');
})

test('we add a todo and change view to look at complete todos', async ()=> {
  render(<App />)
  let inputField = screen.getByTestId('input');
  userEvent.type(inputField, 'my New Todo');
  userEvent.click(screen.getByTestId('submit-test'));
  let todo = screen.getByText(/my New Todo/);
  // created todo is there
  expect(todo).toBeInTheDocument();

  // ['completed', 'uncompleted', 'all'] options possible
  // this should select completed, so only todos with completed should be seen
  userEvent.selectOptions(screen.getByTestId('select'), ['completed']);
  expect(screen.getByTestId('completed').toBeInTheDocument)
  todo = screen.queryByText(/my New Todo/);
  expect(todo).toBeNull(); // it doesn't exist

  // toggle back to uncompleted
  userEvent.selectOptions(screen.getByTestId('select'), ['uncompleted']);
  // todo is back in action
  todo = screen.getByText(/my New Todo/);
  expect(todo).toBeInTheDocument(); // it is back in black 
})

test('the title is still in place as To-do List', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-do List/i);
  expect(linkElement).toBeInTheDocument();
});


