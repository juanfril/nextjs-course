import { Button } from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing a new button component', () => {
  it('renders the button', () => {
    render(<Button text='testButton' />);
    expect(screen.getByText('testButton')).toBeInTheDocument();
  });
  it('is if disable', () => {
    render(<Button text='testButton' disabled />);
    expect(screen.getByText('testButton')).toHaveAttribute('disabled');
  });
  it('can fire an event', () => {
    const mockFunction = jest.fn();
    render(<Button text='testButton' onClick={mockFunction} />);
    fireEvent.click(screen.getByText('testButton'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
