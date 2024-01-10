import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Index from '.';

describe('<Index />', () => {
  beforeEach(cleanup);

  test('#1. exist - render correctly', () => {
    render(<Index />);
    const ind = screen.getByTestId('index-test');
    expect(ind).toBeInTheDocument();
  });

  test('#2. click btn', () => {
    console.log = jest.fn();
    render(<Index />);
    const btn = screen.getByText('TestX');
    fireEvent.click(btn);
    expect(console.log).toHaveBeenCalledWith('TestXXX');
  });
});
