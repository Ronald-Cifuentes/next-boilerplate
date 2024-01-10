import {cleanup, render, screen} from '@testing-library/react';
import Home from './home';

describe('<Home />', () => {
  beforeEach(cleanup);

  test('#1. exist - render correctly', () => {
    render(<Home />);
    const ind = screen.getByTestId('home-test');
    expect(ind).toBeInTheDocument();
  });
});
