import { Button } from '.';
import { render, screen } from '@testing-library/react';

describe('Testing a new button component', () => {
  it('renders the button', () => {
    render(<Button text='testButton' />);
    expect(screen.getByText('testButton')).toBeInTheDocument();
  });
  it('is if disable', () => {
    render(<Button text='testButton' disabled />);
    expect(screen.getByText('testButton')).toHaveAttribute('disabled');
  });
});
