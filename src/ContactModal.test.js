import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import ContactModal from './components/ContactModal';

afterEach(cleanup);

test('contact modal should have a form', () => {
  render(<ContactModal />);
  const contactModalForm = screen.getByTestId('contact-modal-form');

  expect(contactModalForm).toBeInTheDocument();
});

test('name input should exist on component', () => {
  render(<ContactModal />);
  const nameInput = screen.getByPlaceholderText('Name');

  expect(nameInput).toBeInTheDocument();
});

test('name input should be empty on start', () => {
  render(<ContactModal/>);
  const nameInput = screen.getByPlaceholderText('Name');

  expect(nameInput).toHaveValue('');
});

test('name input should be required', () => {
  render(<ContactModal />);
  const nameInput = screen.getByPlaceholderText('Name');

  expect(nameInput).toHaveAttribute('required');
})

test('name input should have a value attribute', () => {
  render(<ContactModal />);
  const nameInput = screen.getByPlaceholderText('Name');

  expect(nameInput).toHaveAttribute('value');
});

test('phone input should exist on component', () => {
  render(<ContactModal />);
  const phoneInput = screen.getByPlaceholderText('Phone Number');

  expect(phoneInput).toBeInTheDocument();
});

test('phone input should be empty on start', () => {
  render(<ContactModal />);
  const phoneInput = screen.getByPlaceholderText('Phone Number');

  expect(phoneInput).toHaveValue('');
});

test('phone input should be required', () => {
  render(<ContactModal />);
  const phoneInput = screen.getByPlaceholderText('Phone Number');

  expect(phoneInput).toHaveAttribute('required');
});

test('phone input should have a value attribute', () => {
  render(<ContactModal />);
  const phoneInput = screen.getByPlaceholderText('Phone Number');

  expect(phoneInput).toHaveAttribute('value');
});

test('email should exist on component', () => {
  render(<ContactModal />)
  const emailInput = screen.getByPlaceholderText('Email Address');

  expect(emailInput).toBeInTheDocument();
});

test('email should be empty on start', () => {
  render(<ContactModal />);
  const emailInput = screen.getByPlaceholderText('Email Address');

  expect(emailInput).toHaveValue('');
});

test('email input should be required', () => {
  render(<ContactModal />);
  const emailInput = screen.getByPlaceholderText('Email Address');

  expect(emailInput).toHaveAttribute('required');
});

test('email input should have a value attribute', () => {
  render(<ContactModal />);
  const emailInput = screen.getByPlaceholderText('Email Address');

  expect(emailInput).toHaveAttribute('value');
});

test('form should have a submit button', () => {
  render(<ContactModal/>);
  const submitButton = screen.getByRole('button');

  expect(submitButton).toBeInTheDocument();
});

test('submit button disabled on start', () => {
  render(<ContactModal/>);
  const submitButton = screen.getByRole('button');

  expect(submitButton).toBeDisabled();
});


test('submit button is enabled when name, phone, and email are not empty', () => {
  render(<ContactModal/>);
  const nameInput = screen.getByPlaceholderText('Name');
  const phoneInput = screen.getByPlaceholderText('Phone Number');
  const emailInput = screen.getByPlaceholderText('Email Address');

  fireEvent.change(nameInput, {target: {value: 'Javier Gonzalez'}});
  fireEvent.change(phoneInput, {target: {value: '555-555-5555'}});
  fireEvent.change(emailInput, {target: {value: 'jgonz0010@gmail.com'}});

  const submitButton = screen.getByRole('button');

  expect(nameInput).toHaveValue('Javier Gonzalez');
  expect(phoneInput).toHaveValue('555-555-5555');
  expect(emailInput).toHaveValue('jgonz0010@gmail.com');
  expect(submitButton).not.toBeDisabled();
});