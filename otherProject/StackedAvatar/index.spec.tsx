import { render, screen } from '@testing-library/react';
import { StackedAvatar } from '.';
describe('Testing Avatar', () => {
  it('render StackedAvatar', () => {
    render(<StackedAvatar />);
    expect(screen.getByText('pepe')).toBeInTheDocument();
  });
  it('pass url and return rendered image', () => {
    const images = [
      'https://avatars.githubusercontent.com/u/74176684?v=4',
      'https://w7.pngwing.com/pngs/445/50/png-transparent-programming-language-ruby-on-rails-computer-programming-programmer-ruby-label-computer-logo.png',
      'https://cnnespanol.cnn.com/wp-content/uploads/2017/05/160927210830-tk-ah0927-exlarge-169.jpg?quality=100&strip=info&w=320&h=240&crop=1',
    ];
    render(<StackedAvatar images={images} />);
    expect(document.querySelector('img')).toHaveAttribute('src', images[1]);
  });
});
