import { Button } from '.';
import { render, screen } from '@testing-library/react';

describe('Testing a new button component', () => {
  it('renders the button', () => {
    render(<Button text='testButton' />);
    expect(screen.getByText('testButton')).toBeInTheDocument();
  });
});
